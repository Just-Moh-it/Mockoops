import TextReveal from "./TextReveal";

export const config = {
  id: "text-reveal",
  title: "Text Reveal",
  durationInFrames: 112,
  extraDuration: 0,
  fps: 30,
  template: TextReveal,
  defaultProps: {
    video: "https://remotion.ap-south-1.linodeobjects.com/assetsfinal.mp4",
    audio:
      "https://remotion.ap-south-1.linodeobjects.com/assetsES_Love Me Back.mp3",
  },
  height: 1080,
  width: 1920,
  authors: ["Mohit Yadav"],
  inputPropsSchema: [
    {
      type: "file",
      defaultValue:
        "https://remotion.ap-south-1.linodeobjects.com/assetsPckd-2 -Dashboard---Anime-3.mp4",
      name: "Video",
      key: "video",
    },
    {
      type: "file",
      defaultValue:
        "https://remotion.ap-south-1.linodeobjects.com/assetsES_Love Me Back.mp3",
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
