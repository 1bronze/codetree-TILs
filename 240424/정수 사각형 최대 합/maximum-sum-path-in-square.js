const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

let maxSum = 0;

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function findMaxSum(x, y, sum) {
    // 도착 지점에 도착하면 최대 합을 갱신해줍니다.
    if (x === n - 1 && y === n - 1) {
        maxSum = Math.max(maxSum, sum);
        return;
    }
    
    const dx = [1, 0], dy = [0, 1];
    
    // 가능한 모든 방향에 대해 탐색해줍니다.
    for (let i = 0; i < dx.length; i++) {
        const newX = x + dx[i], newY = y + dy[i];
        
        if (inRange(newX, newY)) {
            findMaxSum(newX, newY, sum + grid[newX][newY]);
        }
    }
}

findMaxSum(0, 0, grid[0][0]);
console.log(maxSum);