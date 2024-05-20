const Heap = require("collections/heap");
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력:
const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

const pq = new Heap();

// priority queue를 이용하여 진행합니다.
arr.forEach(elem => {
    // 0이 아니라면,
    // 해당 숫자를 priority queue에 넣어줍니다.
    if (elem !== 0) {
        pq.push(-elem);
    }
    // 0이라면
    // 가장 작은 값을 출력하고
    // 배열에서 제거합니다.
    else {
        // 배열이 비어있다면 0을 출력합니다.
        if (pq.length === 0)
            console.log(0);
        // 그렇지 않다면 최솟값을 제거합니다.
        else
            console.log(-pq.pop());
    }
});