// Convert this python code to javascript
// you must use CamelCase for class name and method name
// also you must use const and let instead of var
// you should use console.log() to print the result
// you should contain origin comment in converted code
//
// l = DoublyLinkedList()   # 정수를 관리할 list를 선언합니다. => 빈 연결리스트
// l.push_front(3)          # 맨 앞에 3을 추가합니다.
// l.push_front(5)          # 맨 앞에 5를 추가합니다.
// print(l.front())         # 맨 앞에 적혀있는 숫자인 5가 출력됩니다.
// print(l.back())          # 맨 뒤에 적혀있는 숫자인 3이 출력됩니다.
// l.push_back(9)           # 맨 뒤에 9를 추가합니다.
// print(l.back())          # 맨 뒤에 적혀있는 숫자인 9가 출력됩니다.
// l.pop_front()            # 맨 앞 숫자(5)를 제거합니다.
// print(l.front())         # 맨 앞에 적혀있는 숫자인 3이 출력됩니다.
// print(l.size())          # 원소의 개수를 출력합니다 => 2

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

// 이중 연결 리스트 클래스를 만들어줍니다.
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.nodeNum = 0;
    }

    pushFront(newData) { // 원소를 첫 번째 위치에 넣어줍니다.
        const newNode = new Node(newData); // 새로운 노드를 만들어줍니다.
        newNode.next = this.head; // 새로운 노드의 next 값을 head로 바꿔줍니다.

        if (this.head != null) { // 기존 리스트가 비어있지 않았다면
            this.head.prev = newNode; // 이전 head의 prev값을 바꾼 뒤
            this.head = newNode; // head값을 변경해줍니다.
        } else { // 기존 리스트가 비어있었다면
            this.head = newNode; // head, tail을 새로 설정해줍니다.
            this.tail = newNode;
        }
        newNode.prev = null;

        this.nodeNum += 1;
    }

    pushBack(newData) { // 원소를 맨 끝 위치에 넣어줍니다.
        const newNode = new Node(newData); // 새로운 노드를 만들어줍니다.
        newNode.prev = this.tail; // 새로운 노드의 prev 값을 tail로 바꿔줍니다.

        if (this.tail != null) { // 기존 리스트가 비어있지 않았다면
            this.tail.next = newNode; // 이전 tail의 next값을 바꾼 뒤
            this.tail = newNode; // tail 값을 변경해줍니다.
        } else {
            this.head = newNode; // head, tail을 새로 설정해줍니다.
            this.tail = newNode;
        }
        newNode.next = null;

        this.nodeNum += 1;
    }

    popFront() { // 첫 번째 수를 빼면서 동시에 그 수를 반환합니다.
        if (this.head == null) {
            console.log("List is empty");
        } else if (this.head.next == null) { // 노드가 하나 남았다면
            const temp = this.head;

            this.head = null; // head값을 None으로 바꿔주고
            this.tail = null; // tail값도 None으로 바꿔주고
            this.nodeNum = 0; // 원소의 수도 0개로 변경해줍니다.

            return temp.data;
        } else {
            const temp = this.head;
            temp.next.prev = null; // 새로 head가 될 노드의 prev값을 지워줍니다.
            this.head = temp.next; // head값을 새로 갱신해주고
            temp.next = null; // 이전 head의 next 값을 지워줍니다.

            this.nodeNum -= 1;
            return temp.data;
        }
    }

    popBack() { // 맨 끝에 있는 수를 빼면서 동시에 그 수를 반환합니다.
        if (this.tail == null) {
            console.log("List is empty");
        } else if (this.tail.prev == null) { // 노드가 하나 남았다면
            const temp = this.tail;

            this.head = null; // head값을 None으로 바꿔주고
            this.tail = null; // tail값도 None으로 바꿔주고
            this.nodeNum = 0; // 원소의 수도 0개로 변경해줍니다.

            return temp.data;
        } else {
            const temp = this.tail;
            temp.prev.next = null; // 새로 tail이 될 노드의 next값을 지워줍니다.
            this.tail = temp.prev; // tail값을 새로 갱신해주고
            temp.prev = null; // 이전 tail의 prev 값을 지워줍니다.

            this.nodeNum -= 1;
            return temp.data;
        }
    }

    size() {
        return this.nodeNum;
    }

    empty() {
        return this.nodeNum == 0;
    }

    front() { // 첫 번째 수를 반환합니다.
        if (this.head == null) {
            console.log("List is empty");
        } else {
            return this.head.data;
        }
    }

    back() { // 맨 끝에 있는 수를 반환합니다.
        if (this.tail == null) {
            console.log("List is empty");
        } else {
            return this.tail.data;
        }
    }
}

const fs = require("fs");
const input = fs.readFileSync("0").toString().trim().split("\n");

// 변수 선언 및 입력:
const n = Number(input[0]);
const l = new DoublyLinkedList();

for (let i = 1; i < n + 1; i++) {
    const command = input[i];
    if (command.startsWith("push_front")) {
        const x = Number(command.split(" ")[1]);
        l.pushFront(x);
    } else if (command.startsWith("push_back")) {
        const x = Number(command.split(" ")[1]);
        l.pushBack(x);
    } else if (command == "pop_front") {
        console.log(l.popFront());
    } else if (command == "pop_back") {
        console.log(l.popBack());
    } else if (command == "size") {
        console.log(l.size());
    } else if (command == "empty") {
        console.log(l.empty() ? 1 : 0);
    } else if (command == "front") {
        console.log(l.front());
    } else {
        console.log(l.back());
    }
}