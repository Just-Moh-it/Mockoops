import QuickTeaser from "./QuickTeaser";

export const config = {
  id: "quick-teaser",
  title: "Quick Teaser!",
  durationInFrames: 180,
  extraDuration: 0,
  fps: 30,
  template: QuickTeaser,
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
        "https://remotion.ap-south-1.linodeobjects.com/assetsfinal.mp4",
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
  ],
};
