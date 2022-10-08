import { RotateTitle } from "./RotateTitle";

export const config = {
  id: "rotate-title",
  title: "Rotate Title",
  durationInFrames: 300,
  extraDuration: 0,
  fps: 30,
  template: RotateTitle,
  defaultProps: {
    title: "New Website",
    subtitle: "Releasing today!",
  },
  height: 600,
  width: 1066,
  authors: ["Mohit Yadav"],
  inputPropsSchema: [
    {
      type: "text",
      defaultValue: "My new Website",
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
        "https://s3.ap-south-1.amazonaws.com/assets.mockoops.mohitya.dev/Screen+Recording+2022-06-27+at+6.54.27+PM+(1).mov",
      name: "Video",
      key: "video",
    },
    {
      type: "file",
      defaultValue:
        "https://dkihjuum4jcjr.cloudfront.net/ES_ITUNES/Come%202gether/ES_Come%202gether.mp3",
      name: "Audio",
      key: "audio",
    },
  ],
};
