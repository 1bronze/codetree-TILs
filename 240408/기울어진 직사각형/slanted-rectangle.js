const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const MAX_N = 20;
const DIR_NUM = 4;

let n = Number(input[0]);
let grid = [];
for (let i = 1; i <= n; i++) {
    grid.push(input[i].split(' ').map(Number));
}

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function getScore(x, y, k, l) {
    const dx = [-1, -1, 1, 1];
    const dy = [1, -1, -1, 1];
    const moveNum = [k, l, k, l];
    
    let sumOfNums = 0;

    // 기울어진 직사각형의 경계를 쭉 따라가봅니다.
    for (let d = 0; d < DIR_NUM; d++) {
        for (let q = 0; q < moveNum[d]; q++) {
            x += dx[d];
            y += dy[d];
                
            // 기울어진 직사각형이 경계를 벗어나는 경우라면
            // 불가능하다는 의미로 답이 갱신되지 않도록
            // 0을 반환합니다.
            if (!inRange(x, y)) {
                return 0;
            }
			
            sumOfNums += grid[x][y];
        }
    }
    
    return sumOfNums;
}

let ans = 0;

// (i, j)를 시작으로 1, 2, 3, 4 방향
// 순서대로 길이 [k, l, k, l] 만큼 이동하면 그려지는
// 기울어진 직사각형을 잡아보는
// 완전탐색을 진행해봅니다.
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        for (let k = 1; k < n; k++) {
            for (let l = 1; l < n; l++) {
                ans = Math.max(ans, getScore(i, j, k, l));
            }
        }
    }
}

console.log(ans);