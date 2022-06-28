import { useState, useEffect } from "react";
import s3 from "./uploader";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  inputPropsState,
  templateState,
  renderingStatusState,
  mediaFilesState,
} from "state/global";

const RenderHandler = () => {
  const inputProps = useRecoilValue(inputPropsState);
  const template = useRecoilValue(templateState);
  const [renderingStatus, setRenderingStatus] =
    useRecoilState(renderingStatusState);
  const files = useRecoilValue(mediaFilesState);

  useEffect(() => {
    const startRender = async () => {
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
        const toSend = {
          ...inputProps,
          ...(finalPropsLinks.video && { video: finalPropsLinks.video }),
          ...(finalPropsLinks.audio && { audio: finalPropsLinks.audio }),
        };

        console.log("This stuff to be sent", toSend);
      } catch (err) {
        toast.error(`Error while uploading video/audio: ${err?.message}`, {
          id: "upload-status",
        });
      }
    };

    if (renderingStatus === "rendering") startRender();
  }, [renderingStatus]);

  return <></>;
};

export default RenderHandler;
