export function filter(arr, callback) {
  const newArr = [];
  let w = 0;

  // eslint-disable-next-line keyword-spacing
  for (let i = 0; i < arr.length; i++) {
    // eslint-disable-next-line keyword-spacing
    if (callback(arr[i])) {
      newArr[w] = arr[i];
      w++;
    }
  }
  return newArr;

}





// export function map(arr, callback) {
//   const newArr = [];
//   // eslint-disable-next-line keyword-spacing
//   for (let i = 0; i < arr.length; i++) {
//     const newItem = callback(arr[i]);
//     newArr[i] = newItem;
//   }

//   return newArr;
// }
