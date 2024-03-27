const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = [0];
const n = Number(input[0]);

for (let i = 0; i < n; i++) {
    arr.push(Number(input[1][i]));
}

let dist = 0;
let last = 1;

let l = 1;
let r = 1;

for (let i = 2; i <= n; i++) {
    if (arr[i] === 1) {

        if (dist < i - last) {
            dist = i - last;
            l = last;
            r = i;
        }
        last = i;
    }
}

let tmp = r - l;
arr[l + Math.floor(tmp/2)] = 1;

dist = n;
last = 1;
for (let i = 2; i <= n; i++) {
    if (arr[i] === 1) {
        dist = Math.min(dist, i - last);
        last = i;
    }
}

console.log(dist);