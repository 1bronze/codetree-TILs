class Pair {
    constructor(absX, x) {
        this.absX = absX;
        this.x = x;
    }
}

const Heap = require('collections/heap');
const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);
const pq = new Heap(null, null, (a, b) => {
    if(b.absX != a.absX)
            return b.absX - a.absX;  // |x| 기준 오름차순 정렬
        else
            return b.x - a.x;        // |x|가 같다면, x 기준 오름차순 정렬
});

arr.forEach(x => {
    // x가 0이 아니라면
    // 우선순위 큐에 넣어줍니다.
    // 단, 절댓값이 작은 값부터 나오도록
    // (|x|, x) 형태로 넣어줍니다.
    if (x !== 0) {
        pq.push(new Pair(Math.abs(x), x));
    }
    // x가 0이라면
    // 가장 앞에 있는 원소를 출력해주고 제거합니다.
    else {
        // 우선순위 큐가 비어져 있다면 0을 출력하고 넘어갑니다.
        if (pq.length === 0)
            console.log(0);
        else
            console.log(pq.pop().x);
    }    
})