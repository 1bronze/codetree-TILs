const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const MAX_T = 1000000;

// 변수 선언 및 입력
const [n, m] = input[0].split(' ').map(Number);
let posA = Array(MAX_T + 1).fill(0), posB = Array(MAX_T + 1).fill(0);

// A가 매 초마다 서있는 위치를 기록
let timeA = 1;
let currentIndex = 1;
for (let i = 0; i < n; i++) {
    const [t, d] = input[currentIndex++].split(' ');
    for (let j = 0; j < parseInt(t); j++) {
        posA[timeA] = posA[timeA - 1] + (d === 'R' ? 1 : -1);
        timeA++;
    }
}

// B가 매 초마다 서있는 위치를 기록
let timeB = 1;
for (let i = 0; i < m; i++) {
    const [t, d] = input[currentIndex++].split(' ');
    for (let j = 0; j < parseInt(t); j++) {
        posB[timeB] = posB[timeB - 1] + (d === 'R' ? 1 : -1);
        timeB++;
    }
}

// 시간 동기화
if (timeA < timeB) {
    for (let i = timeA; i < timeB; i++) {
        posA[i] = posA[i - 1];
    }
} else if (timeA > timeB) {
    for (let i = timeB; i < timeA; i++) {
        posB[i] = posB[i - 1];
    }
}

// 새롭게 만나는 횟수를 구합니다.
let cnt = 0;
const timeMax = Math.max(timeA, timeB);
for (let i = 1; i < timeMax; i++) {
    if (posA[i] === posB[i] && posA[i - 1] !== posB[i - 1]) {
        cnt++;
    }
}

console.log(cnt);