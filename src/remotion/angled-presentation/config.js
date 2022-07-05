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
      "https://remotion.ap-south-1.linodeobjects.com/bg-v.mp4",
    video:
      "https://remotion.ap-south-1.linodeobjects.com/jasdf.mp4",
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
        "https://remotion.ap-south-1.linodeobjects.com/bg-v.mp4",
      name: "Background Video",
      key: "bgVideo",
    },
    {
      type: "file",
      defaultValue:
        "https://remotion.ap-south-1.linodeobjects.com/jasdf.mp4",
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
