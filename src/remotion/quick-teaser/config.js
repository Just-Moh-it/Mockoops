import videoUrls from "../../utils/videoUrls";
import QuickTeaser from "./QuickTeaser";

export const config = {
  id: "quick-teaser",
  title: "Quick Teaser!",
  durationInFrames: 180,
  extraDuration: 0,
  fps: 30,
  template: QuickTeaser,
  defaultProps: {
    video: videoUrls.ASSETS_SUNRISE,
    audio: videoUrls.ES_LOVE,
  },
  height: 1080,
  width: 1920,
  authors: ["Mohit Yadav"],
  inputPropsSchema: [
    {
      type: "file",
      defaultValue: videoUrls.ASSETS_FINAL,
      name: "Video",
      key: "video",
    },
    {
      type: "file",
      defaultValue: videoUrls.ES_LOVE,
      name: "Audio",
      key: "audio",
    },
    {
      type: "number",
      defaultValue: 30,
      name: "Border Radius (px)",
      key: "borderRadius",
      step: 5,
      min: 0,
      max: 200,
    },
  ],
};
