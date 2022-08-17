import { useState, useEffect } from "react";
// Utils
import s3 from "./uploader";
import { v4 as uuidv4 } from "uuid";
import { getHash } from "utils";
// State
import { useRecoilState, useRecoilValue } from "recoil";
import {
  inputPropsState,
  templateIdState,
  renderingStatusState,
  mediaFilesState,
  modalState,
} from "state/global";

// Visuals
import toast from "react-hot-toast";
import { CheckLottie, Export, Share, DownloadLottie } from "icons";
import Lottie from "react-lottie-player";
import styles from "./index.module.scss";
import LoadingBar from "react-top-loading-bar";

const RenderHandler = () => {
  const inputProps = useRecoilValue(inputPropsState);
  const currentTemplateId = useRecoilValue(templateIdState);
  const [renderingStatus, setRenderingStatus] =
    useRecoilState(renderingStatusState);
  const files = useRecoilValue(mediaFilesState);
  const [renderingStage, setRenderingStage] = useState("uninitialized");
  const [renderingProgress, setRenderingProgress] = useState(null);
  const [finalStuffToSend, setFinalStuffToSend] = useState({});
  const [_, setModal] = useRecoilState(modalState);

  useEffect(() => {
    if (renderingStage === "rendering")
      toast.loading("Rendering Video...", {
        id: "render-status",
      });
  }, [renderingStage, renderingStatus, renderingProgress]);

  const download = () => {
    if (!url) return;

    setModal({
      isOpen: true,
      content: (
        <div className={styles.modal}>
          <Lottie
            animationData={DownloadLottie}
            play
            style={{ width: "300px", height: "300px" }}
            loop={true}
          />
          <div className={styles.info}>
            <h2 className={styles.heading}>Downloading...</h2>
            <p className={styles.description}>
              The download will start shortly. If not, click{" "}
              <a
                href={url}
                className={["underline", "secondary"].join(" ")}
                download
                rel="noopener noreferrer"
                target="_blank"
              >
                Here
              </a>
            </p>
          </div>
        </div>
      ),
    });
  };

  useEffect(() => {
    const startUpload = async () => {
      setRenderingStage("uploading");

      try {
        toast.loading("Uploading files...", { id: "upload-status" });

        let finalPropsLinks = { audio: null, video: null };

        if (files) {
          for (const [type, file] of Object.entries(files)) {
            if (!(file || typeof inputProps[type] !== "string")) {
              continue;
            }

            const newFileName = `${uuidv4()}.${
              { audio: "mp3", video: "mp4" }[type]
            }`;

            const { location } = await s3.uploadFile(file, newFileName);

            finalPropsLinks[type] = location;
          }
        }

        toast.success("Files uploaded successfully!", {
          id: "upload-status",
        });

        // Console log finalProps
        const propsToSend = {
          ...inputProps,
          ...(finalPropsLinks.video && { video: finalPropsLinks.video }),
          ...(finalPropsLinks.audio && { audio: finalPropsLinks.audio }),
        };

        const input = { inputProps: propsToSend, compId: currentTemplateId };

        // Handle the rendering
        const stuffToSend = {
          ...input,
          inputId: getHash(JSON.stringify(input)),
        };
        setRenderingStage("start-render");
        setFinalStuffToSend(stuffToSend);
      } catch (err) {
        toast.error(`Error while uploading video/audio: ${err?.message}`, {
          id: "upload-status",
        });
      }
    };

    if (renderingStatus === "rendering") startUpload();
  }, [renderingStatus]);

  useEffect(() => {
    const startRendering = async () => {
      setRenderingStage("rendering");

      const res = await fetch("/api/render", {
        method: "POST",
        body: JSON.stringify(finalStuffToSend),
      });
      const prog = await res.json();
      setRenderingProgress(prog);

      if (prog?.type === "finality" && prog?.finality?.errors) {
        toast.error(
          `Error while rendering: ${prog?.finality?.errors}. Please try later`,
          {
            id: "render-status",
          }
        );
      }
    };

    const poll = async () => {
      const { inputId } = finalStuffToSend;

      try {
        const progress = await fetch("/api/progress", {
          method: "POST",
          body: JSON.stringify({ inputId }),
        });
        const progressJson = await progress.json();
        setRenderingProgress(progressJson);
        console.log(progressJson);

        const { type, finality } = progressJson;

        if (type !== "finality") {
          setTimeout(poll, 5000);
        } else if (
          type === "error" ||
          (type === "finality" && finality?.type === "error")
        ) {
          setRenderingStage("Error");
          return toast.error(
            `Error while rendering: ${progressJson?.finality?.errors}`,
            {
              id: "render-status",
            }
          );
        } else if (type === "finality") {
          setRenderingStage("complete");
          return "done";
        }
      } catch (err) {
        console.error(err);
        setTimeout(poll, 5000);
      }
    };

    if (finalStuffToSend.compId) {
      switch (renderingStage) {
        case "start-render":
          startRendering();
        case "poll-progress":
          // Regularly poll for progress
          setTimeout(poll, 2000);
        case "complete":
          if (renderingProgress?.finality?.url) {
            toast.dismiss("render-status");

            setModal({
              isOpen: true,
              content: (
                <div className={styles.modal}>
                  <Lottie
                    animationData={CheckLottie}
                    play
                    style={{ width: "300px", height: "300px" }}
                    loop={false}
                  />

                  <div className={styles.info}>
                    <h2 className={styles.heading}>Download Ready</h2>
                    <p className={styles.description}>
                      Your render is complete and ready to download
                    </p>
                  </div>

                  <div className={styles.buttons}>
                    {/* Share */}
                    <button className={styles.share}>
                      <Share color="var(--bg)" />
                    </button>
                    {/* Export */}
                    <a
                      href={renderingProgress?.finality?.url}
                      className={styles.export}
                      download
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Export color="#fff" />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              ),
              props: { isConfetti: true },
            });

            setRenderingStatus("uninitialized");
            setRenderingStage("uninitialized");
            setRenderingProgress(null);
            setFinalStuffToSend({});
          }
        default:
          null;
      }
    }
  }, [finalStuffToSend, renderingStage]);

  return (
    <>
      <LoadingBar
        color="linear-gradient(90deg, rgba(64,201,255,1) 0%, rgba(232,28,255,1) 100%)"
        progress={
          Math.floor(renderingProgress?.progress?.percent * 10000 || 10000) /
            100 ?? 100
        }
        style={{ zIndex: 1000 }}
      />
    </>
  );
};

export default RenderHandler;
