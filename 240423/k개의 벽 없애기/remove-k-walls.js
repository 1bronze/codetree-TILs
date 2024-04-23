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

// 변수 선언 및 입력
const [n, k] = input[0].split(' ').map(Number);
const a = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
const [r1, c1] = input[1 + n].split(' ').map(v => Number(v) - 1);
const [r2, c2] = input[2 + n].split(' ').map(v => Number(v) - 1);
const stonePos = [];

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (a[i][j]) stonePos.push([i, j]);
    }
}

// bfs에 필요한 변수들 입니다.
const q = new Queue();
const visited = Array.from(Array(n), () => Array(n).fill(false));
// step[i][j] : 시작점으로부터 (i, j) 지점에 도달하기 위한 최단거리를 기록합니다.
const step = Array.from(Array(n), () => Array(n).fill(0));

let ans = Number.MAX_SAFE_INTEGER;

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

// 격자를 벗어나지 않으면서, 벽도 없고, 아직 방문한 적이 없는 곳이라면
// 지금 이동하는 것이 최단거리임을 보장할 수 있으므로 가야만 합니다. 
function canGo(x, y) {
    return inRange(x, y) && !a[x][y] && !visited[x][y];
}

// queue에 새로운 위치를 추가하고 방문 여부를 표시해줍니다.
// 시작점으로 부터의 최단거리 값도 갱신해줍니다.
function push(nx, ny, newStep) {
    q.push([nx, ny]);
    visited[nx][ny] = true;
    step[nx][ny] = newStep;
}

// bfs를 통해 최소 이동 횟수를 구합니다.
function bfs() {
    // queue에 남은 것이 없을때까지 반복합니다.
    while (!q.empty()) {
        // queue에서 가장 먼저 들어온 원소를 뺍니다.
        const [x, y] = q.pop();

        const dx = [-1, 1, 0, 0], dy = [0, 0, -1, 1];

        // queue에서 뺀 원소의 위치를 기준으로 4방향을 확인해봅니다.
        for (let dir = 0; dir < 4; dir++) {
            const nx = x + dx[dir], ny = y + dy[dir];

            // 아직 방문한 적이 없으면서 갈 수 있는 곳이라면
            // 새로 queue에 넣어줍니다.
            if (canGo(nx, ny)) {
                // 최단 거리는 이전 최단거리에 1이 증가하게 됩니다.
                push(nx, ny, step[x][y] + 1);
            }
        }
    }

    // 도착점에 가는 것이 가능할때만 답을 갱신해줍니다.
    if (visited[r2][c2]) {
        return step[r2][c2];
    } else {
        return Number.MAX_SAFE_INTEGER;
    }
}

function findMin(idx, cnt) {
    if (idx === stonePos.length) {
        if (cnt === k) {
            // visited, step 값을 초기화 해줍니다.
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    visited[i][j] = false;
                    step[i][j] = 0;
                }
            }

            // bfs를 이용해 최소 이동 횟수를 구합니다.
		    // 시작점을 queue에 넣고 시작합니다.
            push(r1, c1, 0);
            const minDist = bfs();
            ans = Math.min(ans, minDist);
        }
        return;
    }

    const [x, y] = stonePos[idx];
    a[x][y] = 0;
    findMin(idx + 1, cnt + 1);
    a[x][y] = 1;
    
    findMin(idx + 1, cnt);
}

findMin(0, 0);

// 출력:
if (ans === Number.MAX_SAFE_INTEGER) { // 불가능한 경우라면
    ans = -1;                          // -1을 답으로 넣어줍니다.
}

console.log(ans);