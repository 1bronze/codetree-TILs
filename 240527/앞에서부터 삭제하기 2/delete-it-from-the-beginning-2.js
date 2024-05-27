const Heap = require("collections/heap");
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 입력:
const n = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);

// 변수 선언
let sumVal = 0;
let maxAvg = 0;
const pq = new Heap(null, null, (a, b) => b - a);

pq.push(arr[n - 1]);
sumVal += arr[n - 1];

// k가 n - 2일 때부터 1일 때까지 거꾸로 탐색합니다.
// priority queue를 이용하여 진행합니다.
for (let i = n - 2; i > 0; i--) {

    // 앞에서부터 K개를 삭제하고 나면
    // 뒤에 i ~ n - 1 까지의 숫자만이 남습니다.
    pq.push(arr[i]);
    sumVal += arr[i];

    // 남아있는 정수 중 가장 작은 숫자를 찾아
    // 그 숫자를 제외한 평균을 구합니다.
    const minNum = pq.peek();
    const avg = (sumVal - minNum) / (n - i - 1);

    // 평균이 최대가 된다면 정답을 현재 평균으로 갱신해줍니다.
    if (maxAvg < avg) {
        maxAvg = avg;
    }
}

// 평균값의 최대를 출력합니다.
console.log(maxAvg.toFixed(2));