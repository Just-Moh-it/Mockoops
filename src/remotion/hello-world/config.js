import { HelloWorld } from "./HelloWorld";

export const config = {
  id: "hello-world",
  title: "Hello world",
  durationInFrames: 150,
  fps: 30,
  template: HelloWorld,
  defaultProps: {
    titleText: "Welcome to Remotion",
    titleColor: "orange",
  },
  height: 1080,
  width: 1920,
  authors: ["Mohit Yadav"],
  inputPropsSchema: [
    {
      type: "text",
      defaultValue: "Welcome to Remtotion",
      name: "Title Text",
      key: "titleText",
    },
    {
      type: "text",
      defaultValue: "orange",
      name: "Title Color",
      key: "titleColor",
    },
  ],
};
