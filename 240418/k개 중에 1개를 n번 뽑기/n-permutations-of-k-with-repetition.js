const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [k, n] = input[0].split(' ').map(Number);
const arr = Array.from(Array(n).fill(0));

function recur(idx) {
    if (idx === n - 1) {
        console.log(arr.join(' '));
        return;
    }

    for (let i = 1; i <= k; i++) {
        arr[idx + 1] = i;
        recur(idx + 1);
    }
}

for (let i = 1; i <= k; i++) {
    arr[0] = i;
    recur(0);
}