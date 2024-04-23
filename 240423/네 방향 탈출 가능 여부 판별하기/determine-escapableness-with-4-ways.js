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
const [n, m] = input[0].split(' ').map(Number);
const a = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
const visited = Array.from(Array(n), () => Array(m).fill(false));
const q = new Queue();

// 주어진 위치가 격자를 벗어나는지 여부를 반환합니다.
function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < m;
}

// 주어진 위치로 이동할 수 있는지 여부를 확인합니다.
function canGo(x, y) {
    return inRange(x, y) && a[x][y] && !visited[x][y];
}

function bfs() {
    // queue에 남은 것이 없을 때까지 반복합니다.
    while (q.size() > 0) {
        // queue에서 가장 먼저 들어온 원소를 뺍니다.
        const [x, y] = q.pop();
        
        // queue에서 뺀 원소의 위치를 기준으로 4방향을 확인해봅니다.
        const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
        for (let i = 0; i < 4; i++) {
            const newX = x + dx[i];
            const newY = y + dy[i];
            
            // 아직 방문한 적이 없으면서 갈 수 있는 곳이라면
            // 새로 queue에 넣어주고 방문 여부를 표시해줍니다.
            if (canGo(newX, newY)) {
                q.push([newX, newY]);
                visited[newX][newY] = true;
            }
        }
    }
}

// bfs를 이용해 최소 이동 횟수를 구합니다.
// 시작점을 queue에 넣고 시작합니다.
q.push([0, 0]);
visited[0][0] = true;

bfs();

// 우측 하단을 방문한 적이 있는지 여부를 출력합니다.
const answer = visited[n - 1][m - 1] ? 1 : 0;
console.log(answer);