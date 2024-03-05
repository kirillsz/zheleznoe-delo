export function checkForParent(child, parentsArray) {
  const arr = [...parentsArray];
  return arr.find((el) => el.contains(child));
}
