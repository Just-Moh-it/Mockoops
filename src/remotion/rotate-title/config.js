import { RotateTitle } from "./RotateTitle";

export const config = {
  id: "rotate-title",
  title: "Rotate Title",
  durationInFrames: 300,
  extraDuration: 0,
  fps: 30,
  template: RotateTitle,
  defaultProps: {
    title: "Mohit's Blog",
    subtitle: "Releasing today!",
  },
  height: 600,
  width: 1066,
  authors: ["Mohit Yadav"],
  inputPropsSchema: [
    {
      type: "text",
      defaultValue: "Mohit's Blog",
      name: "Title Text",
      key: "title",
    },
    {
      type: "text",
      defaultValue: "Releasing today!",
      name: "Subtitle Text",
      key: "subtitle",
    },
    {
      type: "file",
      defaultValue:
        "https://remotion.ap-south-1.linodeobjects.com/Screen Recording 2022-06-27 at 6.54.27 PM.mov",
      name: "Video",
      key: "video",
    },
    {
      type: "file",
      defaultValue:
        "https://remotion.ap-south-1.linodeobjects.com/ES_Come 2gether.mp3",
      name: "Audio",
      key: "audio",
    },
  ],
};
