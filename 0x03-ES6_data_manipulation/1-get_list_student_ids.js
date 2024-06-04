export default function getListStudentsIds(array) {
  if (!(Array.isArray(array))) {
    return [];
  }
  const indexes = array.map((element, index) => index);
  //   return Object.keys(array);
  return indexes;
}
