import { useMemo } from "react";
import {
  AbsoluteFill,
  Video,
  useCurrentFrame,
  interpolate,
  Easing,
  Audio,
} from "remotion";
import videoUrls from "../../../utils/videoUrls";
// import Confetti from "remotion-confetti";

const QuickTeaser = ({ video, audio, text, isConfettiEnabled = true }) => {
  const frame = useCurrentFrame();

  const keyframes = {
    0: {
      rotateX: 0,
      rotateY: 0,
      rotate: 0,
      scale: 1.2,
      translateX: 0,
      translateY: 80,
      easing: Easing.bezier(1, 0, 0, 0.5),
      textOpacity: 0,
    },
    60: {
      rotateX: 0,
      rotateY: 0,
      rotate: 0,
      scale: 1.1,
      translateX: 0,
      translateY: 40,
      easing: Easing.bezier(1, 0, 0, 0.5),
      textOpacity: 0,
    },
    90: {
      rotateX: 0,
      rotateY: 0,
      rotate: 0,
      scale: 1.1,
      translateX: 0,
      translateY: 200,
      textOpacity: 1,
    },
    180: {
      rotateX: 0,
      rotateY: 0,
      rotate: 0,
      scale: 1.1,
      translateX: 0,
      translateY: 200,
      textOpacity: 1,
    },
  };

  const currentFromKeyframe = useMemo(() => {
    const keyframeValues = Object.values(keyframes);
    const keyframeFrames = Object.keys(keyframes).map((v) => Number(v));

    const [currentBaseFrameIndex, currentBaseFrame] = keyframeFrames.reduce(
      ([lastIndex, makeshiftCurrentFrame], toBeCheckedFrame, index) =>
        toBeCheckedFrame <= frame
          ? [index, toBeCheckedFrame]
          : [lastIndex, makeshiftCurrentFrame],
      [0, 0]
    );

    if (!keyframeValues[currentBaseFrameIndex + 1]) return null;

    const val = Object.keys(keyframeValues[currentBaseFrameIndex])
      .map(
        (key) =>
          key !== "easing" && {
            [key]: interpolate(
              frame,
              [currentBaseFrame, keyframeFrames[currentBaseFrameIndex + 1]],
              [
                keyframeValues[currentBaseFrameIndex][key],
                keyframeValues[currentBaseFrameIndex + 1][key],
              ],
              {
                easing:
                  keyframeValues[currentBaseFrameIndex]?.easing ??
                  Easing.linear,
              }
            ),
          }
      )
      .reduce((prev, curr) => ({ ...prev, ...curr }));

    return val;
  }, [frame]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        perspective: "1200px",
      }}
    >
      <AbsoluteFill style={{ backgroundColor: "black" }}>
        {/* Confetti, if enabled */}
        {/* {isConfettiEnabled && (
          <Confetti
            particleCount={200}
            startVelocity={50}
            decay={1}
            spread={360}
            ticks={100}
            gravity={0.5}
            x={960}
            y={360}
            
            scalar={1}
            colors={["#000000", "#FFFFFF"]}
          />
        )} */}
      </AbsoluteFill>

      {/* Background audio */}
      <Audio
        src={
          audio ||
          videoUrls.ES_LOVE
        }
        loop
      />

      <AbsoluteFill
        style={{
          top: "80px",
          right: "500px",
          width: "100%",
          height: "max-content",
          textAlign: "center",
          fontSize: "70px",
          fontFamily: "'Helvetica', sans-serif",
          fontWeight: "bold",
          color: "#1d1e20",
          opacity: currentFromKeyframe?.textOpacity,
        }}
      >
        {text}
      </AbsoluteFill>

      {/* Screen Video */}
      <AbsoluteFill
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "2px 2px 20px 5px rgba(0, 0, 0, .2)",
          transform: `
          scale(${currentFromKeyframe?.scale ?? 1.1})
          translateX(${currentFromKeyframe?.translateX ?? 0}px)
          translateY(${currentFromKeyframe?.translateY ?? 200}px)
          translateZ(${currentFromKeyframe?.translateZ ?? 0}px)
          rotateX(${currentFromKeyframe?.rotateX ?? 0}deg)
          rotateY(${currentFromKeyframe?.rotateY ?? 0}deg)
          rotate(${currentFromKeyframe?.rotate ?? 0}deg)
          `,
          borderRadius: "10px",
          width: "max-content",
          height: "max-content",
          margin: "auto",
          maxWidth: "1400px",
          borderRadius: "30px",
          overflow: "hidden",
        }}
      >
        {/* <Video
          src={
            video ||
            "https://pub-4bf634469b5c482e9546855c0abd7a17.r2.dev/Pckd-2+-Dashboard---Anime-3.mp4"
          }
          style={{
            width: "100%",
            height: "100%",
            minWidth: "1400px",
          }}
          muted
        /> */}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export default QuickTeaser;
