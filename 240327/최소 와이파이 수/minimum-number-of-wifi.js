const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let ans = 0;
for (let i = 1; i < n; i++) {
    if (arr[i] === 1 && arr[i - 1] === 1) {
        arr[i] = 0;
        arr[i - 1] = 0;
        ans++;
    }
}

console.log(ans);