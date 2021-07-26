export const getPaginationRange = (from: number, to: number) => {
  const step = 1;
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};
