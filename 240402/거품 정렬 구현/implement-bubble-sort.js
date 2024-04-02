const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].trim().split(" ").map(Number);

for (let i = arr.length - 1; i > 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
        if (arr[i] < arr[j]) {
            let tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
}

console.log(arr.join(" "));