class Queue {
    constructor() {  // 빈 큐 하나를 생성합니다.
        this.q = [];
        this.head = -1; // head는 큐의 가장 첫 원소의 위치 바로 앞을 가리킵니다.
        this.tail = -1; // tail은 큐의 가장 마지막 원소의 위치를 가리킵니다.
    }

    push(item) {  // 큐의 맨 뒤에 데이터를 추가합니다.
        this.q.push(item);
        this.tail++;
    }

    empty() {  // 큐가 비어있으면 true를 반환합니다.
        return (this.head === this.tail);
    }

    size() {  // 큐에 들어있는 데이터 수를 반환합니다.
        return (this.tail - this.head);
    }

    pop() {  // 큐의 맨 앞에 있는 데이터를 반환하고 제거합니다.
        if (this.empty()) {
            throw new Error("Queue is empty");
        }
        return this.q[++this.head];
    }

    front() {  // 큐의 맨 앞에 있는 데이터를 제거하지 않고 반환합니다.
        if (this.empty()) {
            throw new Error("Queue is empty");
        }
        return this.q[this.head + 1];
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const WATER = 0;
const GLACIER = 1;

// 변수 선언 및 입력
const [n, m] = input[0].split(' ').map(Number);
const a = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// bfs에 필요한 변수들 입니다.
const q = new Queue();
const visited = Array.from(Array(n), () => Array(m).fill(false));

// 0: 오른쪽, 1: 아래쪽, 2: 왼쪽, 3: 위쪽
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

// 소요 시간과 가장 마지막으로 녹은 빙하의 수를 저장합니다.
let elapsedTime = 0;
let lastMeltCnt = 0;

// 주어진 위치가 격자를 벗어나는지 여부를 반환합니다.
function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < m;
}

// 범위를 벗어나지 않으면서 물이여야 하고 방문한적이 없어야 갈 수 있습니다.
function canGo(x, y) {
    return inRange(x, y) && a[x][y] === 0 && !visited[x][y];
}

// visited 배열을 초기화합니다.
function initialize() {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            visited[i][j] = false;
        }
    }
}

// 빙하에 둘러쌓여 있지 않은 물들을 전부 구해주는 BFS입니다.
// 문제에서 가장자리는 전부 물로 주어진다 했기 때문에
// 항상 (0, 0)에서 시작하여 탐색을 진행하면
// 빙하에 둘러쌓여 있지 않은 물들은 전부 visited 처리가 됩니다.
function bfs() {
    // BFS 함수가 여러 번 호출되므로
    // 사용하기 전에 visited 배열을 초기화 해줍니다.
    initialize();

    // 항상 (0, 0)에서 시작합니다.
    q.push([0, 0]);
    visited[0][0] = true;

    while (!q.empty()) {
        // queue에서 가장 먼저 들어온 원소를 뺍니다.
        const [x, y] = q.pop();

        // queue에서 뺀 원소의 위치를 기준으로 네 방향을 확인합니다.
        for (let dir = 0; dir < 4; dir++) {
            const newX = x + dx[dir];
            const newY = y + dy[dir];

            // 더 갈 수 있는 곳이라면 Queue에 추가합니다.
            if (canGo(newX, newY)) {
                q.push([newX, newY]);
                visited[newX][newY] = true;
            }
        }
    }
}

// 현재 위치를 기준으로 인접한 영역에
// 빙하에 둘러쌓여 있지 않은 물이 있는지를 판단합니다.  
function outsideWaterExistInNeighbor(x, y) {
    for (let dir = 0; dir < 4; dir++) {
        const newX = x + dx[dir];
        const newY = y + dy[dir];
        if (inRange(newX, newY) && visited[newX][newY]) {
            return true;
        }
    }
    return false;
}

// 인접한 영역에 빙하에 둘러쌓여 있지 않은 물이 있는 빙하를 찾아 녹여줍니다.
function melt() {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (a[i][j] === GLACIER && outsideWaterExistInNeighbor(i, j)) {
                a[i][j] = WATER;
                lastMeltCnt++;
            }
        }
    }
}

// 빙하를 한 번 녹입니다.
function simulate() {
    elapsedTime++;
    lastMeltCnt = 0;
    
    // 빙하에 둘러쌓여 있지 않은 물의 위치를 전부
    // visited로 체크합니다.
    bfs();
    
    // 인접한 영역에 빙하에 둘러쌓여 있지 않은 물이 있는 빙하를 찾아
    // 녹여줍니다.
    melt();
}

// 빙하가 아직 남아있는지 확인합니다.
function glacierExist() {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (a[i][j] === GLACIER) {
                return true;
            }
        }
    }
    return false;
}

while (true) {
    simulate();

    // 빙하가 존재하는 한 계속 빙하를 녹입니다.
    if (!glacierExist()) {
        break;
    }
}

console.log(elapsedTime, lastMeltCnt);