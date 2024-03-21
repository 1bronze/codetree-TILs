const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const arr = input.slice(1).map(line => line.split(' ').map(Number));

const dx = [0, 1,  0, -1];
const dy = [1, 0, -1,  0];


function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}


function adjacentCnt(x, y) {
    let cnt = 0;
    for (let i = 0; i < dx.length; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (inRange(nx, ny) && arr[nx][ny] === 1) {
            cnt += 1;
        }
    }
    
    return cnt;
}


// 각 칸을 탐색합니다.
let ans = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (adjacentCnt(i, j) >= 3) {
            ans += 1;
        }    
    }
}

console.log(ans);