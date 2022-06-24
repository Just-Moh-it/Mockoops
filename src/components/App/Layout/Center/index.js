import { useState, useEffect, useRef } from "react";
import { Info, Play, Pause, Forward, Backward } from "../../../../icons";
import styles from "./index.module.scss";
import Link from "next/link";
import { Popover } from "@headlessui/react";
import { Player } from "@remotion/player";
import { Stars } from "../../../../../remotion/Stars";
// import { HelloWorld } from "../../../../../remotion/HelloWorld";

const Center = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [playerProgressSeconds, setPlayerProgressSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const player = useRef(null);

  const durationSeconds = 120;

  useEffect(() => {
    console.log(playerProgressSeconds);

    return () => {};
  }, [playerProgressSeconds]);

  return (
    <div className={styles.wrapper}>
      {/* Top  */}
      <div className={styles.top}>
        {/* Heading */}
        <span>Gradient Template</span>

        {/* Info Button */}
        <Popover className={styles.info}>
          <Popover.Button className={styles.button}>
            <Info color="var(--primary-lightest)" />
          </Popover.Button>

          <Popover.Panel className={styles.panel}>
            Gradient Template
            <div className="form-group">
              <div className="form-item">
                <label htmlFor="gradient-start">Name</label>
                <input type="text" defaultValue="Gradient Start" disabled />
              </div>
            </div>
            <div className="form-group">
              <div className="form-item">
                <label htmlFor="gradient-start">Duration</label>
                <input
                  type="text"
                  defaultValue={secondsToTime(durationSeconds)}
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
              component={Stars}
              compositionHeight={1080}
              compositionWidth={1080}
              durationInFrames={300}
              fps={30}
              style={{
                width: 540,
                height: 540,
              }}
              controls
            />
          )}
        </div>

        {/* Controller */}
        <div className={styles.controller}>
          {/* Play/Pause, rewind, forward */}
          <div className={styles.playback}>
            <button
              className={styles.rewind}
              onClick={() => {
                setPlayerProgressSeconds(
                  playerProgressSeconds - 10 > 0
                    ? playerProgressSeconds - 10
                    : 0
                );
              }}
            >
              <Backward color="var(--bg)" />
            </button>
            <button
              className={styles.play}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause color="var(--bg)" />
              ) : (
                <Play color="var(--bg)" />
              )}
            </button>
            <button
              className={styles.forward}
              onClick={() => {
                setPlayerProgressSeconds(
                  playerProgressSeconds + 10 < durationSeconds
                    ? playerProgressSeconds + 10
                    : durationSeconds
                );
              }}
            >
              <Forward color="var(--bg)" />
            </button>
          </div>

          {/* Player progress */}
          <div className={styles.progressContainer}>
            <input
              type="range"
              className={styles.progress}
              min="0"
              max={durationSeconds}
              step="1"
              value={playerProgressSeconds}
              onChange={(e) => setPlayerProgressSeconds(Number(e.target.value))}
            ></input>
          </div>

          {/* Time elapsed and Duration */}
          <div className={styles.time}>
            <span className={styles.elapsed}>
              {secondsToTime(playerProgressSeconds)}
            </span>
            <span className={styles.duration}>
              {" "}
              / {secondsToTime(durationSeconds)}
            </span>
          </div>
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

const secondsToTime = (elapsed) => {
  const minutes = Math.floor(elapsed / 60);
  const seconds = Math.floor(elapsed % 60);

  return `${minutes < 9 ? "0" + minutes : minutes}:${
    seconds < 9 ? "0" + seconds : seconds
  }`;
};

export default Center;
