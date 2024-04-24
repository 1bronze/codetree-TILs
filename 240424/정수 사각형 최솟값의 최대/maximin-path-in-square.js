const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const UNUSED = -1;

const n = Number(input[0]);

const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
const memo = Array.from(Array(n), () => Array(n).fill(UNUSED));

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function findMaximin(x, y) {
    // 미리 계산된 적이 있는 경우 해당 값을 사용해줍니다.
    if (memo[x][y] !== UNUSED) {
        return memo[x][y];
    }

    // 도착 지점에 도착하면 최대 합을 갱신해줍니다.
    if (x === n - 1 && y === n - 1) {
        memo[n - 1][n - 1] = grid[n - 1][n - 1];
        return grid[n - 1][n - 1];
    }
    
    const dx = [1, 0], dy = [0, 1];
    
    // 가능한 방향에 대해 탐색해줍니다.
    let maximin = 0;
    for (let i = 0; i < dx.length; i++) {
        const newX = x + dx[i], newY = y + dy[i];
        
        if (inRange(newX, newY)) {
            maximin = Math.max(maximin,
                Math.min(findMaximin(newX, newY), grid[x][y]));
        }
    }
    
    // 계산된 값을 memo 배열에 저장해줍니다.
    memo[x][y] = maximin;
    
    return maximin;
}

console.log(findMaximin(0, 0));