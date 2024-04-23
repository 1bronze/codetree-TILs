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
let q = new Queue();
let glaciersToMelt = new Queue();
const visited = Array.from(Array(n), () => Array(m).fill(false));

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let elapsedTime = 0;
let lastMeltCnt = 0;

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < m;
}

function canGo(x, y) {
    return inRange(x, y) && a[x][y] === WATER && !visited[x][y];
}

function isGlacier(x, y) {
    return inRange(x, y) && a[x][y] === GLACIER && !visited[x][y];
}

function bfs() {
    while (!q.empty()) {
        const [x, y] = q.pop();
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (canGo(nx, ny)) {
                q.push([nx, ny]);
                visited[nx][ny] = true;
            } else if (isGlacier(nx, ny)) {
                glaciersToMelt.push([nx, ny]);
                visited[nx][ny] = true;
            }
        }
    }
}

function melt() {
    while (!glaciersToMelt.empty()) {
        const [x, y] = glaciersToMelt.pop();
        a[x][y] = WATER;
    }
}

function simulate() {
    bfs();

    if (glaciersToMelt.empty()) {
        return false;
    }

    elapsedTime++;
    lastMeltCnt = glaciersToMelt.size();

    // Copying array in JavaScript
    while (!glaciersToMelt.empty()) {
        q.push(glaciersToMelt.pop());
    }

    melt();

    return true;
}

q.push([0, 0]);
visited[0][0] = true;

while (true) {
    // q = new Queue();
    // glaciersToMelt = new Queue();

    const isGlacierExist = simulate();
    if (!isGlacierExist) {
        break;
    }
}

console.log(`${elapsedTime} ${lastMeltCnt}`);