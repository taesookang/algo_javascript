// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  // Create an array with initial elements root and 'stop'
  const arr = [root, "stop"];
  // Create an counter array with an element 0;
  const counters = [0];

  // While loop until array.length equals to 1 => when only 'stop' is remained
  while (arr.length > 1) {
    const node = arr.shift();

    if (node === "stop") {
      // If node is 'stop', then push 0 to counters and 'stop' to array
      counters.push(0);
      arr.push("stop");
    } else {
      // If not 'stop', then push all children element to array and add 1 to the last counter
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
}

module.exports = levelWidth;
