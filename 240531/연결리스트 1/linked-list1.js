class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// 두 노드를 연결해줍니다.
function connect(s, e) {
    if (s !== null) s.next = e;
    if (e !== null) e.prev = s;
}

// target 뒤에 s를 삽입합니다.
function insertNext(target, s) {
    connect(s, target.next);
    connect(target, s);
}

// target 앞에 s를 삽입합니다.
function insertPrev(target, s) {
    connect(target.prev, s);
    connect(s, target);
}

// target의 이전 노드, target, target의 다음 노드의 값을 출력합니다.
function printNode(target) {
    let n = "(Null)";

    // 이전 노드가 존재하지 않는다면, Null을 출력합니다.
    // 아니라면, 이전 노드의 값을 출력합니다.
    let prevData = target.prev === null ? n : target.prev.data;
    let nextData = target.next === null ? n : target.next.data;

    console.log(`${prevData} ${target.data} ${nextData}`);
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 입력 및 변수 선언
const s = input[0];
const n = Number(input[1]);
const commands = input.slice(2, 2 + n).map(line => line.split(" "));

// 맨 처음 존재하는 노드를 만듭니다.
let cur = new Node(s);

commands.forEach(command => {
    const option = Number(command[0]);

    // option이 1이라면, cur의 앞에 노드를 삽입합니다.
    if (option === 1) {
        // 삽입할 노드를 만듭니다.
        const target = new Node(command[1]);

        // cur의 앞에 삽입합니다.
        insertPrev(cur, target);
    }

    // option이 2라면, cur의 뒤에 노드를 삽입합니다.
    if (option === 2) {
        // 삽입할 노드를 만듭니다.
        const target = new Node(command[1]);

        // cur의 뒤에 삽입합니다.
        insertNext(cur, target);
    }

    // option이 3이라면, cur을 이전 노드로 이동합니다.
    if (option === 3) {
        // cur의 이전 노드가 존재한다면, cur을 cur의 이전 노드로 변경합니다.
        if (cur.prev !== null) 
            cur = cur.prev;
    }

    // option이 4라면, cur을 다음 노드로 이동합니다.
    if (option === 4) {
        // cur의 다음 노드가 존재한다면, cur을 cur의 다음 노드로 변경합니다.
        if (cur.next !== null) 
            cur = cur.next;
    }

    // 매 연산이 진행될 때마다 cur의 값을 출력합니다.
    printNode(cur);
});