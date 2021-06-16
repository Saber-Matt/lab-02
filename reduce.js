export function reduce(arr, callback, initalAcc) {
  let acc = initalAcc;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    acc = callback(acc, item, i, arr);
  }
  return acc;
}
