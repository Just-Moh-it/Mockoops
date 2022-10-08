import QuickTeaser from "./QuickTeaser";

export const config = {
  id: "quick-teaser",
  title: "Quick Teaser!",
  durationInFrames: 180,
  extraDuration: 0,
  fps: 30,
  template: QuickTeaser,
  defaultProps: {
    video:
      "https://s3.ap-south-1.amazonaws.com/assets.mockoops.mohitya.dev/assetsfinal.mp4",
    audio:
      "https://s3.ap-south-1.amazonaws.com/assets.mockoops.mohitya.dev/ES_Love+Me+Back.mp3",
  },
  height: 1080,
  width: 1920,
  authors: ["Mohit Yadav"],
  inputPropsSchema: [
    {
      type: "file",
      defaultValue:
        "https://s3.ap-south-1.amazonaws.com/assets.mockoops.mohitya.dev/assetsfinal.mp4",
      name: "Video",
      key: "video",
    },
    {
      type: "file",
      defaultValue:
        "https://s3.ap-south-1.amazonaws.com/assets.mockoops.mohitya.dev/ES_Love+Me+Back.mp3",
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
