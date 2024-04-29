const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const n = Number(input[0]);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);
const C = input[3].split(' ').map(Number);
const D = input[4].split(' ').map(Number);

const count = new Map();
let ans = 0;

// A 수열에서 숫자 하나, B 수열에서 숫자 하나를 골랐을 때
// 나올 수 있는 두 숫자의 합들을 hashmap에 기록해줍니다.

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        const sumVal = A[i] + B[j];
        if (count.has(sumVal))
            count.set(sumVal, count.get(sumVal) + 1);
        else 
            count.set(sumVal, 1);
    }
}

// C, D 수열을 순회하며 쌍을 만들어줍니다.
// 앞서 계산한 hashmap을 이용하면
// C, D 수열에서 고른 값으로 A, B와 쌍을 만들 때
// 총합이 0이 되는 쌍의 개수를 쉽게 구할 수 있습니다.
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        const diff = -C[i] - D[j];

        if (count.has(diff))
            ans += count.get(diff);
    }
}

console.log(ans);