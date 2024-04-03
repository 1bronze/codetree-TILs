class Deque {
    constructor() {  // 빈 덱 하나를 생성합니다.
        this.dq = [];
    }

    pushBack(item) {  // 덱의 맨 뒤에 데이터를 추가합니다.
        this.dq.push(item);
    }

    size() {  // 덱에 들어있는 데이터 수를 반환합니다.
        return this.dq.length;
    }

    popFront() {  // 덱의 맨 앞에 있는 데이터를 반환하고 제거합니다.
        if (this.empty()) {
            throw new Error("Deque is empty");
        }
        return this.dq.shift();
    }

    front() {  // 덱의 맨 앞에 있는 데이터를 제거하지 않고 반환합니다.
        if (this.empty()) {
            throw new Error("Deque is empty");
        }
        return this.dq[0];
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력:
const n = Number(input[0]);
const dq = new Deque();

for (let i = 1; i <= n; i++) {
    dq.pushBack(i);
}

while (dq.size() > 1) {
    dq.popFront();
    dq.pushBack(dq.front());
    dq.popFront();
}

console.log(dq.front());