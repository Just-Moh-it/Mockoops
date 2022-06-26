import { RotateTitle } from "./RotateTitle";

export const config = {
  id: "rotate-title",
  title: "Rotate Title",
  durationInFrames: 300,
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
  ],
};
