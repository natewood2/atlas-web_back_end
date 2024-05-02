export default function appendToEachArrayValue(array, appendString) {
  const tempArray = [];
  for (const temp of array) {
    tempArray.push(appendString + temp);
  }

  return tempArray;
}
