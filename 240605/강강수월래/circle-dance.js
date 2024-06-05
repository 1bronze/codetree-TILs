class Node {
    constructor(id) {
        this.id = id;
        this.prev = null;
        this.next = null;
    }
}

// 두 사람을 연결합니다.
function connect(s, e) {
    if (s !== null) s.next = e;
    if (e !== null) e.prev = s;
}

// 두 원을 연결합니다.
function connectCircle(u, v) {
    const vPrev = v.prev;
    const uNext = u.next;

    connect(u, v);
    connect(vPrev, uNext);
}

// 두 원을 쪼갭니다.
function splitCircle(u, v) {
    const uPrev = u.prev;
    const vPrev = v.prev;

    connect(uPrev, v);
    connect(vPrev, u);
}

// 원을 출력합니다.
function printLine(target) {
    // 원에서 학생 번호가 가장 작은 학생을 찾습니다.
    let mn = target.id;
    let cur = target;
    while (true) {
        cur = cur.next;
        if (cur !== null)
            mn = Math.min(mn, cur.id);
        if (cur === target)
            break;
    }

    // 가장 작은 학생부터 출력합니다.
    const result = [];
    let init = nodes[studentId.get(mn)];
    cur = nodes[studentId.get(mn)];
    while (true) {
        result.push(cur.id);
        // 반시계 방향으로 돌면서 출력합니다.
        cur = cur.prev;
        if (cur.id === init.id)
            break;
    }
    console.log(result.join(' '));
}

// 입력 및 변수 선언
const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m, q] = input[0].split(' ').map(Number);
const lines = input.slice(1, 1 + m).map(line => line.split(' ').map(Number));
const commands = input.slice(1 + m, 1 + m + q).map(line => line.split(' ').map(Number));

const MAX_N = 100000;

// 학생들을 관리해줄 배열입니다.
const nodes = new Array(MAX_N + 2).fill(null);

// 학생들의 번호의 범위가 1 ~ 10억이기 때문에, map으로 학생들의 번호들을 관리해줍니다.
const studentId = new Map();

let nodeCnt = 1;
lines.forEach(line => {
    const circleSize = line[0];
    let start = null;
    let tail = null;

    for (let i = 1; i <= circleSize; i++) {
        const studentNum = line[i];
        studentId.set(studentNum, nodeCnt);
        nodes[nodeCnt] = new Node(studentNum);

        if (i === 1) {
            start = tail = nodes[nodeCnt];
        } else {
            connect(tail, nodes[nodeCnt]);
            tail = nodes[nodeCnt];
            if (i === circleSize) {
                // 원에서의 마지막 학생은 해당 원의 첫 학생과 연결합니다.
                connect(tail, start);
            }
        }
        nodeCnt++;
    }
});

// q개의 행동을 진행합니다.
commands.forEach(command => {
    const option = command[0];

    if (option === 1) {
        const a = command[1];
        const b = command[2];
        connectCircle(nodes[studentId.get(a)], nodes[studentId.get(b)]);
    }
    if (option === 2) {
        const a = command[1];
        const b = command[2];
        splitCircle(nodes[studentId.get(a)], nodes[studentId.get(b)]);
    }
    if (option === 3) {
        const a = command[1];
        printLine(nodes[studentId.get(a)]);
    }
});