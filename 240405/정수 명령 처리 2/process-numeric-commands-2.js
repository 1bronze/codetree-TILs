class Queue {
    constructor() {  // 빈 큐 하나를 생성합니다.
        this.q = [];
        this.head = 0;
        this.tail = -1;
    }

    push(item) {  // 큐의 맨 뒤에 데이터를 추가합니다.
        this.q.push(item);
        this.tail++;
    }

    empty() {  // 큐가 비어있으면 true를 반환합니다.
        return (this.head > this.tail);
    }

    size() {  // 큐에 들어있는 데이터 수를 반환합니다.
        return (this.tail - this.head + 1);
    }

    pop() {  // 큐의 맨 앞에 있는 데이터를 반환하고 제거합니다.
        if (this.empty()) {
            throw new Error("Queue is empty");
        }
        this.head++;
        return this.q[this.head - 1];
    }

    front() {  // 큐의 맨 앞에 있는 데이터를 제거하지 않고 반환합니다.
        if (this.empty()) {
            throw new Error("Queue is empty");
        }
        return this.q[this.head];
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const n = Number(input[0]);
const q = new Queue();

input.slice(1, 1 + n).forEach(command => {
    if (command.startsWith("push")) {
        const x = Number(command.split(" ")[1]);
        q.push(x);
    } else if (command === "pop") {
        console.log(q.pop());
    } else if (command === "size") {
        console.log(q.size());
    } else if (command === "empty") {
        console.log(q.empty() ? 1 : 0);
    } else {
        console.log(q.front());
    }
});