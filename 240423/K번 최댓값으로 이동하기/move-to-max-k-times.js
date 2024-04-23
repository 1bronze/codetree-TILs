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

const NOT_EXISTS = [-1, -1];

const [n, k] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// 현재 위치
let [r, c] = input[1 + n].split(' ').map(Number);
let currCell = [r - 1, c - 1];

const bfsQ = new Queue();
let visited = Array.from(Array(n), () => Array(n).fill(0));

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function canGo(x, y, targetNum) {
    return inRange(x, y) && !visited[x][y] && grid[x][y] < targetNum;
}

// visited 배열을 초기화 해줍니다.
const initializeVisited = () => {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            visited[i][j] = false;
        }
    }
};

function bfs() {
    const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];

    let [currX, currY] = currCell;
    visited[currX][currY] = true;
    bfsQ.push(currCell);
    
    const targetNum = grid[currX][currY];
    
    // BFS 탐색을 수행합니다.
    while (!bfsQ.empty()) {
        [currX, currY] = bfsQ.pop();

        for (let i = 0; i < dx.length; i++) {
            const newX = currX + dx[i];
            const newY = currY + dy[i];

            if (canGo(newX, newY, targetNum)) {
                bfsQ.push([newX, newY]);
                visited[newX][newY] = true;
            }
        }
    }
}

// best 위치를 새로운 위치로 바꿔줘야 하는지를 판단합니다.
function needUpdate(bestPos, newPos) {
    // 첫 도달 가능한 위치라면
    // update가 필요합니다.
    if (bestPos[0] === NOT_EXISTS[0] && bestPos[1] === NOT_EXISTS[1]) {
        return true;
    }

    const [bestX, bestY] = bestPos;
    const [newX, newY] = newPos;

    // 숫자, -행, -열 순으로 더 큰 곳이 골라져야 합니다.
    if(grid[newX][newY] != grid[bestX][bestY])
        return grid[newX][newY] > grid[bestX][bestY];
    if(-newX != -bestX)
        return -newX > -bestX;
    return -newY > -bestY;
};

// 가장 우선순위가 높은 위치를 찾아
// 위치를 이동합니다.
function move() {
    // BFS 탐색을 위한 초기화 작업을 수행합니다.
    initializeVisited();

    // Step1. BFS를 진행하여 갈 수 있는 모든 위치를 탐색합니다.
    bfs();

    // Step2. 
    // 도달 할 수 있는 위치들 중
    // 가장 우선순위가 높은 위치를 구합니다.
    let bestPos = NOT_EXISTS;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // 도달이 불가능하거나 현재 위치는 건너뜁니다.
            if (!visited[i][j] || (i === currCell[0] && j === currCell[1])) {
                continue;
            }

            const newPos = [i, j];
            if (needUpdate(bestPos, newPos)) {
                bestPos = newPos;
            }
        }
    }

    // Step3. 위치를 이동합니다.

    // 만약 움직일 위치가 없다면 종료합니다.
    if (bestPos[0] === NOT_EXISTS[0] && bestPos[1] === NOT_EXISTS[1]) {
        return false;
    } 
    // 움직일 위치가 있다면 이동합니다.
    else {
        currCell = bestPos;
        return true;
    }
}

// k번에 걸쳐 움직이는 것을 반복합니다.
for (let i = 0; i < k; i++) {
    const isMoved = move();

    // 움직이지 못했다면 바로 종료합니다.
    if (!isMoved) {
        break;
    }
}

const [finalX, finalY] = currCell;
console.log(finalX + 1, finalY + 1);