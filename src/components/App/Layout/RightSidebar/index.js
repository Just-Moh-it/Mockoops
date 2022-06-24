import { useState, useCallback } from "react";
import styles from "./index.module.scss";
import { Export, Share } from "../../../../icons";
import { useDropzone } from "react-dropzone";
import { Video, CloudLightening, CloudLoading } from "../../../../icons";
import { Shortcut } from "@shopify/react-shortcuts";

const RightSidebar = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);

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
                className={["file", isDragActive ? "active" : ""].join(" ")}
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
          <div className="form-group">
            <div className="form-item">
              <label htmlFor="title">Title Slide</label>
              <input type="text" id="title" placeholder="1920" />
            </div>
          </div>
          <div className="form-group">
            <div className="form-item">
              <label htmlFor="gradient">Gradient</label>
              <input type="text" id="gradient" placeholder="1080" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RightSidebar;
