// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// --- Solution 1 (using 2D for loop)

// function pyramid(n) {
//     const width = 2 * n - 1;
//     const mid = Math.floor(width / 2)
//     for(let row = 0; row < n; row++) {
//         let level = ''
//         for(let col = 0; col < width; col++) {
//             if(col >= mid - row && col <= mid + row) {
//                 level += "#"
//             } else {
//                 level += " "
//             }
//         }
//         console.log(level);
//     }
// }

// --- Solution 2 (using recursion)

function pyramid(n, row = 0, level = "") {
  // row === n ? return
  if(row === n) {
    return
  }

  // level.length === width ? print out level then call func for next row
  const width = 2 * n - 1;
  
  if(level.length === width) {
    console.log(level)
    return pyramid(n, row + 1)
  }

  // add "#" if level.length is in range between mid - row & mid + row
  const mid = Math.floor(width / 2);
  const add = level.length >= mid - row && level.length <= mid + row ? "#" : " "

  return pyramid(n, row, level + add)
}

pyramid(3);

module.exports = pyramid;
