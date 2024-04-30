class Queue {
    constructor() {  // 빈 큐 하나를 생성합니다.
        this.q = [];
        this.head = -1; // head는 큐의 가장 첫 원소의 위치 바로 앞을 가리킵니다.
        this.tail = -1; // tail은 큐의 가장 마지막 원소의 위치를 가리킵니다.
    }

    push(item) {  // 큐의 맨 뒤에 데이터를 추가합니다.
        this.q.push(item);
        this.tail++;
    }

    empty() {  // 큐가 비어있으면 true를 반환합니다.
        return (this.head === this.tail);
    }

    size() {  // 큐에 들어있는 데이터 수를 반환합니다.
        return (this.tail - this.head);
    }

    pop() {  // 큐의 맨 앞에 있는 데이터를 반환하고 제거합니다.
        if (this.empty()) {
            throw new Error("Queue is empty");
        }
        return this.q[++this.head];
    }

    front() {  // 큐의 맨 앞에 있는 데이터를 제거하지 않고 반환합니다.
        if (this.empty()) {
            throw new Error("Queue is empty");
        }
        return this.q[this.head + 1];
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, g] = input[0].split(' ').map(Number);
const nums = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

const invited = new Array(n);
// 각 그룹마다 초대장을 받지 못한 사람들을 관리해줍니다.
const groups = Array.from(Array(g), () => new Set());
// 각 사람이 어떤 그룹에 속하는지를 관리해줍니다.
const peopleGroups = Array.from(Array(n), () => []);

const q = new Queue();
let ans = 0;

for (let i = 0; i < g; i++) {
    for (let j = 1; j < nums[i].length; j++) {
        x = nums[i][j] - 1;
        groups[i].add(x);
        peopleGroups[x].push(i);
    }
}

q.push(0);
invited[0] = true;

while (!q.empty()) {
    const x = q.pop();
    ans += 1;

    // x가 들어있는 그룹에서 x를 지웁니다.
    // hashset에는 그룹에서 초대받지 않은 인원만을 남깁니다.
    for (let gNum of peopleGroups[x]) {
        // 해당 그룹에서 x를 지웁니다.
        groups[gNum].delete(x);
        // 초대받지 않은 인원이 한명밖에 없다면 초대합니다.
        if (groups[gNum].size === 1) {
            const pNum = Array.from(groups[gNum])[0];
            if (!invited[pNum]) {
                invited[pNum] = true;
                q.push(pNum);
            }
        }
    }
}

// 초대장을 받는 인원을 출력합니다.
console.log(ans);