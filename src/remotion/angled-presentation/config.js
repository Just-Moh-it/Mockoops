import AngledPresentation from "./AngledPresentation";

export const config = {
  id: "angled-presentation",
  title: "Angled Presentation",
  durationInFrames: 300,
  extraDuration: 0,
  fps: 30,
  template: AngledPresentation,
  defaultProps: {
    bgVideo:
      "https://s3.ap-south-1.amazonaws.com/assets.mockoops.mohitya.dev/pexels-artem-podrez-7234993+(1).mp4",
    video:
      "https://s3.ap-south-1.amazonaws.com/assets.mockoops.mohitya.dev/assetsScreen+Recording+2022-06-25+at+6.31.33+PM.mov",
    audio:
      "https://s3.ap-south-1.amazonaws.com/assets.mockoops.mohitya.dev/prototypr.mp3",
  },
  height: 600,
  width: 1066,
  authors: ["Mohit Yadav"],
  inputPropsSchema: [
    {
      type: "file",
      defaultValue:
        "https://s3.ap-south-1.amazonaws.com/assets.mockoops.mohitya.dev/pexels-artem-podrez-7234993+(1).mp4",
      name: "Background Video",
      key: "bgVideo",
    },
    {
      type: "file",
      defaultValue:
        "https://s3.ap-south-1.amazonaws.com/assets.mockoops.mohitya.dev/assetsScreen+Recording+2022-06-25+at+6.31.33+PM.mov",
      name: "Video",
      key: "video",
    },
    {
      type: "file",
      defaultValue:
        "https://s3.ap-south-1.amazonaws.com/assets.mockoops.mohitya.dev/prototypr.mp3",
      name: "Audio",
      key: "audio",
    },
  ],
};
