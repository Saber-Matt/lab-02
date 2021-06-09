export function map(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const newItem = callback(item);
    newArr[i] = newItem;
  }

  return newArr;
}
