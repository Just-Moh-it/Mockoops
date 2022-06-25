import { useState, useCallback, useEffect } from "react";
// Next
import styles from "./index.module.scss";
// Miscellaneous
import { useDropzone } from "react-dropzone";
import { Shortcut } from "@shopify/react-shortcuts";
// State
import { useRecoilState, useRecoilValue } from "recoil";
import { inputPropsState, templateState } from "state/global";

// Icons
import { Export, Share, Video, CloudLightening, CloudLoading } from "icons";

const RightSidebar = () => {
  const [inputProps, setInputProps] = useRecoilState(inputPropsState);
  const currentTemplate = useRecoilValue(templateState);

  // TODO: Add on drop functions
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);

  useEffect(() => {
    if (!currentTemplate?.inputPropsSchema) return;

    const { inputPropsSchema } = currentTemplate;

    inputPropsSchema.map(({ defaultValue, key }) => {
      setInputProps((inputProps) => ({ ...inputProps, [key]: defaultValue }));
    });
  }, [currentTemplate]);

  // Either 'uninitialized', 'rendering', 'rendered', or 'error'
  const [renderingStatus, setRenderingStatus] = useState("uninitialized");
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const initiateRender = () => {
    setRenderingStatus("rendering");

    // After 5 seconds, change status again
    setTimeout(() => {
      setRenderingStatus("rendered");
    }, 5000);
  };

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
              <label
                {...getRootProps()}
                className={[
                  styles.file,
                  "file",
                  isDragActive ? "active" : "",
                ].join(" ")}
                htmlFor="video-input"
              >
                <input
                  type="file"
                  accept="video/*"
                  id="video-input"
                  {...getInputProps()}
                />
                <Video color="var(--bg)"></Video>
                <span className="title">Add your video</span>
                <span className="subtitle">Click or drag a video file</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <div className="form-item">
              <label htmlFor="height">Height</label>
              <input type="text" id="height" placeholder="1920" />
            </div>
            <div className="form-item">
              <label htmlFor="width">Width</label>
              <input type="text" id="width" placeholder="1080" />
            </div>
          </div>
          <hr />

          {/* Custom Configurations - Input Props */}
          {currentTemplate?.inputPropsSchema?.map(
            ({ key, name, type, defaultValue }) => {
              console.log("Input Props set", inputProps);

              return (
                <div className="form-group">
                  <div className="form-item">
                    <label htmlFor={`config-input-${key}`}>{name}</label>
                    {
                      {
                        text: (
                          <input
                            type="text"
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
