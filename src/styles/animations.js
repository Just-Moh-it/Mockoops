export const longFadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.7, easing: "ease-in-out" },
};

export const slap = {
  initial: {
    opacity: 0,
    scale: 0.75,
    y: 120,
    rotateX: 20,
    rotateY: 20,
  },
  whileInView: { opacity: 1, scale: 1, y: 0, rotateX: 0, rotateY: 0 },
  transition: {
    duration: 0.6,
    easings: [0, 0.99, 0.18, 0.99],
  },
  viewport: { once: true },
};

export const fadeFromBottom = {
  initial: {
    y: 10,
    opacity: 0,
    scale: 0.75,
  },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.3, easings: [0, 0.99, 0.18, 0.99] },
};
