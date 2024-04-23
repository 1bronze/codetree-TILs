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
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력
const [n, k] = input[0].split(" ").map(Number);
const a = input.slice(1, 1 + n).map(line => line.split(" ").map(Number));

const sPos = [];
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (a[i][j] === 2) {
            sPos.push([i, j]);
        }
    }
}

// bfs에 필요한 변수들 입니다.
const q = new Queue();
const visited = Array.from(Array(n), () => Array(n).fill(false));
// step[i][j] : (i, j) 지점에 있는 귤이 최초로 상하게 되는 시간을 기록합니다.
const step = Array.from(Array(n), () => Array(n).fill(0));


function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

// 격자를 벗어나지 않으면서, 해당 위치에 귤이 놓여있고, 아직 방문한 적이 없는 곳이라면
// 지금 이동하는 것이 최초로 해당 귤을 상하게 하는 것이므로 가야만 합니다. 
function canGo(x, y) {
    return inRange(x, y) && a[x][y] && !visited[x][y];
}

// queue에 새로운 위치를 추가하고 방문 여부를 표시해줍니다.
// 상하게 되는 시간 값도 갱신해줍니다.
function push(nx, ny, newStep) {
    q.push([nx, ny]);
    visited[nx][ny] = true;
    step[nx][ny] = newStep;
}

// bfs를 통해 각 칸마다 최초로 상하게 되는 시간을 구합니다.
function bfs() {
    // queue에 남은 것이 없을때까지 반복합니다.
    while (!q.empty()) {
        // queue에서 가장 먼저 들어온 원소를 뺍니다.
        const [x, y] = q.pop();
        const dx = [-1, 1, 0, 0], dy = [0, 0, -1, 1];
        
        // queue에서 뺀 원소의 위치를 기준으로 4방향을 확인해봅니다.
        for (let dir = 0; dir < 4; dir++) {
            const nx = x + dx[dir], ny = y + dy[dir];
            
            // 아직 방문한 적이 없으면서 갈 수 있는 곳이라면 새로 queue에 넣어줍니다.
            if (canGo(nx, ny)) {
                // 시간은 이전 시간에 1이 더해지게 됩니다.
                push(nx, ny, step[x][y] + 1);
            }
        }
    }
}

// 처음 상해있던 귤들을 전부 queue에 넣어놓고 시작합니다.
// 이는 각 칸에 있는 신선한 귤에 대해 가장 가까이에 있던 상한 귤로부터
// 최초로 상하게 되는 시간을 단 한번의 BFS로 가능하게끔 합니다.
sPos.forEach(([x, y]) => {
    push(x, y, 0)
});

bfs();

let answer = "";
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (a[i][j] === 0) {
            answer += "-1 ";
        } else {
            if (!visited[i][j]) {
                answer += "-2 ";
            } else {
                answer += `${step[i][j]} `;
            }
        }
    }
    answer += "\n";
}

console.log(answer);