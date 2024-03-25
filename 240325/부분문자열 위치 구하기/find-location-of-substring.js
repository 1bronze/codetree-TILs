// Declare variables and input
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const inputStr = input[0];
const targetStr = input[1];

let inputLen = inputStr.length;
let targetLen = targetStr.length;

// Check if each character of the input string can start to form the target string.
for (let i = 0; i < inputLen; i++) {
    // Check if elements from i to i + targetLen - 1 of inputStr
    // exactly match the elements from 0 to targetLen - 1 of targetStr.
    
    // If the end element of inputStr, the i + targetLen - 1 th, does not exist,
    // do not compare.
    if (i + targetLen - 1 >= inputLen) {
        continue;
    }
    
    // Compare if the substring of inputStr from sIdx1 to eIdx1 matches
    // with the substring of outputStr from sIdx2 to eIdx2.
    let isMatched = true;
    for (let j = 0; j < targetLen; j++) {
        if (inputStr[i + j] !== targetStr[j]) {
            isMatched = false;
        }
    }
    
    if (isMatched) {
        // In case all characters match:
        console.log(i);
        process.exit(0);
    }
}

// In case there is no match:
console.log(-1);