const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const OFFSET = 1000;
const MAX_R = 2000;

// 변수 선언 및 입력
const n = 3;
const rects = input.slice(0, n).map(line => line.split(' ').map(Number));

const checked = Array.from({length: MAX_R + 1}, () => Array(MAX_R + 1).fill(0));

rects.forEach((rect, index) => {
    let [x1, y1, x2, y2] = rect;
    // OFFSET을 더해줍니다.
    x1 += OFFSET; y1 += OFFSET;
    x2 += OFFSET; y2 += OFFSET;

    // 직사각형에 주어진 순으로 1, 2, 3 번호를 붙여줍니다.
    // 격자 단위로 진행하는 문제이므로
    // x2, y2에 등호가 들어가지 않음에 유의합니다.
    for (let x = x1; x < x2; x++) {
        for (let y = y1; y < y2; y++) {
            checked[x][y] = index + 1; // 1부터 시작하기 때문에 index에 1을 더합니다.
        }
    }
});

// 1, 2, 3 순으로 붙였는데도
// 아직 숫자 1, 2로 남아있는 영역의 넓이를 구합니다.
let area = 0;
for (let x = 1000; x <= 1010; x++) {
    for (let y = 1000; y <= 1010; y++) {
        if (checked[x][y] === 1 || checked[x][y] === 2) {
            area += 1;
        }
    }
}

console.log(area);