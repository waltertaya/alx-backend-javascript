export default function getListStudentsIds(array) {
  if (!(Array.isArray(array))) {
    return [];
  }
  return Object.keys(array);
}
