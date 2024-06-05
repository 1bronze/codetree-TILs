class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// 두 기사들을 연결해줍니다.
function connect(s, e) {
    if (s !== null) s.next = e;
    if (e !== null) e.prev = s;
}

// 해당 기사를 자리에서 없애줍니다.
function pop(u) {
    connect(u.prev, u.next);
    u.prev = null;
    u.next = null;
}

// 입력 및 변수 선언
const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].trim().split(' ').map(Number);
const knightNums = input[1].trim().split(' ').map(Number);
const queries = input.slice(2, 2 + m).map(Number);

// 기사들을 관리해줄 배열입니다.
const nodes = [];
knightNums.forEach(knightNum => nodes.push(new Node(knightNum)));
// 기사들의 번호의 범위가 1 ~ 10억이기 때문에, map으로 기사들의 번호들을 관리해줍니다.
const nodeId = new Map();
knightNums.forEach((knightNum, i) => nodeId.set(knightNum, i));

// 이전 기사와 현재 기사를 연결해줍니다.
for (let i = 1; i < n; i++) {
    connect(nodes[i - 1], nodes[i]);

    // 마지막 기사라면, 첫번째 기사와 마지막 기사를 연결해줍니다.
    if (i === n - 1)
        connect(nodes[n - 1], nodes[0]);
}

// 왕이 기사들의 번호를 부를 때마다
// 해당 기사의 왼쪽과 오른쪽에 있는 기사들의 번호를 출력합니다.
queries.forEach(knightNum => {
    // 기사의 배열에서의 인덱스를 찾아 연산을 진행합니다.
    console.log(nodes[nodeId.get(knightNum)].next.data, nodes[nodeId.get(knightNum)].prev.data);

    // 이름이 불렸다면 해당 기사를 자리에서 없애줍니다.
    pop(nodes[nodeId.get(knightNum)]);
});