const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const INT_MAX = Number.MAX_SAFE_INTEGER;

// 변수 선언 및 입력
const [n, m] = input[0].split(' ').map(Number);
const a = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// backtracking에 필요한 변수들 입니다.
const visited = Array.from(Array(n), () => Array(m).fill(false));

let ans = INT_MAX;

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < m;
}

// 격자를 벗어나지 않으면서, 뱀도 없고, 아직 방문한 적이 없는 곳이라면 이동이 가능합니다.
function canGo(x, y) {
    return inRange(x, y) && a[x][y] && !visited[x][y];
}

// backtracking을 통해 최소 이동 횟수를 구합니다.
function findMin(x, y, cnt) {
    if (x === n - 1 && y === m - 1) {
        ans = Math.min(ans, cnt);
        return;
    }
    
    const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
    
    // 현재 위치를 기준으로 4방향을 확인해봅니다.
    for (let i = 0; i < dx.length; i++) {
        const newX = x + dx[i], newY = y + dy[i];
        
        // 아직 방문한 적이 없으면서 갈 수 있는 곳이라면 더 진행해봅니다.
        if (canGo(newX, newY)) {
            // 지금까지의 선택이 최단경로로서 부적합했을 수 있으므로
            // 퇴각시 visited값을 다시 false로 바꿔 다른 방향으로 진행할때도 기회를 주어 모든 가능한
            // 경로를 전부 탐색할 수 있도록 합니다.
            visited[newX][newY] = true;
            findMin(newX, newY, cnt + 1);
            visited[newX][newY] = false;
        }
    }
}

// 현재까지 이동 횟수가 0일때, (0, 0)에서 시작하는 재귀를 호출합니다.
findMin(0, 0, 0);

// 불가능한 경우라면 -1을 답으로 넣어줍니다.
if (ans === INT_MAX) {
    ans = -1;
}

console.log(ans);