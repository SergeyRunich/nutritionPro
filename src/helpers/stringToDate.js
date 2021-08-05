export const stringToDate = (s) => {
  const dateArray = s.split("/").map((n) => Number(n));
  return new Date(dateArray[2], dateArray[1] - 1, dateArray[0]);
};
