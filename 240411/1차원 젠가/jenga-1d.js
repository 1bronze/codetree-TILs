const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = [0].concat(input.slice(1, 1 + n).map(Number));

let [s1, e1] = input[1 + n].split(" ").map(Number);
let [s2, e2] = input[2 + n].split(" ").map(Number);

const tmpArr = Array(n + 1).fill(0);

let tmpRow = 1;
let size = 0;

for (let r = 1; r <= n; r++) {
    if (r >= s1 && r <= e1) continue;

    tmpArr[tmpRow++] = arr[r];
    size++;
}

for (let r = 1; r <= n; r++) {
    if (r <= size) arr[r] = tmpArr[r];
    else arr[r] = 0;
}

tmpRow = 1;
size = 0;

for (let r = 1; r <= n; r++) {
    if (r >= s2 && r <= e2) continue;
    if (arr[r] === 0) continue;

    tmpArr[tmpRow++] = arr[r];
    size++;
}

for (let r = 1; r <= n; r++) {
    if (r <= size) arr[r] = tmpArr[r];
    else arr[r] = 0;
}

console.log(size);

if (size !== 0) {
    for (let r = 1; r <= size; r++) {
        console.log(arr[r]);
    }
}