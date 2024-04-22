const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(row => row.split(' ').map(Number));

const visited = Array.from(Array(n), () => Array(m).fill(0));

// 주어진 위치가 격자를 벗어나는지 여부를 반환합니다.
function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < m;
}

// 주어진 위치로 이동할 수 있는지 여부를 확인합니다.
function canGo(x, y) {
    if (!inRange(x, y)) {
        return false;
    }
    
    if (visited[x][y] || grid[x][y] === 0) {
        return false;
    }
    
    return true;
}

function dfs(x, y) {
    const dx = [0, 1], dy = [1, 0];
    
    for (let i = 0; i < dx.length; i++) {
        const newX = x + dx[i], newY = y + dy[i];
        
        if (canGo(newX, newY)) {
            visited[newX][newY] = 1;
            dfs(newX, newY);
        }
    }
}

visited[0][0] = 1;
dfs(0, 0);

console.log(visited[n - 1][m - 1]);