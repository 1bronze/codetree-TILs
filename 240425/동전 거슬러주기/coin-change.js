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

const [n, m] = input[0].split(' ').map(Number);
const coin = [0].concat(input[1].split(' ').map(Number));

// bfs에 필요한 변수들 입니다.
let q = new Queue();
let visited = Array(m + 1).fill(false);

// step[i] : 정점 0에서 시작하여 정점 i 지점에 도달하기 위한  
// 최단거리를 기록합니다.
let step = Array(m + 1).fill(0);
let ans = 0;

// m 이내의 숫자만 이용해도 올바른 답을 구할 수 있으므로 
// 그 범위 안에 들어오는 숫자인지를 확인합니다.
function inRange(num) {
    return num <= m;
}

// m 이내의 숫자이면서 아직 방문한 적이 없다면 가야만 합니다. 
function canGo(num) {
    return inRange(num) && !visited[num];
}

// queue에 새로운 위치를 추가하고
// 방문 여부를 표시해줍니다.
// 시작점으로부터의 최단거리 값도 갱신해줍니다.
function push(num, newStep) {
    q.push(num);
    visited[num] = true;
    step[num] = newStep;
}

// BFS를 통해 최소 연산 횟수를 구합니다.
function findMin() {
    // queue에 남은 것이 없을때까지 반복합니다.
    while (!q.empty()) {
        // queue에서 가장 먼저 들어온 원소를 뺍니다.
        let currNum = q.pop();
        
        // queue에서 뺀 원소의 위치를 기준으로 n개의 동전들을 사용해봅니다.
        for (let i = 1; i <= n; i++) {
            // 아직 방문한 적이 없으면서 갈 수 있는 곳이라면 새로 queue에 넣어줍니다.
            if (canGo(currNum + coin[i])) {
                // 최단 거리는 이전 최단거리에 1이 증가하게 됩니다. 
                push(currNum + coin[i], step[currNum] + 1);
            }
        }
    }
    // m번 정점까지 가는 데 필요한 최소 연산 횟수를 답으로 기록합니다.
    // 만약 m번 정점으로 갈 수 없다면, -1을 기록합니다
    ans = visited[m] ? step[m] : -1;
}
        
// BFS를 통해 최소 연산 횟수를 구합니다.
push(0, 0);
findMin();
console.log(ans);