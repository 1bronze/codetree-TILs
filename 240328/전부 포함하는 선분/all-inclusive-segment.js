const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 입력
const n = Number(input[0]);
const x1 = [], x2 = [];
for (let i = 1; i <= n; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    x1.push(a);
    x2.push(b);
}

let ans = Number.MAX_SAFE_INTEGER;

// 가장 시작점이 작은 선분을 지우거나, 가장 끝점이 큰 선분을 지울 때에만
// 전부 포함하는 선분이 줄어들 가능성이 있습니다.
// 가장 시작점이 작은 선분을 찾습니다.
let skip = 0;
for (let i = 0; i < n; i++) {
    if (x1[skip] > x1[i]) skip = i;
}

let maxX2 = 0;
let minX1 = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
    if (i === skip) continue;

    // 시작점 중 가장 앞에 있는 좌표와 끝점 중 가장 뒤에 있는 점의 좌표를 확인합니다.
    maxX2 = Math.max(maxX2, x2[i]);
    minX1 = Math.min(minX1, x1[i]);
}

// 조건을 만족하는 선분의 길이는 maxX2 - minX1입니다.
// 정답보다 이 선분의 길이가 작으면 업데이트합니다.
ans = Math.min(ans, maxX2 - minX1);

// 가장 끝점이 큰 선분을 찾습니다.
skip = 0;
for (let i = 0; i < n; i++) {
    if (x2[skip] < x2[i]) skip = i;
}

maxX2 = 0;
minX1 = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
    if (i === skip) continue;

    // 시작점 중 가장 앞에 있는 좌표와 끝점 중 가장 뒤에 있는 점의 좌표를 확인합니다.
    maxX2 = Math.max(maxX2, x2[i]);
    minX1 = Math.min(minX1, x1[i]);
}

// 조건을 만족하는 선분의 길이는 maxX2 - minX1입니다.
// 정답보다 이 선분의 길이가 작으면 업데이트합니다.
ans = Math.min(ans, maxX2 - minX1);

console.log(ans);