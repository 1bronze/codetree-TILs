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

const INT_MAX = Number.MAX_SAFE_INTEGER;

// 변수 선언 및 입력
const [n, m] = input[0].split(' ').map(Number);

const a = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// bfs에 필요한 변수들 입니다.
const q = new Queue();
const visited = Array.from(Array(n), () => Array(m).fill(false));
// step[i][j] : 시작점으로부터 (i, j) 지점에 도달하기 위한 최단거리를 기록합니다.
const step = Array.from(Array(n), () => Array(m).fill(0));

let ans = INT_MAX;

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < m;
}

// 격자를 벗어나지 않으면서, 뱀도 없고, 아직 방문한 적이 없는 곳이라면 
// 지금 이동하는 것이 최단거리임을 보장할 수 있으므로 가야만 합니다. 
function canGo(x, y) {
    return inRange(x, y) && a[x][y] && !visited[x][y];
}

// queue에 새로운 위치를 추가하고 방문 여부를 표시해줍니다.
// 시작점으로 부터의 최단거리 값도 갱신해줍니다.
function push(newX, newY, newStep) {
    q.push([newX, newY]);
    visited[newX][newY] = true;
    step[newX][newY] = newStep;
}

// bfs를 통해 최소 이동 횟수를 구합니다.
function findMin() {
    const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
    
    // queue에 남은 것이 없을때까지 반복합니다.
    while (!q.empty()) {
        // queue에서 가장 먼저 들어온 원소를 뺍니다.
        const [x, y] = q.pop();    

        // queue에서 뺀 원소의 위치를 기준으로 4방향을 확인해봅니다.
        for (let i = 0; i < dx.length; i++) {
            const newX = x + dx[i], newY = y + dy[i];
        
            // 아직 방문한 적이 없으면서 갈 수 있는 곳이라면 새로 queue에 넣어줍니다.
            if (canGo(newX, newY)) {
                // 최단 거리는 이전 최단거리에 1이 증가하게 됩니다.
                push(newX, newY, step[x][y] + 1);
            }
        }
    }
    
    // 우측 하단에 가는 것이 가능할때만 답을 갱신해줍니다.
    if (visited[n - 1][m - 1]) {
        ans = step[n - 1][m - 1];
    }
}

// bfs를 이용해 최소 이동 횟수를 구합니다.
// 시작점을 queue에 넣고 시작합니다.
push(0, 0, 0);
findMin();

// 불가능한 경우라면 -1을 답으로 넣어줍니다.
if (ans === INT_MAX) {
    ans = -1;
}

console.log(ans);