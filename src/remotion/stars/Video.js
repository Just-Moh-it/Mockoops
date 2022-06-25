import { Composition } from "remotion";
import Stars from "./Stars";

const MyVideo = () => {
  return (
    <Composition
      template={Stars}
      durationInFrames={300}
      fps={30}
      compositionHeight={1080}
      compositionWidth={1080}
    />
  );
};

export default MyVideo;
