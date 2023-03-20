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

const QuickTeaser = ({ video, audio, borderRadius }) => {
  const frame = useCurrentFrame();

  const keyframes = {
    0: {
      rotateX: 8,
      rotateY: 20,
      rotate: -5,
      scale: 2,
      translateX: 420,
      translateY: 400,
    },
    30: {
      rotateX: 8,
      rotateY: 20,
      rotate: -5,
      scale: 2,
      translateX: 450,
      translateY: 150,
    },
    31: {
      rotateX: 0,
      rotateY: -20,
      rotate: 0,
      scale: 1.8,
      translateX: 10,
      translateY: 150,
    },
    90: {
      rotateX: 0,
      rotateY: -20,
      rotate: 0,
      scale: 1.8,
      translateX: 10,
      translateY: -170,
    },
    91: {
      rotateX: 0,
      rotateY: 0,
      rotate: 0,
      scale: 1.1,
      translateX: 0,
      translateY: 60,
      easing: Easing.bezier(0.09, 0, 0.02, 0.99),
    },
    180: {
      rotateX: 0,
      rotateY: 0,
      rotate: 0,
      scale: 1,
      translateX: 0,
      translateY: 40,
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
      {/* QuickTeaser Video */}

      <Audio src={audio || videoUrls.ES_LOVE} loop />

      {/* Screen Video */}
      <AbsoluteFill
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "2px 2px 20px 5px rgba(0, 0, 0, .2)",
          transform: `
          scale(${currentFromKeyframe?.scale ?? 1})
          translateX(${currentFromKeyframe?.translateX ?? 0}px)
          translateY(${currentFromKeyframe?.translateY ?? 40}px)
          translateZ(${currentFromKeyframe?.translateZ ?? 0}px)
          rotateX(${currentFromKeyframe?.rotateX ?? 0}deg)
          rotateY(${currentFromKeyframe?.rotateY ?? 0}deg)
          rotate(${currentFromKeyframe?.rotate ?? 0}deg)
          `,
          width: "max-content",
          height: "max-content",
          margin: "auto",
          maxWidth: "1400px",
          borderRadius: borderRadius ? `${borderRadius}px` : "30px",
          overflow: "hidden",
        }}
      >
        <Video
          src={
            video ||
            "https://pub-4bf634469b5c482e9546855c0abd7a17.r2.dev/assetsfinal.mp4"
          }
          style={{
            width: "100%",
            height: "100%",
            minWidth: "1400px",
          }}
          muted
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export default QuickTeaser;
