class Node {
    constructor(id) {
        this.id = id;
        this.prev = null;
        this.next = null;
    }
}

// 두 노드를 연결해줍니다.
function connect(s, e) {
    if (s !== null) {
        s.next = e;
    }
    if (e !== null) {
        e.prev = s;
    }
}

// 부분 배열의 위치를 바꿔줍니다.
function swapSubarray(a, b, c, d) {
    // 연결된 이후 각각 a의 이전노드, b의 이후노드, c의 이전노드, d의 이후노드가
    // 무엇인지 기록합니다.
    let after_prevA = c.prev;
    let after_nextB = d.next;

    let after_prevC = a.prev;
    let after_nextD = b.next;

    // b와 c가 붙어있는 경우 예외 처리를 해줍니다.
    if (b.next === c) {
        after_prevA = d;
        after_nextD = a;
    }
    // d와 a가 붙어있는 경우 예외 처리를 해줍니다.
    if (d.next === a) {
        after_nextB = c;
        after_prevC = b;
    }

    // 각각의 노드를 연결합니다.
    connect(after_prevA, a);
    connect(b, after_nextB);

    connect(after_prevC, c);
    connect(d, after_nextD);
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 입력 및 변수 선언
const n = Number(input[0]);
const q = Number(input[1]);
const commands = input.slice(2, 2 + q).map(line => line.split(' ').map(Number));

const MAX_N = 250000;
const nodes = [];

// N개의 노드를 생성합니다.
for (let i = 0; i <= n; i++) {
    nodes.push(new Node(i));
}

// 1부터 N번 까지의 노드를 차례로 연결해줍니다.
for (let i = 1; i < n; i++) {
    connect(nodes[i], nodes[i + 1]);
}

// 연산을 진행합니다.
commands.forEach(([a, b, c, d]) => {
    swapSubarray(nodes[a], nodes[b], nodes[c], nodes[d]);
});

// 연산이 끝나고 제일 앞에 있는 노드를 찾습니다.
let cur = nodes[1];
while (cur.prev) {
    cur = cur.prev;
}

// 해당 노드부터 끝까지 출력을 합니다.
let result = [];
while (cur) {
    result.push(cur.id);
    cur = cur.next;
}
console.log(result.join(' '));