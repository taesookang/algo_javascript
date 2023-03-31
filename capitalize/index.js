// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// --- Solution 1

// function capitalize(str) {
//     // Split string by spaces 
//     // Get first letter from each splited array, and change them to uppercase
//     const newArr = []
//     for(let word of str.split(" ")) {
//         newArr.push(word.charAt(0).toUpperCase() + word.slice(1))
//     }
//     // return the joined string

//     return newArr.join(" ")

// --- Solution 2

function capitalize(str) {
    // Create 'result' with first character of string capitalized 
    let result = str[0].toUpperCase();
    // For each character in string
    for(let i=1; i < str.length; i++) {
        // if character to the left a space
        if(str[i-1] === " ") {
            // Capitalize it and add it to result
            result += str[i].toUpperCase()
        }
        else {
            // Else add it to result
            result += str[i]
        }
    }

    return result;
}

module.exports = capitalize;
