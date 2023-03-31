// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // create map for chars
  const map = {};
  // update map by iterating through string
  for (let i of str) {
    if (!map[i]) {
      map[i] = 1;
    } else {
      map[i]++;
    }
  }
  // loop through map and find the max
  let max = 0;
  let maxChar = null;

  for (let i in map) {
    if (map[i] > max) {
      max = map[i];
      maxChar = i;
    }
  }
  // return max value
  return maxChar;
}

maxChar("apple");

module.exports = maxChar;
