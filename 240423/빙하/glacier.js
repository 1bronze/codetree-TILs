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
const glaciersToMelt = new Queue();
const visited = Array.from(Array(n), () => Array(m).fill(false));

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

// 소요 시간과 가장 마지막으로 녹은 빙하의 수를 저장합니다.
let elapsedTime = 0;
let lastMeltCnt = 0;

// 주어진 위치가 격자를 벗어나는지 여부를 반환합니다.
function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < m;
}

// 범위를 벗어나지 않으면서 물이여야 하고 방문한적이 
// 없어야 갈 수 있습니다.
function canGo(x, y) {
    return inRange(x, y) && a[x][y] === WATER && !visited[x][y];
}

// 범위를 벗어나지 않으면서 빙하여야 하고 이미 
// 선택된 적이 없어야 중복 없이 녹아야할 빙하 목록에 
// 해당 빙하를 문제 없이 추가할 수 있습니다.
function isGlacier(x, y) {
    return inRange(x, y) && a[x][y] === GLACIER && !visited[x][y];
}

// 아직 방문해보지 못한 빙하에 둘러쌓여 있지 않은 물 영역을 더 탐색해주는 BFS입니다.
function bfs() {
    while (!q.empty()) {
        // queue에서 가장 먼저 들어온 원소를 뺍니다.
        const [x, y] = q.pop();

        // queue에서 뺀 원소의 위치를 기준으로 네 방향을 확인합니다.
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            // 더 갈 수 있는 곳이라면 Queue에 추가합니다.
            if (canGo(nx, ny)) {
                q.push([nx, ny]);
                visited[nx][ny] = true;
            } 
            // 만약 아직 방문하지 않은 빙하가 있는 곳이라면
            else if (isGlacier(nx, ny)) {
                // 빙하에 둘러쌓여 있지 않은 물에 인접한 빙하이므로 이번에 녹아야 할 빙하이므로 
                // 따로 저장해줍니다.
                // 중복되어 같은 빙하 정보가 기록되는 것을 막기위해
                // 이때에도 visited 값을 true로 설정해줍니다.
                glaciersToMelt.push([nx, ny]);
                visited[nx][ny] = true;
            }
        }
    }
}

// 녹여야 할 빙하들을 녹여줍니다.
function melt() {
    while (!glaciersToMelt.empty()) {
        const [x, y] = glaciersToMelt.pop();
        a[x][y] = WATER;
    }
}

// 빙하를 한 번 녹입니다.
function simulate() {
    // 빙하에 둘러쌓여 있지 않은 물의 영역을 넓혀보며
    // 더 녹일 수 있는 빙하가 있는지 봅니다. 
    bfs();

    // 더 녹일 수 있는 빙하가 없다면 시뮬레이션을 종료합니다.
    if (glaciersToMelt.empty()) {
        return false;
    }

    // 더 녹일 빙하가 있다면 답을 갱신해주고
    // 그 다음 시뮬레이션에서는 해당 빙하들의 위치를 시작으로
    // 빙하에 둘러쌓여 있지 않은 물의 영역을 더 탐색할 수 있도록 queue에 
    // 녹아야 할 빙하들의 위치를 넣어줍니다.
    elapsedTime++;
    lastMeltCnt = glaciersToMelt.size();

    while (!glaciersToMelt.empty()) {
        q.push(glaciersToMelt.pop());
    }

    // 녹아야 할 빙하들을 녹여줍니다.
    melt();

    return true;
}

// 처음에는 (0, 0) 에서 시작하여 초기 빙하에 둘러쌓여 있지 않은 물들을 찾을 수 있도록 합니다.
q.push([0, 0]);
visited[0][0] = true;

while (true) {
    const isGlacierExist = simulate();

    // 빙하에 둘러쌓여 있지 않은 물의 영역을 넓혀보며 더 녹일 수 있는 빙하가 있는지 봅니다.
    if (!isGlacierExist) {
        break;
    }
}

console.log(elapsedTime, lastMeltCnt);