const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = [0];
const n = Number(input[0]);

for (let i = 0; i < n; i++) {
    arr.push(Number(input[1][i]));
}

let dist = 0;
let last = 1;

for (let i = 2; i <= n; i++) {
    if (arr[i] === 1) {
        dist = Math.max(dist, i - last);
        last = i;
    }
    // console.log(i, dist);
}

if (dist % 2 === 1) {
    dist -= 1;
}

console.log(Math.floor(dist / 2));