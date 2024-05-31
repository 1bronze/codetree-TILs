class Node {
    constructor(id) {
        this.id = id;
        this.prev = null;
        this.next = null;
    }
}

// u 앞에 singleton을 삽입합니다.
function insertPrev(u, singleton) {
    singleton.prev = u.prev;
    singleton.next = u;
    if (singleton.prev !== null) {
        singleton.prev.next = singleton;
    }
    if (singleton.next !== null) {
        singleton.next.prev = singleton;
    }
}

// u 뒤에 singleton을 삽입합니다.
function insertNext(u, singleton) {
    singleton.prev = u;
    singleton.next = u.next;
    if (singleton.prev !== null) {
        singleton.prev.next = singleton;
    }
    if (singleton.next !== null) {
        singleton.next.prev = singleton;
    }
}

// 노드 u를 제거합니다.
function pop(u) {
    if (u.prev !== null) {
        u.prev.next = u.next;
    }
    if (u.next !== null) {
        u.next.prev = u.prev;
    }
    u.prev = null;
    u.next = null;
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 입력 및 변수 선언
const n = Number(input[0]);
const q = Number(input[1]);
const commands = input.slice(2, 2 + q).map(line => line.split(" ").map(Number));

// N 개의 단일 노드를 생성합니다.
let nodes = [];
for (let i = 0; i <= n; i++) {
    nodes.push(new Node(i));
}

// Q 개의 연산을 진행합니다.
commands.forEach(command => {
    const option = command[0];
    const i = command[1];

    if (option === 1) {
        pop(nodes[i]);
    } else if (option === 2) {
        const j = command[2];
        insertPrev(nodes[i], nodes[j]);
    } else if (option === 3) {
        const j = command[2];
        insertNext(nodes[i], nodes[j]);
    } else if (option === 4) {
        const prevId = nodes[i].prev === null ? 0 : nodes[i].prev.id;
        const nextId = nodes[i].next === null ? 0 : nodes[i].next.id;
        console.log(prevId, nextId);
    }
});

// 연산을 마친 후 1번 부터 N번 노드까지의 다음 노드 번호를 차례대로 한 줄에 출력합니다.
let result = [];
for (let i = 1; i <= n; i++) {
    result.push(nodes[i].next === null ? 0 : nodes[i].next.id);
}
console.log(result.join(' '));