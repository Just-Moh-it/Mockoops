import TextReveal from "./TextReveal";

export const config = {
  id: "text-reveal",
  title: "Text Reveal",
  durationInFrames: 112,
  extraDuration: 0,
  fps: 30,
  template: TextReveal,
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
        "https://s3.ap-south-1.amazonaws.com/assets.mockoops.mohitya.dev/Pckd-2+-Dashboard---Anime-3.mp4",
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
      type: "text",
      defaultValue: "Coming soon...",
      name: "Text",
      key: "text",
    },
  ],
};
