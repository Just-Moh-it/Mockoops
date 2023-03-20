import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Video,
} from "remotion";

const outerImage = {
  padding: 24,
  backgroundColor: "white",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 0 40px " + "pink",
  position: "relative",
};

const imageStyle = {
  borderRadius: "50%",
  width: 450,
  height: 450,
  border: "10px solid " + "orange",
  overflow: "hidden",
  position: "relative",
};

const titleStyle = {
  color: "pink",
  fontFamily: "Jelle",
  fontSize: 80,
  textAlign: "center",
  fontWeight: "bold",
  marginTop: 20,
};

export const RotateTitle = ({ stats, enableDecoration }) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const appear = spring({
    fps,
    frame,
    config: {
      mass: 2,
      damping: 2,
    },
  });

  const scale = interpolate(appear, [0, 1], [0.8, 1]);

  const avatarScale = interpolate(appear, [0, 1], [0, 1]);

  const rotateProg = spring({
    fps,
    frame: frame - 60,
    config: {
      damping: 200,
    },
  });

  const scaleY = interpolate(rotateProg, [0, 1], [1, -1]);
  const scaleY2 = interpolate(rotateProg, [0, 1], [-1, 1]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "orange",
      }}
    >
      <AbsoluteFill
        style={{
          opacity: 0.5,
        }}
      ></AbsoluteFill>
      {scaleY > 0 ? (
        <AbsoluteFill
          style={{
            justifyContent: "center",
            alignItems: "center",
            transform: `scale(${scaleY}, ${scale})`,
          }}
        >
          <div
            style={{
              transform: `scale(${avatarScale})`,
            }}
          >
            <div
              style={{
                ...outerImage,
                borderRadius: "50%",
                WebkitMaskImage: "-webkit-radial-gradient(white, black)",
              }}
            >
              <div style={imageStyle}></div>
              <div
                style={{
                  position: "absolute",
                  height: 140,
                  width: "100%",
                  bottom: 0,
                  backgroundColor: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 80,
                  fontFamily: "Jelle",
                  fontWeight: "bold",
                  color: "pink",
                  paddingBottom: 38,
                  overflow: "hidden",
                }}
              >
                2021
              </div>
            </div>
          </div>
        </AbsoluteFill>
      ) : null}
      {scaleY2 > 0 ? (
        <AbsoluteFill
          style={{
            justifyContent: "center",
            alignItems: "center",
            transform: `scale(${scaleY2}, ${scale})`,
          }}
        >
          <div style={titleStyle}>
            This is my
            <br />
            #GitHubUnwrapped
          </div>
        </AbsoluteFill>
      ) : null}
    </AbsoluteFill>
  );
};
