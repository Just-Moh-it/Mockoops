import { Composition } from "remotion";
import AngledPresentation from "./AngledPresentation";

export const Root = () => {
  return (
    <Composition
      durationInFrames={300}
      fps={30}
      component={AngledPresentation}
      id="angled-presentation"
      width={1066}
      height={600}
      defaultProps={{
        bgVideo: "https://remotion.ap-south-1.linodeobjects.com/bg-v.mp4",
        video: "https://remotion.ap-south-1.linodeobjects.com/jasdf.mp4",
        audio:
          "https://remotion.ap-south-1.linodeobjects.com/assets205Oc_MHyd0O0L8y.mp3",
      }}
    />
  );
};
