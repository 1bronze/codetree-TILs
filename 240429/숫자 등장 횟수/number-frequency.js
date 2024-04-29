const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력:
const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
const queries = input[2].split(' ').map(Number);

const freq = new Map();

// 각 숫자가 몇 번씩 나왔는지를
// hashmap에 기록해줍니다.
arr.forEach(elem => {
    freq.set(elem, (freq.get(elem) || 0) + 1);
});

// m개의 질의에 대해
// 몇 번씩 나왔는지를 출력합니다.
let ans = '';
queries.forEach(elem => {
	ans += `${freq.get(elem) || 0} `;
});

console.log(ans);