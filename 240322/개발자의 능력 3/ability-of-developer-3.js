const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = 6;
const arr = input[0].trim().split(' ').map(Number);

const diff = (i, j, k) => {
    // 두 번째 팀원의 합은 전체에서 첫 번째 팀원의 합을 빼주면 됩니다.
    const sum1 = arr[i] + arr[j] + arr[k];
    const sum2 = arr.reduce((acc, val) => acc + val, 0) - sum1;
    return Math.abs(sum1 - sum2);
}

// 첫 번째 팀원을 만들어줍니다.
let minDiff = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            minDiff = Math.min(minDiff, diff(i, j, k));
        }
    }
}

console.log(minDiff);