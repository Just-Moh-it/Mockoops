import { Composition } from "remotion";
import { MyComp } from "./Composition";
import { StarEmoji } from "./StarEmoji";
import Stars from "./Stars";

export const Root = () => {
  return (
    <>
      <Composition
        component={MyComp}
        durationInFrames={300}
        fps={30}
        height={1080}
        width={1080}
        id="wrapped"
      ></Composition>
      <Composition
        component={Stars}
        durationInFrames={300}
        fps={30}
        height={1080}
        width={1080}
        id="starred"
      ></Composition>
      <Composition
        component={StarEmoji}
        durationInFrames={300}
        fps={30}
        height={1080}
        width={1080}
        id="star-emoji"
      ></Composition>
    </>
  );
};
