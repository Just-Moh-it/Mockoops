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
        bgVideo:
          "https://remotion.ap-south-1.linodeobjects.com/assetspexels-artem-podrez-7234993.mp4",
        blurTo: 10,
        video:
          "https://remotion.ap-south-1.linodeobjects.com/assetsScreen Recording 2022-06-25 at 6.31.33 PM.mov",
        audio:
          "https://remotion.ap-south-1.linodeobjects.com/assets205Oc_MHyd0O0L8y.mp3",
      }}
    />
  );
};
