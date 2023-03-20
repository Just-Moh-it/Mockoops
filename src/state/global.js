import { atom, selector } from "recoil";
import { templates } from "animations/templates";

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

export const downloadProgressState = atom({
  key: "downloadProgress",
  default: null,
});

export const modalState = atom({
  key: "modalState",
  default: {
    isOpen: false,
    content: <></>,
  },
});
