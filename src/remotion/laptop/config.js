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
      "https://s3.ap-south-1.amazonaws.com/assets.mockoops.mohitya.dev/production+ID_4884237.mp4",
    video:
      "https://s3.ap-south-1.amazonaws.com/assets.mockoops.mohitya.dev/scenery.mp4",
    audio:
      "https://s3.ap-south-1.amazonaws.com/assets.mockoops.mohitya.dev/assetssunset.mp3",
  },
  height: 800,
  width: 1516,
  authors: ["Mohit Yadav"],
  inputPropsSchema: [
    {
      type: "file",
      defaultValue:
        "https://s3.ap-south-1.amazonaws.com/assets.mockoops.mohitya.dev/production+ID_4884237.mp4",
      name: "Background Video",
      key: "bgVideo",
    },
    {
      type: "file",
      defaultValue:
        "https://s3.ap-south-1.amazonaws.com/assets.mockoops.mohitya.dev/scenery.mp4",
      name: "Video",
      key: "video",
    },
    {
      type: "file",
      defaultValue:
        "https://s3.ap-south-1.amazonaws.com/assets.mockoops.mohitya.dev/assetssunset.mp3",
      name: "Audio",
      key: "audio",
    },
  ],
};
