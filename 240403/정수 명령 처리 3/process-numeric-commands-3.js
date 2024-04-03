class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Deque {
    constructor() {  // 빈 덱 하나를 생성합니다.
        this.count = 0;
        this.head = null;
        this.tail = null;
    }

    pushFront(item) {  // 덱의 맨 앞에 데이터를 추가합니다.
        let x = new Node(item);

        if (this.count === 0) {  // 덱이 비어있다면 head와 tail을 모두 x로 설정합니다.
            this.head = x;
            this.tail = x;
        } else {  // 덱에 기존 값이 있다면 head를 x로 변경합니다.
            this.head.prev = x;
            x.next = this.head;
            this.head = x;
        }
        this.count++;  // 덱의 크기를 1 증가시킵니다.
    }

    pushBack(item) {  // 덱의 맨 뒤에 데이터를 추가합니다.
        let x = new Node(item);

        if (this.count === 0) {  // 덱이 비어있다면 head와 tail을 모두 x로 설정합니다.
            this.head = x;
            this.tail = x;
        } else {  // 덱에 기존 값이 있다면 tail을 x로 변경합니다.
            this.tail.next = x;
            x.prev = this.tail;
            this.tail = x;
        }
        this.count++;  // 덱의 크기를 1 증가시킵니다.
    }

    empty() {  // 덱이 비어있으면 true를 반환합니다.
        return this.count === 0;
    }

    size() {  // 덱에 들어있는 데이터 수를 반환합니다.
        return this.count;
    }

    popFront() {  // 덱의 맨 앞에 있는 데이터를 반환하고 제거합니다.
        if (this.empty()) {
            throw new Error("Deque is empty");
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

    popBack() {  // 덱의 맨 뒤에 있는 데이터를 반환하고 제거합니다.
        if (this.empty()) {
            throw new Error("Deque is empty");
        }
        let x = this.tail;
        if (this.count === 1) {  // 덱에 요소가 하나만 있는 경우
            this.head = null;
            this.tail = null;
        } else {
            this.tail = x.prev;
            this.tail.next = null;
        }
        this.count--;
        return x.value;
    }

    front() {  // 덱의 맨 앞에 있는 데이터를 제거하지 않고 반환합니다.
        if (this.empty()) {
            throw new Error("Deque is empty");
        }
        return this.head.value;
    }

    back() {  // 덱의 맨 뒤에 있는 데이터를 제거하지 않고 반환합니다.
        if (this.empty()) {
            throw new Error("Deque is empty");
        }
        return this.tail.value;
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력:
const n = Number(input[0]);
const dq = new Deque();

input.slice(1, 1 + n).forEach(command => {
    if (command.startsWith("push_front")) {
        const x = Number(command.split(" ")[1]);
        dq.pushFront(x);
    } else if (command.startsWith("push_back")) {
        const x = Number(command.split(" ")[1]);
        dq.pushBack(x);
    } else if (command.startsWith("pop_front")) {
        console.log(dq.popFront());
    } else if (command.startsWith("pop_back")) {
        console.log(dq.popBack());
    } else if (command === "size") {
        console.log(dq.size());
    } else if (command === "empty") {
        console.log(dq.empty() ? 1 : 0);
    } else if (command === "front") {
        console.log(dq.front());
    } else {
        console.log(dq.back());
    }
});