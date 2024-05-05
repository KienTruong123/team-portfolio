export const generateRandomColor = (seed = 0) => `#${Math.floor(Math.abs(Math.sin(seed) * (1 << 24))).toString(16)}`;
