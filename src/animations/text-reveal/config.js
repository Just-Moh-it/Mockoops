import videoUrls from "../../utils/videoUrls";
import TextReveal from "./TextReveal";

export const config = {
  id: "text-reveal",
  title: "Text Reveal",
  durationInFrames: 112,
  extraDuration: 0,
  fps: 30,
  template: TextReveal,
  defaultProps: {
    video: videoUrls.ASSETS_FINAL,
    audio: videoUrls.ES_LOVE,
  },
  height: 1080,
  width: 1920,
  authors: ["Mohit Yadav"],
  inputPropsSchema: [
    {
      type: "file",
      defaultValue: videoUrls.PCKD_ANIME_3,
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
      type: "text",
      defaultValue: "Coming soon...",
      name: "Text",
      key: "text",
    },
  ],
};
