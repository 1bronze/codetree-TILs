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
        return this.q[this.head++];
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