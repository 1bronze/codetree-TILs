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
const input = fs.readFileSync(0).toString().trim().split('n');

const SUBTRACT = 0;
const ADD = 1;
const DIV2 = 2;
const DIV3 = 3;

let n = Number(input[0]);
let ans = Number.MAX_SAFE_INTEGER;

let q = new Queue();
let visited = Array(2 * n).fill(false);

// step[i]: 정점 n에서 시작하여 정점 i 지점에 도달하기 위한 
// 최단 거리를 기록합니다.
let step = Array(2 * n).fill(0);

// num이라는 값에 해당 operator를 사용할 수 있는지를 판단합니다.
// 2로 나누거나 3으로 나누려는 경우 num이 해당 값으로 나누어 떨어질 때에만
// 해당 연산을 사용 가능합니다.
function possible(num, op) {
    if (op === SUBTRACT || op === ADD) {
        return true;
    } else if (op === DIV2) {
        return num % 2 === 0;
    } else {
        return num % 3 === 0;
    }
}

// num에 op 연산을 수행했을 때의 결과를 반환합니다.
function calculate(num, op) {
    if (op === SUBTRACT) {
        return num - 1;
    } else if (op === ADD) {
        return num + 1;
    } else if (op === DIV2) {
        return Math.floor(num / 2);
    } else {
        return Math.floor(num / 3);
    }
}

// 1에서 2n - 1 사이의 숫자만 이용해도 올바른 답을 구할 수 있으므로 
// 그 범위 안에 들어오는 숫자인지를 확인합니다.
function inRange(num) {
    return 1 <= num && num <= 2 * n - 1;
}

// 1에서 2n - 1 사이의 숫자이면서 아직 방문한 적이 없다면 가야만 합니다. 
function canGo(num) {
    return inRange(num) && !visited[num];
}

// queue에 새로운 위치를 추가하고 방문 여부를 표시해줍니다.
// 시작점으로 부터의 최단거리 값도 갱신해줍니다.
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
        
        // queue에서 뺀 원소의 위치를 기준으로 4가지 연산들을 적용해봅니다.
        for (let i = 0; i < 4; i++) {
            // 연산을 적용할 수 없는 경우라면 패스합니다.
            if (!possible(currNum, i)) {
                continue;
            }
            
            let newNum = calculate(currNum, i);
            // 아직 방문한 적이 없으면서 갈 수 있는 곳이라면 새로 queue에 넣어줍니다.
            if (canGo(newNum)) {
                // 최단 거리는 이전 최단거리에 1이 증가하게 됩니다. 
                push(newNum, step[currNum] + 1);
            }
        }
        
        // 1번 정점까지 가는 데 필요한 최소 연산 횟수를 답으로 기록합니다.
        ans = step[1];
    }
}

// BFS를 통해 최소 연산 횟수를 구합니다.
push(n, 0);
findMin();
console.log(ans);