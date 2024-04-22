const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(row => row.split(' ').map(Number));
const visited = Array.from(Array(n), () => Array(n).fill(false));

let maxBlock = 0, bombCnt = 0;
let currBlockNum = 0;

// 탐색하는 위치가 격자 범위 내에 있는지 여부를 반환합니다.
function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

// 탐색하는 위치로 움직일 수 있는지 여부를 반환합니다.
function canGo(x, y, color) {
    if (!inRange(x, y)) {
        return false;
    }
    
    if (visited[x][y] || grid[x][y] !== color) {
        return false;
    }
    
    return true;
}

function dfs(x, y) {
    //0: 오른쪽, 1: 아래쪽, 2: 왼쪽, 3: 위쪽
    const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
    
    // 네 방향 각각에 대하여 DFS 탐색을 합니다.
    for (let dir = 0; dir < dx.length; dir++) {
        const newX = x + dx[dir], newY = y + dy[dir];

        if (canGo(newX, newY, grid[x][y])) {
            visited[newX][newY] = true;
            // 블럭이 하나 추가됩니다.
            currBlockNum++;
            dfs(newX, newY);
        }
    }
}

// 격자의 각 위치에서 탐색을 시작할 수 있는 경우
// 한 블럭에 대한 DFS 탐색을 수행합니다.
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (!visited[i][j] && grid[i][j]) {
            // 해당 블럭을 방문할 수 있는 경우 visited 배열을 갱신하고
            // 새로운 블럭을 탐색한다는 의미로 currBlockNum을 1로 갱신합니다.
            visited[i][j] = true;
            currBlockNum = 1;
            
            dfs(i, j);
            
            // 한 블럭 묶음에 대한 탐색이 끝난 경우 답을 갱신합니다.
            if (currBlockNum >= 4) {
                bombCnt++;
            }
            
            maxBlock = Math.max(maxBlock, currBlockNum);
        }
    }
}

console.log(bombCnt, maxBlock);