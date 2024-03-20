const OFFSET = 1000;
const MAX_R = 2000;

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = 2;
const rects = input.slice(0, n).map(line => line.split(' ').map(Number));

let checked = Array.from(Array(MAX_R + 1), () => Array(MAX_R + 1).fill(0));

rects.forEach((rect, index) => {
    let [x1, y1, x2, y2] = rect;
    // OFFSET을 더해줍니다.
    x1 += OFFSET; y1 += OFFSET;
    x2 += OFFSET; y2 += OFFSET;
    
    // 직사각형에 주어진 순으로 1, 2 번호를 붙여줍니다.
    // 격자 단위로 진행하는 문제이므로
    // x2, y2에 등호가 들어가지 않음에 유의합니다.
    for (let x = x1; x < x2; x++) {
        for (let y = y1; y < y2; y++) {
            checked[x][y] = index + 1; // JS에서는 0부터 시작하는 인덱스를 사용하기 때문에 +1 해준다.
        }
    }
});

// 1, 2 순으로 붙였는데도
// 아직 숫자 1로 남아있는 곳들 중 최대 최소 x, y 값을 전부 계산합니다.
let min_x = MAX_R, max_x = 0, min_y = MAX_R, max_y = 0;
let firstRectExist = false;
for (let x = 0; x <= MAX_R; x++) {
    for (let y = 0; y <= MAX_R; y++) {
        if (checked[x][y] === 1) {
            firstRectExist = true;
            min_x = Math.min(min_x, x);
            max_x = Math.max(max_x, x);
            min_y = Math.min(min_y, y);
            max_y = Math.max(max_y, y);
        }
    }
}

// 넓이를 계산합니다.
// Case 1. 첫 번째 직사각형이 전혀 남아있지 않다면 넓이는 0입니다.
let area;
if (!firstRectExist) {
    area = 0;
// Case 2. 첫 번째 직사각형이 남아있다면, 넓이를 계산합니다.
} else {
    area = (max_x - min_x + 1) * (max_y - min_y + 1);
}

console.log(area);