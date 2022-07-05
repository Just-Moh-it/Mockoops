import Laptop from "./Laptop";

export const config = {
  id: "laptop",
  title: "Laptop Zoom",
  durationInFrames: 300,
  extraDuration: 0,
  fps: 30,
  template: Laptop,
  defaultProps: {
    bgVideo:
      "https://remotion.ap-south-1.linodeobjects.com/assetsproduction ID_4884237.mp4",
    video:
      "https://remotion.ap-south-1.linodeobjects.com/scenery.mp4",
    audio: "https://remotion.ap-south-1.linodeobjects.com/assetssunset.mp3",
  },
  height: 800,
  width: 1516,
  authors: ["Mohit Yadav"],
  inputPropsSchema: [
    {
      type: "file",
      defaultValue:
        "https://remotion.ap-south-1.linodeobjects.com/assetsproduction ID_4884237.mp4",
      name: "Background Video",
      key: "bgVideo",
    },
    {
      type: "file",
      defaultValue:
        "https://remotion.ap-south-1.linodeobjects.com/scenery.mp4",
      name: "Video",
      key: "video",
    },
    {
      type: "file",
      defaultValue:
        "https://remotion.ap-south-1.linodeobjects.com/assetssunset.mp3",
      name: "Audio",
      key: "audio",
    },
  ],
};
