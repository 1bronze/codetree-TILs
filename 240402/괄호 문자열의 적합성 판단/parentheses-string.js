class Stack {
    constructor() {  // 빈 스택 하나를 생성합니다.
        this.items = [];
    }

    push(item) {  // 스택에 데이터를 추가합니다.
        this.items.push(item);
    }

    empty() {  // 스택이 비어있으면 True를 반환합니다.
        return this.items.length === 0;
    }

    size() {  // 스택에 있는 데이터 수를 반환합니다.
        return this.items.length;
    }

    pop() {  // 스택의 가장 위에 있는 데이터를 반환하고 제거합니다.
        if (this.empty()) {
            throw new Error("Stack is empty");
        }

        return this.items.pop();
    }

    top() {  // 스택의 가장 위에 있는 데이터를 제거하지 않고 반환합니다.
        if (this.empty()) {
            throw new Error("Stack is empty");
        }

        return this.items[this.items.length - 1];
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n')[0];
const s = new Stack();

for (let char of input) {
    if (char === '(') {
        s.push('(');
    } else {
        if (s.empty()) {
            console.log("No");
            process.exit(0);
        }

        s.pop();
    }
}

if (s.empty()) {
    console.log("Yes");
} else {
    console.log("No");
}