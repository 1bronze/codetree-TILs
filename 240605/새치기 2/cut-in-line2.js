// 사람들을 나타내는 노드입니다.
class Node {
    constructor(name) {
        // 사람의 번호를 나타냅니다.
        this.name = name;
        this.prev = null;
        this.next = null;
    }
}

// 두 사람을 연결합니다.
function connect(s, e) {
    if (s !== null) s.next = e;
    if (e !== null) e.prev = s;
}

// i번 사람을 집에 보냅니다.
function pop(node) {
    // i번 사람이 어느 줄에 서있는지 확인합니다.
    const l = lineNum[personId.get(node.name)];

    // i번 사람이 어느 줄에도 서있지 않다면 아무것도 하지 않습니다.
    if (l === 0) return;

    // i번 사람이 줄의 시작이었다면 줄의 시작을 다음 사람으로 바꿉니다.
    if (head[l] === node) head[l] = head[l].next;
    // i번 사람이 줄의 끝이었다면 줄의 끝을 이전 사람으로 바꿉니다.
    if (tail[l] === node) tail[l] = tail[l].prev;

    // i번 사람을 줄에서 뺍니다.
    // 원래 i번 사람의 이전 사람과 다음 사람을 연결합니다.
    if (node.prev !== null) node.prev.next = node.next;
    if (node.next !== null) node.next.prev = node.prev;

    // i번 사람이 어느 줄에도 서있지 않다고 표시합니다.
    lineNum[personId.get(node.name)] = 0;
    node.next = node.prev = null;
}

// a번 사람을 b번 사람 앞에 서게 합니다.
function insertFront(a, b) {
    // b번 사람이 어느 줄에 서있는지 확인합니다.
    const lineNumB = lineNum[personId.get(b.name)];
    
    // b번 사람이 해당 줄의 맨 앞이었다면, a번 사람을 줄의 맨 앞으로 만듭니다.
    if (head[lineNumB] === b)
        head[lineNumB] = a;
    // a번 사람을 해당 줄에서 뺍니다.
    pop(a);

    // a번 사람을 b번 사람 앞에 서게 합니다.
    connect(b.prev, a);
    connect(a, b);

    // a번 사람이 어느 줄에 서있는지 표시합니다.
    lineNum[personId.get(a.name)] = lineNumB;
}

// a번 사람부터 b번 사람까지를 c번 사람 앞에 이동합니다.
function popRangeAndInsertPrev(a, b, c) {
    // a, c번 사람이 어느 줄에 서있는지 확인합니다.
    const lineNumA = lineNum[personId.get(a.name)];
    const lineNumC = lineNum[personId.get(c.name)];

    // a번 사람이 해당 줄의 맨 앞이었다면, 해당 줄의 맨 앞 사람을 b번 사람의 뒤로 변경합니다.
    if (head[lineNumA] === a) {
        head[lineNumA] = b.next;
    }

    // b번 사람이 해당 줄의 맨 끝이었다면, 해당 줄의 맨 끝 사람을 a번 사람의 앞으로 변경합니다.
    if (tail[lineNumA] === b) {
        tail[lineNumA] = a.prev;
    }

    // a번 사람부터 b번 사람까지를 줄에서 뺍니다.
    // 이때 a번 사람의 이전 사람과 b번 사람의 다음 사람을 연결합니다.
    connect(a.prev, b.next);

    // c번 사람 앞에 a번 사람부터 b번 사람까지를 넣습니다.
    // 이때 c번 사람이 해당 줄의 맨 앞이었다면, a번 사람을 줄의 맨 앞으로 만듭니다.
    if (head[lineNumC] === c) {
        connect(b, c);
        head[lineNumC] = a;
    } 
    // 아니라면, c번 사람의 이전 사람과 a번 사람을 연결합니다.
    // 또한 b번 사람과 c번 사람을 연결합니다.
    else {
        connect(c.prev, a);
        connect(b, c);
    }

    // a번 사람부터 b번 사람까지 어느 줄에 서 있는지 표시합니다.
    let cur = a;
    while (cur !== b) {
        lineNum[personId.get(cur.name)] = lineNumC;
        cur = cur.next;
    }
    lineNum[personId.get(cur.name)] = lineNumC;
}

// 해당 줄을 전부 출력합니다.
function printLine(l) {
    let cur = head[l];

    if (cur === null) {
        console.log(-1);
        return;
    } 

    const result = [];
    while (cur !== null) {
        result.push(cur.name);
        cur = cur.next;
    }
    console.log(result.join(' '));
}

// 입력 및 변수 선언
const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m, q] = input[0].split(' ').map(Number);
const people = input[1].split(' ');
const commands = input.slice(2, 2 + q).map(line => line.split(' '));

const MAX_N = 100000;
const MAX_M = 10;

const nodes = Array(MAX_N + 1).fill(null);
const head = Array(MAX_M + 1).fill(null);
const tail = Array(MAX_M + 1).fill(null);
const lineNum = Array(MAX_N + 1).fill(0);
const personId = new Map();

let personNum = 1;
for (let i = 1; i <= m; i++) {
    for (let j = 0; j < n / m; j++) {
        const person = people[personNum - 1];
        personId.set(person, personNum);
        lineNum[personNum] = i;
        
        if (j === 0) {
            tail[i] = head[i] = nodes[personNum] = new Node(person);
        } else {
            nodes[personNum] = new Node(person);
            connect(tail[i], nodes[personNum]);
            tail[i] = nodes[personNum];
        }

        personNum += 1;
    }
}

// q 개의 문자대로 시뮬레이션을 진행합니다.
commands.forEach(command => {
    const option = Number(command[0]);

    if (option === 1) {
        const a = command[1];
        const b = command[2];
        insertFront(nodes[personId.get(a)], nodes[personId.get(b)]);
    }
    if (option === 2) {
        const a = command[1];
        pop(nodes[personId.get(a)]);
    }
    if (option === 3) {
        const a = command[1];
        const b = command[2];
        const c = command[3];
        popRangeAndInsertPrev(nodes[personId.get(a)], nodes[personId.get(b)], nodes[personId.get(c)]);
    }
});

// 출력
for (let i = 1; i <= m; i++) {
    printLine(i);
}