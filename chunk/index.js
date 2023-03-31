// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// --- Solution with array.slice()

function chunk(array, size) {
  // create empty array named chunked
  const chunked = [];
  // create index start at 0
  let index = 0;

  // while index is less than array.length
  while (index < array.length) {
    // push a slice of length size from array into chunked
    chunked.push(array.slice(index, index + size));
    // add size to index
    index += size;
  }

  return chunked;
}


// --- Solution with for loop

// function chunk(array, size) {
//   // create empty array named chunked
//   const chunked = [];
//   // looping through given array,
//   for (let element of array) {
//     const last = chunked[chunked.length - 1];
//     // if last child array doesn't exist or length of child array equals to size
//     if (!last || last.length === size) {
//       // push a child array containing current element to chunked
//       chunked.push([element]);
//     } else {
//       // else push element to last child array
//       last.push(element);
//     }
//   }
//   return chunked;
// }

module.exports = chunk;
