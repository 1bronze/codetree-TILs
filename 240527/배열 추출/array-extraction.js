const Heap = require("collections/heap");
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 입력 및 변수 선언:
const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);
const pq = new Heap();

arr.forEach(x => {
    if (x !== 0) {
        // x가 자연수라면
        // priority queue에 x를 넣어줍니다.
        pq.push(x);
    } 
    
    else {
        // x가 0이라면
        // 최댓값을 찾아 출력한 뒤 제거합니다.
        if (pq.length === 0) {
            console.log(0);
        } else {
            console.log(pq.pop());
        }
    }
});