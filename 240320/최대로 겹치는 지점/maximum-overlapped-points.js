const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    segments.push(input[i].split(' ').map(Number));
}

const blocks = Array(101).fill(0);

// 블럭을 특정 구간에 쌓아줍니다.
for (let [a, b] of segments) {
    for (let i = a; i <= b; i++) {
        blocks[i] += 1;
    }
}

// 최댓값을 구합니다.
const maxNum = Math.max(...blocks);
console.log(maxNum);