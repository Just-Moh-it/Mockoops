import { atom, selector } from "recoil";
import { templates } from "remotion/templates";

// Template Id
export const templateIdState = atom({
  key: "selectedTemplateId",
  default: "stars",
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
