const MAX_R = 200;
const OFFSET = 100;

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
let checked = Array.from(Array(MAX_R + 1), () => Array(MAX_R + 1).fill(0));

let x1 = [], y1 = [], x2 = [], y2 = [];
for (let i = 0; i < n; i++) {
    let [_x1, _y1, _x2, _y2] = input[i + 1].split(' ').map(Number);
    x1.push(_x1);
    y1.push(_y1);
    x2.push(_x2);
    y2.push(_y2);

    // OFFSET을 더해줍니다.
    x1[i] += OFFSET;
    y1[i] += OFFSET;
    x2[i] += OFFSET;
    y2[i] += OFFSET;
}

// 직사각형에 주어진 순으로 1, 2 번호를 붙여줍니다.
// 격자 단위로 진행하는 문제이므로
// x2, y2에 등호가 들어가지 않음에 유의합니다.
for (let i = 0; i < n; i++) {
    for (let x = x1[i]; x < x2[i]; x++) {
        for (let y = y1[i]; y < y2[i]; y++) {
            checked[x][y] = i % 2 === 0 ? 1 : 2;
        }
    }
}

// 숫자 2로 남아있는 영역의 넓이를 구합니다.
let area = 0;
for (let x = 0; x <= MAX_R; x++) {
    for (let y = 0; y <= MAX_R; y++) {
        if (checked[x][y] === 2) {
            area += 1;
        }
    }
}

console.log(area);