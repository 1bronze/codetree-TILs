const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const num = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
const moveDir = input.slice(1 + n, 1 + 2 * n).map(line => line.split(' ').map(Number))
const [r, c] = input[1 + 2 * n].split(' ').map(Number);

let ans = 0;

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function canGo(x, y, prevNum) {
    return inRange(x, y) && num[x][y] > prevNum;
}

function findMax(x, y, cnt) {
    // 언제 끝날지 모르기 때문에
    // 항상 최댓값을 갱신해줍니다.
    ans = Math.max(ans, cnt);
    
    const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
    const dy = [0, 1, 1, 1, 0, -1, -1, -1];
    
    const d = moveDir[x][y] - 1;
    
    for (let i = 0; i < n; i++) {
        const nx = x + dx[d] * i, ny = y + dy[d] * i;
        if (canGo(nx, ny, num[x][y])) {
            findMax(nx, ny, cnt + 1);
        }
    }
}

findMax(r - 1, c - 1, 0);
console.log(ans);