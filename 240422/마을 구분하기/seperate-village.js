const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
const visited = Array.from(Array(n), () => Array(n).fill(false));

let peopleNum = 0;
const peopleNums = [];

// 주어진 위치가 격자를 벗어나는지 여부를 반환합니다.
function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
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
    // 0: 오른쪽, 1: 아래쪽, 2: 왼쪽, 3: 위쪽
    const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
    
    // 네 방향에 각각에 대하여 DFS 탐색을 합니다.
    for (let dir = 0; dir < 4; dir++) {
        const newx = x + dx[dir], newy = y + dy[dir];
        
        if (canGo(newx, newy)) {
            visited[newx][newy] = true;
            
            // 마을에 존재하는 사람을 한 명 추가해줍니다.
            peopleNum += 1;
            dfs(newx, newy);
        }
    }
}

// 격자의 각 위치에서 탐색을 시작할 수 있는 경우
// 한 마을에 대한 DFS 탐색을 수행합니다.
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (canGo(i, j)) {
            // 해당 위치를 방문할 수 있는 경우 visited 배열을 갱신하고
            // 새로운 마을을 탐색한다는 의미로 peopleNum을 1로 갱신합니다.
            visited[i][j] = true;
            peopleNum = 1;
            
            dfs(i, j);
            
            // 한 마을에 대한 탐색이 끝난 경우 마을 내의 사람 수를 저장합니다.
            peopleNums.push(peopleNum);
        }
    }
}

// 각 마을 내 사람의 수를 오름차순으로 정렬합니다.
peopleNums.sort((a, b) => a - b);

console.log(peopleNums.length);

peopleNums.forEach(num => console.log(num));