const Heap = require("collections/heap");
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 입력 및 변수 선언:
const n = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);
const pq = new Heap();

// priority queue에 숫자들을 넣어줍니다.
arr.forEach(elem => pq.push(elem));

// 마지막 숫자가 남을 때 까지 가장 큰 숫자 2개를 뽑아
// 제거하고 그 차이를 다시 집어넣습니다.
while (pq.length >= 2) {
    // 가장 큰 숫자 2개를 뽑고 제거합니다.
    const x = pq.pop();
    const y = pq.pop();

    // 두 숫자의 차이를 다시 넣어줍니다.
    // 차이가 0인 경우에는 넣지 않습니다.
    const diff = x - y;
    if (diff !== 0)
        pq.push(diff);
}

// 마지막으로 남은 숫자가 정확히 하나라면 그 숫자를 출력합니다.
// 아무 숫자도 남지 않으면 -1을 출력합니다.
if (pq.length === 1)
    console.log(pq.pop());
else
    console.log(-1);