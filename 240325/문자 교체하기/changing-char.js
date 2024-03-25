// Declare variables and input
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

const str1 = input[0];
const str2 = input[1];

// Replace the second character from the front of the second string with the first two characters of the first string.
str2 = str1.slice(0, 2) + str2.slice(2);

// Print the string after the replacement
console.log(str2);