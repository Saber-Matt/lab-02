export function filter(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const newItem = callback(arr[i]);
    newArr[i] = newItem;
  }
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
