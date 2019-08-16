const groupBy = (arr, key) =>
  arr.reduce(
    (groups, item) => ({
      ...groups,
      [item[key]]: [...(groups[item[key]] || []), item],
    }),
    {},
  );

module.exports = {
  groupBy,
};
