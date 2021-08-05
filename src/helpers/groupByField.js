export const groupByField = (array, field) => {
  const groupMap = {};
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (Array.isArray(groupMap[element[field]]))
      groupMap[element[field]].push(element);
    else groupMap[element[field]] = [element];
  }
  return groupMap;
};
