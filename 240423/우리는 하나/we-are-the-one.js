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
const [n, k, u, d] = input[0].split(' ').map(Number);
const a = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
let ans = 0;

const sPos = [];
const pos = [];

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        pos.push([i, j]);
    }
}

// bfs에 필요한 변수들 입니다.
const q = new Queue();
const visited = Array.from(Array(n), () => Array(n).fill(false));

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function canGo(x, y, target) {
    if (!inRange(x, y) || visited[x][y]) {
        return false;
    }
    
    const diff = Math.abs(target - a[x][y]);
    return u <= diff && diff <= d;
}

function bfs() {
    // queue에 남은 것이 없을 때까지 반복합니다.
    while (!q.empty()) {
        // queue에서 가장 먼저 들어온 원소를 뺍니다.
        const [x, y] = q.pop();
        
        const dx = [1, -1, 0, 0], dy = [0, 0, 1, -1];

        // queue에서 뺀 원소의 위치를 기준으로 4방향을 확인해봅니다.
        for (let dir = 0; dir < 4; dir++) {
            const nx = x + dx[dir];
            const ny = y + dy[dir];

            // 아직 방문한 적이 없으면서 갈 수 있는 곳이라면
            // 새로 queue에 넣어주고 방문 여부를 표시해줍니다.
            if (canGo(nx, ny, a[x][y])) {
                q.push([nx, ny]);
                visited[nx][ny] = true;
            }
        }
    }
}

function calc() {
    for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++)
            visited[i][j] = 0;
    
    // bfs를 이용해 k개의 시작점으로부터
    // 도달 가능한 지점을 탐색합니다.
    // 모든 시작점을 queue에 넣고 시작하면
    // 단 한번의 탐색 만으로
    // 모든 도달 가능한 위치를 구할 수 있습니다.
    sPos.forEach(([x, y]) => {
        q.push([x, y]);
        visited[x][y] = true;
    });
    
    bfs();
    
    let cnt = 0;
    for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++)
            if (visited[i][j]) 
                cnt += 1;
    
    return cnt;
}

function findMax(idx, cnt) {
    if (cnt > k) {
        return;
    }

    if (idx === n * n) {
        if (cnt === k) {
            ans = Math.max(ans, calc());
        }
        return;
    }

    sPos.push(pos[idx]);
    findMax(idx + 1, cnt + 1);
    sPos.pop();
    
    findMax(idx + 1, cnt);
}

findMax(0, 0);
console.log(ans);