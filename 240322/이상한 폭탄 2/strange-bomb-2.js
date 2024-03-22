const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const nums = input.slice(1, n + 1).map(Number);

let ans = -1;

// 모든 쌍에 대해서 터질 수 있는 폭탄을 찾고
// 그 중 번호가 최대인 값을 찾습니다.
for (let i = 0; i < n; i++) {
	for (let j = i + 1; j < n; j++) {
		// 거리가 k를 초과하는 경우 넘어갑니다.
		if (j - i > k) {
			break;
		}
		
		// 두 폭탄의 번호가 다를 경우 터지지 않습니다.
		if (nums[i] !== nums[j]) {
			continue;
		}
		
		ans = Math.max(ans, nums[i]);
	}
}

console.log(ans);