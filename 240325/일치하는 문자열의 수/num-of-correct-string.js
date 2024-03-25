// Variable declaration and input
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0].split(" ")[0]);
let string = input[0].split(" ")[1];

let cnt = 0;

// Check the number of occurrences where the input string is the same as str.
for (let i = 1; i <= n; i++) {
    let str = input[i];

    if (string === str) {
        cnt++;
    }
}

// Print the sum of each digit.
console.log(cnt);