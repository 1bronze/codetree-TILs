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

// 변수 선언 및 입력:
const [n, k] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// bfs에 필요한 변수들입니다.
const bfsQ = new Queue();
const visited = Array.from(Array(n), () => Array(n).fill(false));

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function canGo(x, y) {
    return inRange(x, y) && !grid[x][y] && !visited[x][y];
}

function bfs() {
    // queue에 남은 것이 없을 때까지 반복합니다.
    while (bfsQ.size() > 0) {
        // queue에서 가장 먼저 들어온 원소를 뺍니다.
        const [x, y] = bfsQ.pop();
        
        const dx = [1, -1, 0, 0], dy = [0, 0, 1, -1];

        // queue에서 뺀 원소의 위치를 기준으로 4방향을 확인해봅니다.
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            // 아직 방문한 적이 없으면서 갈 수 있는 곳이라면
            // 새로 queue에 넣어주고 방문 여부를 표시해줍니다.
            if (canGo(nx, ny)) {
                bfsQ.push([nx, ny]);
                visited[nx][ny] = true;
            }
        }
    }
}

// 시작점을 모두 bfs queue에 넣습니다.
input.slice(n + 1).forEach(line => {
    const [x, y] = line.split(' ').map(Number);
    bfsQ.push([x - 1, y - 1]);
    visited[x - 1][y - 1] = true;
});

// bfs를 진행합니다.
bfs();

let ans = 0;
for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
        if (visited[i][j])
            ans++;

console.log(ans);