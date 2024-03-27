const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let ans = 0;
// let range = 0;
for (let i = 0; i < n; i++) {
    if (arr[i] === 1) {
        i += 2 * m;
        ans++;
    }
}

console.log(ans);