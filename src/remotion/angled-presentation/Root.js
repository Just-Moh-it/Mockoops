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
          "https://s3.ap-south-1.amazonaws.com/assets.mockoops.mohitya.dev/pexels-artem-podrez-7234993+(1).mp4",
        video:
          "https://s3.ap-south-1.amazonaws.com/assets.mockoops.mohitya.dev/assetsScreen+Recording+2022-06-25+at+6.31.33+PM.mov",
        audio:
          "https://s3.ap-south-1.amazonaws.com/assets.mockoops.mohitya.dev/prototypr.mp3",
      }}
    />
  );
};
