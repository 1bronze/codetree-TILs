const Heap = require("collections/heap");
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력:
const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const pq = new Heap();

// priority queue에 숫자들을 넣어줍니다.
arr.forEach(elem => pq.push(elem));

// m번에 걸쳐서 
// 최댓값을 찾아 1씩 빼주는 것을 반복합니다.
for (let i = 0; i < m; i++) {
    // 최댓값을 찾아 제거합니다.
    let maxVal = pq.pop();
    // 1을 뺀 뒤 다시 넣어줍니다.
    pq.push(--maxVal);
}

console.log(pq.peek());