import { Composition } from "remotion";
import { RotateTitle } from "./RotateTitle";

const MyVideo = () => {
  return (
    <Composition
      id="rotate-title"
      fps={30}
      durationInFrames={1000}
      width={1066}
      height={600}
      component={RotateTitle}
      defaultProps={{ title: "Mohit's Blog", subtitle: "Releasing today!" }}
      loop
    />
  );
};

export default MyVideo;
