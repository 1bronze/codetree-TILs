const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

const blocks = Array(n + 1).fill(0);

// 블럭을 특정 구간에 쌓아줍니다.
for (let j = 0; j < segments.length; j++) {
    const [a, b] = segments[j];
    for (let i = a; i <= b; i++) {
        blocks[i] += 1;
    }
}

// 최댓값을 구합니다.
const maxNum = Math.max(blocks);
console.log(maxNum);