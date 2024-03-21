const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const OFFSET = 100;
const MAX_R = 200;

// 변수 선언 및 입력
const n = Number(input[0]);
const rects = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

let checked = Array.from({ length: MAX_R + 1 }, () => Array(MAX_R + 1).fill(0));

rects.forEach(rect => {
    let [x1, y1, x2, y2] = rect;

    // OFFSET을 더해줍니다.
    x1 += OFFSET; y1 += OFFSET;
    x2 += OFFSET; y2 += OFFSET;

    // 직사각형을 칠해줍니다.
    // 격자 단위로 진행하는 문제이므로
    // x2, y2에 등호가 들어가지 않음에 유의합니다.
    for (let x = x1; x < x2; x++) {
        for (let y = y1; y < y2; y++) {
            checked[x][y] = 1;
        }
    }
});

// 직사각형 넓이의 총 합을 구합니다.
let area = 0;
for (let x = 0; x <= MAX_R; x++) {
    for (let y = 0; y <= MAX_R; y++) {
        if (checked[x][y]) {
            area += 1;
        }
    }
}

console.log(area);