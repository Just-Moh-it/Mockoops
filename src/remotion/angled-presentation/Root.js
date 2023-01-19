import { Composition } from "remotion";
import videoUrls from "../../utils/videoUrls";
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
        bgVideo: videoUrls.PEXELS_ARTEM,
        video: videoUrls.PROTOTYPR_RECORDING,
        audio: videoUrls.PROTOTYPR_AUDIO,
      }}
    />
  );
};
