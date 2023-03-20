import videoUrls from "../../utils/videoUrls";
import Laptop from "./Laptop";

export const config = {
  id: "laptop",
  title: "Laptop Zoom",
  durationInFrames: 300,
  extraDuration: 0,
  fps: 30,
  template: Laptop,
  defaultProps: {
    bgVideo: videoUrls.PRODUCTION_ID_37,
    video: videoUrls.SCENERY,
    audio: videoUrls.ASSETS_SUNRISE,
  },
  height: 800,
  width: 1516,
  authors: ["Mohit Yadav"],
  inputPropsSchema: [
    {
      type: "file",
      defaultValue: videoUrls.PRODUCTION_ID_37,
      name: "Background Video",
      key: "bgVideo",
    },
    {
      type: "file",
      defaultValue: videoUrls.SCENERY,
      name: "Video",
      key: "video",
    },
    {
      type: "file",
      defaultValue: videoUrls.ASSETS_SUNRISE,
      name: "Audio",
      key: "audio",
    },
  ],
};
