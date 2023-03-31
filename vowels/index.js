// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// --- Solution 1 (using iteration)
// function vowels(str) {
//   let count = 0;
//   const checker = "aeiou";

//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

// --- Solution 2 (using RegExp)
function vowels(str) {
    // const vowels = str.replace(/[^aeiou]/gi, "")
    const vowels = str.match(/[aeiou]/gi)
    return vowels? vowels.length : 0;
}

vowels("Hi There!");
module.exports = vowels;
