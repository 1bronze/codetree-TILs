class Queue {
    constructor() {
        this.q = [];
        this.head = -1; // head는 큐의 가장 첫 원소의 위치 바로 앞을 가리킵니다.
        this.tail = -1; // tail은 큐의 가장 마지막 원소의 위치를 가리킵니다.
    }

    push(item) {
        this.q.push(item);
        this.tail++;
    }

    empty() {
        return (this.head === this.tail); // head와 tail이 같은지만으로 큐가 비었는지 여부를 쉽게 파악할 수 있습니다.
    }

    size() {
        return (this.tail - this.head); // head와 tail의 차가 곧 큐의 크기가 됩니다.
    }

    pop() {
        if (this.empty()) {
            throw new Error("Queue is empty");
        }
        return this.q[++this.head];
    }

    front() {
        if (this.empty()) {
            throw new Error("Queue is empty");
        }
        return this.q[this.head + 1];
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