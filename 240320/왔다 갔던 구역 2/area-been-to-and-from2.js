const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const OFFSET = 1000;
const MAX_R = 2000;

// 변수 선언 및 입력
const n = Number(input[0]);
const segments = [];

// 현재 위치
let cur = 0;

for (let i = 1; i <= n; i++) {
    let [distance, direction] = input[i].split(' ');
    distance = Number(distance);
	
    let sectionLeft, sectionRight;
    if (direction === 'L') {
        // 왼쪽으로 이동할 경우 : cur - distance ~ cur까지 경로 이동
        sectionLeft = cur - distance;
        sectionRight = cur;
        cur -= distance;
    } else {
        // 오른쪽으로 이동할 경우 : cur ~ cur + distance까지 경로 이동
        sectionLeft = cur;
        sectionRight = cur + distance;
        cur += distance;
    }
	
    segments.push([sectionLeft, sectionRight]);
}

const checked = Array(MAX_R + 1).fill(0);

for (let [x1, x2] of segments) {
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

// 2번 이상 지나간 영역의 크기를 구합니다.
let cnt = 0;
for (let elem of checked) {
    if (elem >= 2) {
        cnt += 1;
    }
}
console.log(cnt);