import AngledPresentation from "./AngledPresentation";
import VideoUrls from "../../utils/videoUrls";
import videoUrls from "../../utils/videoUrls";

export const config = {
  id: "angled-presentation",
  title: "Angled Presentation",
  durationInFrames: 300,
  extraDuration: 0,
  fps: 30,
  template: AngledPresentation,
  defaultProps: {
    bgVideo: VideoUrls.PEXELS_ARTEM,
    video: VideoUrls.PROTOTYPR_RECORDING,
    audio: VideoUrls.PROTOTYPR_AUDIO,
  },
  height: 600,
  width: 1066,
  authors: ["Mohit Yadav"],
  inputPropsSchema: [
    {
      type: "file",
      defaultValue: VideoUrls.PEXELS_ARTEM,
      name: "Background Video",
      key: "bgVideo",
    },
    {
      type: "file",
      defaultValue: videoUrls.PROTOTYPR_RECORDING,
      name: "Video",
      key: "video",
    },
    {
      type: "file",
      defaultValue: videoUrls.PROTOTYPR_AUDIO,
      name: "Audio",
      key: "audio",
    },
  ],
};
