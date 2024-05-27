export default function appendToEachArrayValue(array, appendString) {
  const myArr = array;
  for (const idx of array) {
    const value = array[idx];
    myArr[idx] = appendString + value;
  }

  return array;
}
