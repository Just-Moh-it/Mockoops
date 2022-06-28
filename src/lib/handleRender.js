import { useState, useEffect } from "react";
import s3 from "./uploader";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import { useRecoilState, useRecoilValue } from "recoil";
import ReactStopwatch from "react-stopwatch";
import {
  inputPropsState,
  templateIdState,
  renderingStatusState,
  mediaFilesState,
} from "state/global";
import { getHash } from "utils";

const RenderHandler = () => {
  const inputProps = useRecoilValue(inputPropsState);
  const currentTemplateId = useRecoilValue(templateIdState);
  const [renderingStatus, setRenderingStatus] =
    useRecoilState(renderingStatusState);
  const files = useRecoilValue(mediaFilesState);
  const [renderingStage, setRenderingStage] = useState("uninitialized");
  const [renderingProgress, setRenderingProgress] = useState(null);
  const [finalStuffToSend, setFinalStuffToSend] = useState({});

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
            console.log("File", newFileName, file);

            const { location } = await s3.uploadFile(file, newFileName);

            console.log("Uplaod complete", location);

            finalPropsLinks[type] = location;
          }
        }

        toast.success("Files uploaded successfully to Linode!", {
          id: "upload-status",
        });

        // Console log finalProps
        const propsToSend = {
          ...inputProps,
          ...(finalPropsLinks.video && { video: finalPropsLinks.video }),
          ...(finalPropsLinks.audio && { audio: finalPropsLinks.audio }),
        };

        console.log("This props to be sent", propsToSend);
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

      toast.loading(
        <>
          Rending Video...
          <br />
          ETA: ~1 min
          <br />
          Elapsed:{" "}
          {
            <ReactStopwatch
              seconds={0}
              minites={0}
              hours={0}
              limit="00:20:00"
              render={({ formatted, minutes }) => (
                <>
                  {formatted
                    .split(":")
                    .slice(1)
                    .map((i) => (i.includes("undefined") ? minutes || "00" : i))
                    .join(":")}
                </>
              )}
            />
          }
          <br />
          Progress:{renderingProgress || "0"}%
        </>,
        {
          id: "render-status",
        }
      );

      const res = await fetch("/api/render", {
        method: "POST",
        body: JSON.stringify(finalStuffToSend),
      });
      const prog = await res.json();
      setRenderingProgress(prog);

      try {
      } catch (err) {
        toast.error(`Error while rendering: ${err?.message}`, {
          id: "render-status",
        });
      }
    };

    const poll = async () => {
      const { inputId } = finalStuffToSend;

      const progress = await fetch("/api/progress", {
        method: "POST",
        body: JSON.stringify({ inputId }),
      });
      const progressJson = await progress.json();
      setRenderingProgress(progressJson);
      if (progressJson.type !== "finality") {
        setTimeout(poll, 1000);
      }
    };

    if (finalStuffToSend.compId) {
      switch (renderingStage) {
        case "start-render":
          startRendering();
        case "poll-progress":
          // Regularly poll for progress
          poll();
        default:
          null;
      }
    }
  }, [finalStuffToSend, renderingStage]);

  return <></>;
};

export default RenderHandler;
