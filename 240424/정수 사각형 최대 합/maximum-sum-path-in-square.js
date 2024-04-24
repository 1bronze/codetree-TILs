const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function findMaxSum(x, y) {
    // 도착 지점에 도착하면 최대 합을 갱신해줍니다.
    if (x === n - 1 && y === n - 1) {
        return grid[n - 1][n - 1];
    }
    
    const dx = [1, 0], dy = [0, 1];

    // 가능한 모든 방향에 대해 탐색해줍니다.
    let maxSum = 0; // 주어진 숫자의 범위가 1보다 크기 때문에 항상 갱신됨이 보장됩니다.
    for (let i = 0; i < dx.length; i++) {
        const newX = x + dx[i], newY = y + dy[i];
        
        if (inRange(newX, newY)) {
            // 각 방향으로 진행했을 때의 최대 합과 현재 위치의 값을 더합니다.
            maxSum = Math.max(maxSum, findMaxSum(newX, newY) + grid[x][y]);
        }
    }
    
    return maxSum;
}

console.log(findMaxSum(0, 0));