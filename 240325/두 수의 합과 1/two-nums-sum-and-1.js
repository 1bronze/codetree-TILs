// Variable declaration and input
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = input[0];
let b = input[1];
let c = Number(a) + Number(b);
let cnt = 0;

// Convert the sum to a string.
let cStr = c.toString();

// Check the number of occurrences of 1 in the string.
for (let elem of cStr) {
    if (elem === '1') {
        cnt += 1;
    }
}

// Output the number of occurrences of 1.
console.log(cnt);