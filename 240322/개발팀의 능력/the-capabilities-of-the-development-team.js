const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const INT_MAX = Number.MAX_SAFE_INTEGER;
const MAX_N = 5;

// 변수 선언 및 입력:
const n = MAX_N;
const arr = input[0].split(' ').map(Number);
let totalSum = arr.reduce((acc, val) => acc + val, 0);

function diff(i, j, k) {
    let returnValue = INT_MAX;

    const sum1 = arr[i];
    const sum2 = arr[j] + arr[k];
    const sum3 = totalSum - arr[i] - arr[j] - arr[k];

    if (sum1 === sum2 || sum2 === sum3 || sum3 === sum1) {
        return returnValue;
    }

    return Math.max(sum1, sum2, sum3) - Math.min(sum1, sum2, sum3);
}

let minDiff = INT_MAX;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        for (let k = 0; k < n; k++) {
            if (i !== j && j !== k && i !== k) {
                minDiff = Math.min(minDiff, diff(i, j, k));
            }
        }
    }
}

if (minDiff === INT_MAX) {
    console.log(-1);
} else {
    console.log(minDiff);
}