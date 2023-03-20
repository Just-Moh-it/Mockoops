import { useState, useEffect, useRef, useCallback } from "react";
import { Info } from "icons";
import styles from "./index.module.scss";
import Link from "next/link";
import { Popover } from "@headlessui/react";
import { Player } from "@remotion/player";
import Stars from "animations/stars/Stars";
import { useRecoilValue } from "recoil";
import { templateState, inputPropsState } from "state/global";

import { secondsToTime } from "utils";

const Center = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [playerProgressSeconds, setPlayerProgressSeconds] = useState(0);
  const selectedTemplate = useRecoilValue(templateState);
  const inputProps = useRecoilValue(inputPropsState);

  useEffect(() => {
    return () => {};
  }, [playerProgressSeconds]);

  return (
    <div className={styles.wrapper}>
      {/* Top  */}
      <div className={styles.top}>
        {/* Heading */}
        <span>{selectedTemplate?.title}</span>

        {/* Info Button */}
        <Popover className={styles.info}>
          <Popover.Button className={styles.button}>
            <Info color="var(--primary-lightest)" />
          </Popover.Button>

          <Popover.Panel className={styles.panel}>
            <span>Information</span>
            <div className="form-group">
              <div className="form-item">
                <label htmlFor="name">Id</label>
                <input
                  type="text"
                  id="id"
                  defaultValue={selectedTemplate.id || "Untitled"}
                  disabled
                />
              </div>
              <div className="form-item">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  defaultValue={selectedTemplate.title || "Untitled"}
                  disabled
                />
              </div>
            </div>
            <div className="form-group">
              <div className="form-item">
                <label htmlFor="durationInFrames">
                  Default Duration (Frames)
                </label>
                <input
                  type="text"
                  id="durationInFrames"
                  // TODO: Make the duration value dynamic
                  defaultValue={selectedTemplate.durationInFrames}
                  disabled
                />
              </div>
              <div className="form-item">
                <label htmlFor="durationInTime">Default Duration (Time)</label>
                <input
                  type="text"
                  id="durationInTime"
                  // TODO: Make the duration value dynamic
                  defaultValue={`${secondsToTime(
                    Math.floor(
                      selectedTemplate?.durationInFrames / selectedTemplate?.fps
                    )
                  )}`}
                  disabled
                />
              </div>
            </div>
            <div className="form-group">
              <div className="form-item">
                <label htmlFor="fps">Frames per Second</label>
                <input
                  type="text"
                  id="fps"
                  // TODO: Make the duration value dynamic
                  defaultValue={selectedTemplate.fps}
                  disabled
                />
              </div>
            </div>
            <div className="form-group">
              <div className="form-item">
                <label htmlFor="authors">Author(s)</label>
                <input
                  type="text"
                  id="authors"
                  // TODO: Make the duration value dynamic
                  defaultValue={selectedTemplate.authors?.join(", ")}
                  disabled
                />
              </div>
            </div>
          </Popover.Panel>
        </Popover>
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* Video Player */}
        <div className={styles.videoPlayer}>
          {typeof window !== "undefined" && (
            <Player
              autoplay
              component={selectedTemplate?.template}
              compositionHeight={
                inputProps?.height || selectedTemplate?.height || 1080
              }
              compositionWidth={
                inputProps?.width || selectedTemplate?.width || 1920
              }
              durationInFrames={
                inputProps?.durationInSeconds
                  ? inputProps?.durationInSeconds * selectedTemplate?.fps
                  : selectedTemplate?.durationInFrames
              }
              doubleClickToFullscreen={true}
              inputProps={inputProps}
              fps={selectedTemplate?.fps}
              style={{
                width: "100%",
                height: "100%",
              }}
              controls
            />
          )}
        </div>
      </div>

      {/* Credits + Footer */}
      <footer className={styles.footer}>
        <Link href="https://twitter.com/Just_moh_it" passHref>
          <a className={styles.link}>
            Created by{" "}
            <span
              className="underline"
              onMouseOver={() => {
                setIsHovering(true);
              }}
              onMouseLeave={() => {
                setIsHovering(false);
              }}
            >
              {isHovering ? (
                <>
                  Mohit Yadav <span className={styles.wave}>👋</span>
                </>
              ) : (
                "This Guy"
              )}
            </span>
          </a>
        </Link>
      </footer>
    </div>
  );
};

export default Center;
