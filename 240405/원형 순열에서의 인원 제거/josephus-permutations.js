class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Queue {
    constructor() {  // 빈 큐 하나를 생성합니다.
        this.count = 0;
        this.head = null;
        this.tail = null;
    }

    push(item) {  // 큐의 맨 뒤에 데이터를 추가합니다.
        let x = new Node(item);

        if (this.count === 0) {  // 큐가 비어있다면 head와 tail을 모두 x로 설정합니다.
            this.head = x;
            this.tail = x;
        } else {  // 큐에 기존 값이 있다면 tail을 x로 변경합니다.
            this.tail.next = x;
            x.prev = this.tail;
            this.tail = x;
        }
        this.count++;  // 큐의 크기를 1 증가시킵니다.
    }

    empty() {  // 큐가 비어있으면 True를 반환합니다.
        return this.count === 0;
    }

    size() {  // 큐에 들어있는 데이터 수를 반환합니다.
        return this.count;
    }

    pop() {  // 큐의 맨 앞에 있는 데이터를 반환하고 제거합니다.
        if (this.empty()) {
            throw new Error("Queue is empty");
        }
        let x = this.head;
        if (this.count === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = x.next;
            this.head.prev = null;
        }
        this.count--;
        return x.value;
    }

    front() {  // 큐의 맨 앞에 있는 데이터를 제거하지 않고 반환합니다.
        if (this.empty()) {
            throw new Error("Queue is empty");
        }
        return this.head.value;
    }
}


const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const [n, k] = input[0].split(" ").map(Number)
const q = new Queue();

// 큐로 현재 남은 사람들을 관리합니다.
for (let i = 1; i <= n; i++) {
    q.push(i);
}

let answer = "";
while (q.size() > 1) {
    // k번째 사람을 찾습니다.
    // 이 과정에서 이미 탐색한 사람은 맨 뒤로 옮겨줍니다.
    for (let i = 0; i < k - 1; i++) {
        q.push(q.front());
        q.pop();
    }
    // k번째 사람을 제거합니다.
    answer += `${q.front()} `;
    q.pop();
}

// 마지막 사람을 제거합니다.
answer += `${q.front()} `;
console.log(answer);