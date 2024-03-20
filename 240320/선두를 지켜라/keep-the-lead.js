const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const MAX_T = 1000000;

// 변수 선언 및 입력
const [n, m] = input[0].split(' ').map(Number);
let posA = Array(MAX_T + 1).fill(0), posB = Array(MAX_T + 1).fill(0);

// A가 매 초마다 서있는 위치를 기록
let timeA = 1;
for (let i = 1; i <= n; i++) {
    const [v, t] = input[i].split(' ').map(Number);
    for (let j = 0; j < t; j++) {
        posA[timeA] = posA[timeA - 1] + v;
        timeA += 1;
    }
}

// B가 매 초마다 서있는 위치를 기록
let timeB = 1;
for (let i = n + 1; i <= n + m; i++) {
    const [v, t] = input[i].split(' ').map(Number);
    for (let j = 0; j < t; j++) {
        posB[timeB] = posB[timeB - 1] + v;
        timeB += 1;
    }
}

// A와 B 중 더 앞서 있는 경우를 확인합니다.
// A가 리더면 1, B가 리더면 2로 관리합니다.
let leader = 0, ans = 0;
for (let i = 1; i < timeA; i++) {
    if (posA[i] > posB[i]) {
        // 기존 리더가 B였다면
        // 답을 갱신합니다.
        if (leader === 2) ans += 1;

        // 리더를 A로 변경합니다.
        leader = 1;
    } else if (posA[i] < posB[i]) {
        // 기존 리더가 A였다면
        // 답을 갱신합니다.
        if (leader === 1) ans += 1;

        // 리더를 B로 변경합니다.
        leader = 2;
    }
}

console.log(ans);