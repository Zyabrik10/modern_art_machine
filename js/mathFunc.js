export const floor = Math.floor;
export const random = Math.random;

export function randInt(min, max) {
  return floor(random() * (max - min + 1) + min);
}
