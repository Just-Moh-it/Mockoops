import { atom, selector } from "recoil";
import { templates } from "remotion/templates";

// Template Id
export const templateIdState = atom({
  key: "selectedTemplateId",
  default: "rotate-title",
});

// Template
export const templateState = selector({
  key: "selectedTemplate",
  get: ({ get }) => {
    const id = get(templateIdState);

    return templates.find((template) => template.id === id);
  },
});

// Input Props
export const inputPropsState = atom({
  key: "inputProps",
  default: {},
});

export const renderingStatusState = atom({
  key: "renderingStatus",
  default: "uninitialized",
});

export const mediaFilesState = atom({
  key: "mediaFiles",
  default: { audio: null, video: null },
});
