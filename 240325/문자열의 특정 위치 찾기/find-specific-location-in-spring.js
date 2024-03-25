// Declare variables and read input
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const str = input[0];
const a = input[1];

// Calculate the length of the string.
let length = str.length;

// Check if the character a exists in the string and record its index if it does.
let startIdx = -1;
for (let i = 0; i < length; i++) {
    if (str[i] === a) {
        startIdx = i;
        break;
    }
}

// If the character a does not exist in the string, print No.
if (startIdx === -1) {
    console.log("No");
} else {
    console.log(startIdx);
}