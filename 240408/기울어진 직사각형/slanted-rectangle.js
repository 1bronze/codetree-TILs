const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// 1번의 길이 설정 + 2번의 길이 설정 > 이중 for문으로 구현
// 최대 길이는 n-1, 최소 길이는 2

const dy = [0, -1, -1, 1, 1];
const dx = [0, 1, -1, -1, 1];

function inRange(y, x) {
    return (y >= 0 && y < n && x >= 0 && x < n);
}

function getSum(y, x, len1, len2) {
    let curY = y;
    let curX = x;

    let sum = grid[curY][curX];

    for (let l = 1; l < len1; l++) { // 1번 방향
        curY += dy[1];
        curX += dx[1];
        sum += grid[curY][curX];
    }
    for (let l = 1; l < len2; l++) { // 2번 방향
        curY += dy[2];
        curX += dx[2];
        sum += grid[curY][curX];
    }
    for (let l = 1; l < len1; l++) { // 3번 방향
        curY += dy[3];
        curX += dx[3];
        sum += grid[curY][curX];
    }
    for (let l = 2; l < len2; l++) { // 4번 방향
        curY += dy[4];
        curX += dx[4];
        sum += grid[curY][curX];
    }

    return sum;
}

let ans = 0;
for (let y = 1; y < n; y++) {
    for (let x = 1; x < n; x++) {
        for (let len1 = 2; len1 < n; len1++) {
            for (let len2 = 2; len2 < n; len2++) {
                let [y1, x1] = [y, x];
                let [y2, x2] = [y + (dy[1] * (len1 - 1)), x + (dx[1] * (len1 - 1))];
                let [y3, x3] = [y2 + (dy[2] * (len2 - 1)), x2 + (dx[2] * (len2 - 1))];
                let [y4, x4] = [y3 + (dy[3] * (len1 - 1)), x3 + (dx[3] * (len1 - 1))]

                if (!inRange(y1, x1) || !inRange(y2, x2) || !inRange(y3, x3) || !inRange(y4, x4)) continue;
                ans = Math.max(ans, getSum(y, x, len1, len2));
            }
        }
    }
}

console.log(ans);