import { useMemo } from "react";
import {
  AbsoluteFill,
  Video,
  Loop,
  useVideoConfig,
  useCurrentFrame,
  interpolate,
  Easing,
  Audio,
} from "remotion";
import {
  wrapperStyles,
  bgVideoStyles,
  deviceStyles,
  deviceVideoStyles,
} from "./index.style";
import MenuBar from "./MenuBar";

const AngledPresentation = ({ bgVideo, video, audio }) => {
  const frame = useCurrentFrame();

  const keyframes = {
    0: {
      z: 330,
      rotateY: -20,
      rotateX: 15,
      rotate: -7,
      easing: Easing.bezier(0, 0, 0, 1),
    },
    60: {
      z: 0,
      rotateY: 0,
      rotateX: 0,
      rotate: 0,
      easing: Easing.linear,
    },
    160: {
      z: 330,
      rotateY: 20,
      rotateX: 15,
      rotate: 7,
      easing: Easing.bezier(0, 0, 0, 1),
    },
    300: {
      z: 0,
      rotateY: 0,
      rotateX: 0,
      rotate: 0,
    },
  };

  const currentFromKeyframe = useMemo(() => {
    const keyframeValues = Object.values(keyframes);
    const keyframeFrames = Object.keys(keyframes).map((v) => Number(v));

    const [currentBaseFrameIndex, currentBaseFrame] = keyframeFrames.reduce(
      ([lastIndex, makeshiftCurrentFrame], toBeCheckedFrame, index) =>
        toBeCheckedFrame <= frame % 300
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
              frame % 300,
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
    <AbsoluteFill style={wrapperStyles}>
      {/* Background Video */}
      <div>
        <Loop durationInFrames={300}>
          <Video
            style={{ ...bgVideoStyles }}
            src={
              bgVideo ||
              "https://remotion.ap-south-1.linodeobjects.com/bg-v.mp4"
            }
            muted
          />
          <Audio
            src={
              audio ||
              "https://remotion.ap-south-1.linodeobjects.com/assets205Oc_MHyd0O0L8y.mp3"
            }
          />
        </Loop>
      </div>

      {/* Device */}
      <div
        style={{
          ...deviceStyles,
          transform: `translateZ(${currentFromKeyframe?.z}px) rotateY(${currentFromKeyframe?.rotateY}deg) rotateX(${currentFromKeyframe?.rotateX}deg) rotate(${currentFromKeyframe?.rotate}deg)`,
        }}
      >
        <MenuBar />
        <Video
          src={
            video ||
            "https://remotion.ap-south-1.linodeobjects.com/Screen Recording 2022-06-27 at 6.54.27 PM.mov"
          }
          style={{ ...deviceVideoStyles }}
          muted
        />
      </div>
    </AbsoluteFill>
  );
};

export default AngledPresentation;
