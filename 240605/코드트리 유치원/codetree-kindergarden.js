class Node {
    // 학생들을 나타내는 노드입니다.
    constructor(id) {
        // 학생의 번호를 나타냅니다.
        this.id = id;
        this.prev = null;
        this.next = null;
    }
}

function connect(s, e) {
    // 두 학생들을 연결해 줍니다.
    if (s !== null) s.next = e;
    if (e !== null) e.prev = s;
}

function insertNextRange(s, e, v) {
    // 번호가 s부터 e까지의 학생들을 번호가 v인 학생 뒤에 연결해 줍니다.
    const nextV = v.next;
    connect(v, s);
    connect(e, nextV);
}

function insertPrevRange(s, e, v) {
    // 번호가 s부터 e까지의 학생들을 번호가 v인 학생 앞에 연결해 줍니다.
    connect(v.prev, s);
    connect(e, v);
}

// 입력 및 변수 선언
const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const q = Number(input[0]);
const queries = input.slice(1, 1 + q).map(line => line.split(' ').map(Number));

// 최대 학생 수를 정의합니다.
const MAXN = 200000;
// 학생들을 나타내는 노드들을 저장합니다.
let nodes = new Array(MAXN + 2).fill(null);


// 맨 처음에는 1번 학생이 줄을 서고 있습니다.
// 따라서 현재까지의 줄을 서고 있는 총 학생의 수는 1입니다.
nodes[1] = new Node(1);
let nodeCnt = 1;

// q개의 행동을 진행합니다.
queries.forEach(line => {
    const option = line[0];

    if (option === 1) {
        const a = line[1];
        const b = line[2];

        // 다음 줄을 서야 할 학생의 번호는
        // 제일 마지막으로 줄을 세웠던 학생의 번호 + 1 입니다.
        const init = nodeCnt + 1;

        // b명의 학생들을 줄을 세워야하기 때문에 node_cnt를 b만큼 증가시켜줍니다.
        nodeCnt += b;

        // 학생 번호 init ~ init + b - 1 까지의 학생들을 줄을 먼저 세웁니다.
        for (let i = 0; i < b; i++) {
            nodes[init + i] = new Node(init + i);
            if (i !== 0) {
                connect(nodes[init + i - 1], nodes[init + i]);
            }
        }

        // 해당 학생들을 번호가 a인 학생 뒤에 연결해 줍니다.
        insertNextRange(nodes[init], nodes[init + b - 1], nodes[a]);
    }

    if (option === 2) {
        const a = line[1];
        const b = line[2];

        // 다음 줄을 서야 할 학생의 번호는
        // 제일 마지막으로 줄을 세웠던 학생의 번호 + 1 입니다.
        const init = nodeCnt + 1;
        nodeCnt += b;

        // 학생 번호 init ~ init + b - 1 까지의 학생들을 줄을 먼저 세웁니다.
        for (let i = 0; i < b; i++) {
            nodes[init + i] = new Node(init + i);
            if (i !== 0) {
                connect(nodes[init + i -1], nodes[init + i]);
            }
        }

        // 해당 학생들을 번호가 a인 학생 앞에 연결해 줍니다.
        insertPrevRange(nodes[init], nodes[init + b - 1], nodes[a]);
    }

    if (option === 3) {
        const a = line[1];

        // 문제의 조건 대로 출력을 진행합니다.
        if (nodes[a].prev === null || nodes[a].next === null) {
            console.log(-1);
        } else {
            console.log(nodes[a].prev.id, nodes[a].next.id);
        }
    }
})