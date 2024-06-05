class Node {
    // 사람들을 나타내는 노드입니다.
    constructor(id) {
        // 사람의 번호를 나타냅니다.
        this.id = id;
        this.prev = null;
        this.next = null;
    }
}

function connect(s, e) {
    // 두 사람을 연결합니다.
    if (s !== null) s.next = e;
    if (e !== null) e.prev = s;
}

// i번 사람을 집에 보냅니다.
function pop(i) {
    // i번 사람이 어느 줄에 서있는지 확인합니다.
    const l = lineNum[i.id];

    // i번 사람이 어느 줄에도 서있지 않다면 아무것도 하지 않습니다.
    if (l === 0) {
        return;
    }
    // i번 사람이 줄의 시작이었다면 줄의 시작을 다음 사람으로 바꿉니다.
    if (head[l] === i) head[l] = i.next;
    // i번 사람이 줄의 끝이었다면 줄의 끝을 이전 사람으로 바꿉니다.
    if (tail[l] === i) tail[l] = i.prev;

    // i번 사람을 줄에서 뺍니다.
    // 원래 i번 사람의 이전 사람과 다음 사람을 연결합니다.
    if (i.prev !== null) i.prev.next = i.next;
    if (i.next !== null) i.next.prev = i.prev;

    // i번 사람이 어느 줄에도 서있지 않다고 표시합니다.
    lineNum[i.id] = 0;
    i.next = i.prev = null;
}

function insertFront(a, b) {
    // a번 사람을 b번 사람 앞에 서게 합니다.
    const lineNumB = lineNum[b.id];

    // b번 사람이 어느 줄에 서있는지 확인합니다.
    if (head[lineNumB] === b) {
        head[lineNumB] = a;
    }

    // b번 사람이 해당 줄의 맨 앞이었다면, a번 사람을 줄의 맨 앞으로 만듭니다.
    pop(a);
    connect(b.prev, a);
    connect(a, b);

    // a번 사람을 해당 줄에서 뺍니다.
    lineNum[a.id] = lineNumB;
}

function popRangeAndInsertPrev(a, b, c) {
    // a번 사람부터 b번 사람까지를 c번 사람 앞에 이동합니다.
    const lineNumA = lineNum[a.id];
    const lineNumC = lineNum[c.id];

    // a, c번 사람이 어느 줄에 서있는지 확인합니다.
    if (head[lineNumA] === a) {
        head[lineNumA] = b.next;
    }
    if (tail[lineNumA] === b) {
        tail[lineNumA] = a.prev;
    }

    // a번 사람이 해당 줄의 맨 앞이었다면, 해당 줄의 맨 앞 사람을 b번 사람의 뒤로 변경합니다.
    connect(a.prev, b.next);
    if (head[lineNumC] === c) {
        head[lineNumC] = a;
    } else {
        connect(c.prev, a);
    }

    // b번 사람이 해당 줄의 맨 끝이었다면, 해당 줄의 맨 끝 사람을 a번 사람의 앞으로 변경합니다.
    connect(b, c);
    let cur = a;

    // a번 사람부터 b번 사람까지를 줄에서 뺍니다.
    while (cur !== b.next) {
        lineNum[cur.id] = lineNumC;
        cur = cur.next;
    }
}

function printLine(l) {
    // 해당 줄을 전부 출력합니다.
    let cur = head[l];
    if (cur === null) {
        console.log(-1);
    } else {
        const result = [];
        while (cur !== null) {
            result.push(cur.id);
            cur = cur.next;
        }
        console.log(result.join(' '));
    }
}

// 입력 및 변수 선언
const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m, q] = input[0].split(' ').map(Number);
const lines = input.slice(1, 1 + m).map(line => line.split(' ').map(Number));
const commands = input.slice(1 + m, 1 + m + q).map(line => line.split(' ').map(Number));

const MAX_N = 100002;
const MAX_M = 10;

const nodes = Array(MAX_N + 1).fill(null);
const head = Array(MAX_M + 1).fill(null);
const tail = Array(MAX_M + 1).fill(null);
const lineNum = Array(MAX_N + 1).fill(0);

lines.forEach((line, i) => {
    const l = line[0];
    for (let j = 0; j < l; j++) {
        const t = line[j + 1];
        lineNum[t] = i + 1;
        nodes[t] = new Node(t);

        if (j === 0) {
            head[i + 1] = tail[i + 1] = nodes[t];
        } else {
            connect(tail[i + 1], nodes[t]);
            tail[i + 1] = nodes[t];
        }
    }
});

// q 개의 문자대로 시뮬레이션을 진행합니다.
commands.forEach(command => {
    const option = command[0];

    if (option === 1) {
        const a = command[1];
        const b = command[2];
        insertFront(nodes[a], nodes[b]);
    }
    if (option === 2) {
        const a = command[1];
        pop(nodes[a]);
    }
    if (option === 3) {
        const a = command[1];
        const b = command[2];
        const c = command[3];
        popRangeAndInsertPrev(nodes[a], nodes[b], nodes[c]);
    }
});

// 출력
for (let i = 1; i <= m; i++) {
    printLine(i);
}