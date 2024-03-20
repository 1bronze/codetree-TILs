const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const OFFSET = 100;
const MAX_R = 200;

// 변수 선언 및 입력
const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    segments.push(input[i].split(' ').map(Number));
}
const checked = Array(MAX_R + 1).fill(0);

for (let j = 0; j < segments.length; j++) {
    let [x1, x2] = segments[j];
    // OFFSET을 더해줍니다.
    x1 += OFFSET;
    x2 += OFFSET;

    // 구간을 칠해줍니다.
    // 구간 단위로 진행하는 문제이므로
    // x2에 등호가 들어가지 않음에 유의합니다.
    for (let i = x1; i < x2; i++) {
        checked[i] += 1;
    }
}

// 최댓값을 구합니다.
const maxNum = Math.max(...checked);
console.log(maxNum);