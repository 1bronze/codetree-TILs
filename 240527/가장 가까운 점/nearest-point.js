class Pair {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const Heap = require("collections/heap");
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력:
const [n, m] = input[0].split(" ").map(Number);
const points = input.slice(1, 1 + n).map(line => line.split(" ").map(Number));

// priority queue에
// x + y, x, y 순으로
// 우선순위가 되도록 합니다.
const pq = new Heap(null, null, (a, b) => {
    if (a.x + a.y !== b.x + b.y)
        return (b.x + b.y) - (a.x + a.y);
    if (a.x !== b.x)
        return b.x - a.x;
    return b.y - a.y;
});

points.forEach(([x, y]) => {
    pq.push(new Pair(x, y));
})

// m번에 걸쳐 
// 가장 가까운 점을 잡아
// 2씩 더해주는 작업을 합니다.
for (let i = 0; i < m; i++) {
    const p = pq.pop();

    // 그 다음 위치를 추가합니다.
    p.x += 2; p.y += 2;
    pq.push(p);
}

const p = pq.pop();
console.log(p.x, p.y);