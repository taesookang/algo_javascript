// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// --- using sort method
function anagrams(stringA, stringB) {
  const sortedA = sortString(stringA)
  const sortedB = sortString(stringB)

  return sortedA === sortedB;
}

// helper function to sort string

function sortString(str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
}



// --- using map

// function anagrams(stringA, stringB) {
//   // create maps for each string
//   const mapA = buildCharMap(stringA);
//   const mapB = buildCharMap(stringB);

//   // if length of keys are not equals, return false
//   if (Object.keys(mapA).length !== Object.keys(mapB).length) {
//     return false;
//   }
//   // compare values of two maps, and if there's any different value then return false
//   for (let char in mapA) {
//     if (mapA[char] !== mapB[char]) {
//       return false;
//     }
//   }
//   // return true otherwise
//   return true;
// }

// // helper function to build char map
// function buildCharMap(str) {
//   const charMap = {};
//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }
module.exports = anagrams;
