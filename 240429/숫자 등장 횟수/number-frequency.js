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
	// 이미 나와있던 숫자라면 1을 더해줍니다.
	if (freq.has(elem))
		freq.set(elem, freq.get(elem) + 1);
	// 처음 나온 숫자라면 1을 직접 적어줘야 합니다.
	else
		freq.set(elem, 1);
});

// m개의 질의에 대해
// 몇 번씩 나왔는지를 출력합니다.
let ans = '';
queries.forEach(elem => {
	// 나온 적이 있는 숫자라면, 빈도수를 출력해줍니다.
	if (freq.has(elem))
		ans += `${freq.get(elem)} `;
	// 처음 나온 숫자라면 0을 출력합니다.
	else
		ans += `0 `;
});

console.log(ans);