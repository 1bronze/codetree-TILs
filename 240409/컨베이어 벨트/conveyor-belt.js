const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, t] = input[0].split(" ").map(Number);
const arr = input[1].trim().split(" ").map(Number).concat(input[2].trim().split(" ").map(Number));

for (let i = 0; i < t; i++) {
    let tmp = arr[2 * n - 1];

    for (let j = arr.length; j > 0; j--)
        arr[j] = arr[j - 1];

    arr[0] = tmp;
}

console.log(arr.slice(0, n).join(" "));
console.log(arr.slice(n, 2 * n).join(" "));