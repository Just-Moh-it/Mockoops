import { useState, useCallback, useEffect } from "react";
// Next
import styles from "./index.module.scss";
// Miscellaneous
import { Shortcut } from "@shopify/react-shortcuts";
import DropBox from "components/DropBox";
import getBlobDuration from "get-blob-duration";
// State
import { useRecoilState, useRecoilValue } from "recoil";
import {
  inputPropsState,
  templateState,
  renderingStatusState,
  mediaFilesState,
} from "state/global";

// Icons
import {
  Export,
  Share,
  Video,
  CloudLightening,
  CloudLoading,
  Music,
} from "icons";

const RightSidebar = () => {
  const [inputProps, setInputProps] = useRecoilState(inputPropsState);
  const currentTemplate = useRecoilValue(templateState);
  const [files, setFiles] = useRecoilState(mediaFilesState);
  const [renderingStatus, setRenderingStatus] =
    useRecoilState(renderingStatusState);

  // Set the input props from the template config
  useEffect(() => {
    const { inputPropsSchema, durationInFrames, fps } = currentTemplate;

    [
      {
        type: "text",
        key: "height",
        defaultValue: currentTemplate?.height,
        name: "Height",
      },
      {
        type: "text",
        key: "width",
        defaultValue: currentTemplate?.width,
        name: "Width",
      },
      {
        type: "text",
        key: "durationInSeconds",
        defaultValue: durationInFrames / fps,
        name: "Duration (sec)",
      },
      ...(inputPropsSchema || []),
    ].map(({ defaultValue, key }) => {
      setInputProps((inputProps) => ({ ...inputProps, [key]: defaultValue }));

      if (["video", "audio"].includes(key)) {
        setFiles();
      }
    });
  }, [currentTemplate]);

  // Start rendering
  const initiateRender = () => {
    setRenderingStatus("rendering");
  };

  const handleFileAdd = useCallback(({ acceptedFiles, key }) => {
    const file = acceptedFiles.pop();
    const fileURL = URL.createObjectURL(file);

    setInputProps((currentProps) => ({ ...currentProps, [key]: fileURL }));
    setFiles((currentFiles) => ({ ...currentFiles, [key]: file }));

    // Set new duration if it's a video
    if (key === "video") {
      getBlobDuration(fileURL).then((duration) => {
        const { extraDuration } = currentTemplate;

        const newDuration = currentTemplate
          ? Math.floor(duration) + extraDuration
          : Math.floor(duration);

        setInputProps((currentProps) => ({
          ...currentProps,
          durationInSeconds: newDuration,
        }));
      });
    }
  }, []);

  const deleteFile = useCallback((key) => {
    setInputProps((currentProps) => ({ ...currentProps, [key]: null }));
    setFiles((currentFiles) => ({ ...currentFiles, [key]: null }));
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* Top Options */}
      <div className={styles.topOptions}>
        {renderingStatus === "uninitialized" ||
        renderingStatus === "rendering" ? (
          <>
            {/* Render Progress Buttons */}
            <button
              className={styles.export}
              disabled={renderingStatus === "rendering"}
              onClick={initiateRender}
            >
              {renderingStatus === "uninitialized" ? (
                <>
                  <CloudLightening color="#fff" />
                  <span>Render</span>

                  <div className="shortcut">
                    <kbd>⌘</kbd>
                    <span>+</span>
                    <kbd>J</kbd>
                    <Shortcut
                      held={[["Control"], ["Meta"]]}
                      ordered={["j"]}
                      onMatch={initiateRender}
                    />
                  </div>
                </>
              ) : (
                <>
                  <CloudLoading color="#fff" />
                  <span>Rendering...</span>
                </>
              )}
            </button>
          </>
        ) : (
          <>
            {/* Share */}
            <button className={styles.share}>
              <Share color="var(--bg)" />
            </button>

            {/* Export */}
            <button className={styles.export}>
              <Export color="#fff" />
              <span>Export</span>
              <div className="shortcut">
                <kbd>⌘</kbd>
                <span>+</span>
                <kbd>J</kbd>
              </div>
            </button>
          </>
        )}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <form className={styles.configuration}>
          {/* Heading */}
          <h3 className={styles.heading}>Configuration</h3>

          {/* Controls */}
          <div className="form-group">
            <div className="form-item">
              <DropBox
                icon={<Video color="var(--bg)" />}
                title="Add Video"
                subtitle="Click/drag"
                deleteFile={() => deleteFile("video")}
                onDrop={(acceptedFiles) =>
                  handleFileAdd({ acceptedFiles, key: "video" })
                }
                accept="video/*"
                // value={inputProps ? inputProps.video : []}
                label="Video"
                file={files?.video}
                fileURL={inputProps?.video}
              />
            </div>
            <div className="form-item">
              <DropBox
                icon={<Music color="var(--bg)" />}
                title="Add Audio"
                subtitle="Click/drag"
                deleteFile={() => deleteFile("audio")}
                onDrop={(acceptedFiles) =>
                  handleFileAdd({ acceptedFiles, key: "audio" })
                }
                accept="audio/*"
                // value={inputProps ? inputProps.audio : []}
                label="Audio"
                file={files?.audio}
                fileURL={inputProps?.audio}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="form-item">
              <label htmlFor="width">Width</label>
              <input
                type="number"
                step="10"
                id="width"
                placeholder="1080"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                value={inputProps?.width}
                onChange={({ target: { value } }) =>
                  setInputProps((current) => ({
                    ...current,
                    width: Number(value),
                  }))
                }
              />
            </div>
            <div className="form-item">
              <label htmlFor="height">Height</label>
              <input
                value={inputProps?.height}
                onChange={({ target: { value } }) =>
                  setInputProps((current) => ({
                    ...current,
                    height: Number(value),
                  }))
                }
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                type="number"
                step="10"
                id="height"
                placeholder="1920"
              />
            </div>
            <div className="form-item">
              <label htmlFor="height">Length (s)</label>
              <input
                value={inputProps?.durationInSeconds}
                onChange={({ target: { value } }) =>
                  setInputProps((current) => ({
                    ...current,
                    durationInSeconds: Number(value),
                  }))
                }
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                type="number"
                id="durationInSeconds"
                placeholder="1920"
              />
            </div>
          </div>
          <hr />

          {/* Custom Configurations - Input Props */}
          {currentTemplate?.inputPropsSchema?.map(
            ({ key, name, type, defaultValue }) => {
              console.log("Input Props set", inputProps);
              if (["video", "audio"].includes(key)) return;

              return (
                <div className="form-group">
                  <div className="form-item">
                    <label htmlFor={`config-input-${key}`}>{name}</label>
                    {
                      {
                        text: (
                          <input
                            type={isNaN(defaultValue) ? "text" : "number"}
                            id={`config-input-${key}`}
                            value={inputProps[key]}
                            onChange={({ target: { value } }) =>
                              setInputProps((inputProps) => ({
                                ...inputProps,
                                [key]: value,
                              }))
                            }
                          />
                        ),
                      }[type]
                    }
                  </div>
                </div>
              );
            }
          )}
        </form>
      </div>
    </div>
  );
};

export default RightSidebar;
