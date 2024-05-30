const Heap = require('collections/heap');
const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 입력 및 변수 선언
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const pq = new Heap(null, null, (a, b) => b - a); // minHeap

// priority queue를 이용하여 진행합니다.
arr.forEach(elem => {
    // 해당 숫자를 priority queue에 넣어줍니다.
    pq.push(elem);

    if (pq.length >= 3) {
        // 주어진 수가 3개 이상이라면 가장 작은 숫자 3개의 곱을 출력합니다.
        const x = pq.pop();
        const y = pq.pop();
        const z = pq.pop();

        console.log(x * y * z);

        pq.push(x);
        pq.push(y);
        pq.push(z);
    }
    else {
        // 아직 주어진 숫자의 수가 3개가 되지 않으면 -1을 출력합니다.
        console.log(-1);
    }
})