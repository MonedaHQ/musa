export const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: 'linear', ease: [0.76, 0, 0.24, 1] },
  },
};

export const perspectiveFast = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.35,
      delay: 0.1 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: 'linear', ease: [0.76, 0, 0.24, 1] },
  },
};

export const grow = {
  initial: {
    height: 0,
    opacity: 0,
    scaleY: 0,
    originY: 0,
  },
  enter: {
    height: 'auto',
    opacity: 1,
    scaleY: 1,
    originY: 0,
    transition: {
      height: { duration: 0.3 },
      opacity: { duration: 0.3 },
      scaleY: { duration: 0.3, ease: 'easeOut' },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    scaleY: 0,
    originY: 0,
    transition: {
      height: { duration: 0.3 },
      opacity: { duration: 0.3 },
      scaleY: { duration: 0.3, ease: 'easeIn' },
    },
  },
};

export const slideIn = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: 'tween', ease: 'easeInOut' },
  },
};

export const scaleUpSlow = {
  initial: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.1,
      type: 'spring',
      mass: 1,
      damping: 12,
    },
  },
};
