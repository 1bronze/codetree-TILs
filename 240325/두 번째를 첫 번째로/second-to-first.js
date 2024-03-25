// Declare variables and input
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

// Store the first and second characters of the string.
let a = input[0];
let b = input[1];

// Traverse the string and swap the second character with the first one.
for (let i = 0; i < input.length; i++) {
    if (input[i] === b) {
        input = input.slice(0, i) + a + input.slice(i + 1);
    }
}

// Print the string after the swap.
console.log(input);