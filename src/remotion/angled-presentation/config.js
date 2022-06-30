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
      "https://remotion.ap-south-1.linodeobjects.com/assetspexels-artem-podrez-7234993.mp4",
    video:
      "https://remotion.ap-south-1.linodeobjects.com/assetsScreen Recording 2022-06-25 at 6.31.33 PM.mov",
    audio:
      "https://remotion.ap-south-1.linodeobjects.com/assets205Oc_MHyd0O0L8y.mp3",
  },
  height: 600,
  width: 1066,
  authors: ["Mohit Yadav"],
  inputPropsSchema: [
    {
      type: "file",
      defaultValue:
        "https://remotion.ap-south-1.linodeobjects.com/assetspexels-artem-podrez-7234993.mp4",
      name: "Background Video",
      key: "bgVideo",
    },
    {
      type: "file",
      defaultValue:
        "https://remotion.ap-south-1.linodeobjects.com/assetsScreen Recording 2022-06-25 at 6.31.33 PM.mov",
      name: "Video",
      key: "video",
    },
    {
      type: "file",
      defaultValue:
        "https://remotion.ap-south-1.linodeobjects.com/assets205Oc_MHyd0O0L8y.mp3",
      name: "Audio",
      key: "audio",
    },
  ],
};
