const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let ans = 0;

for (let i = 0; i < n; i++) {
	const a = arr[i];
	
    const m = new Map();
	for (let j = 0; j < i; j++) {
		const b = arr[j];
		const c = k - a - b;

		ans += (m.get(c) || 0);

		if (m.has(b))
			m.set(b, m.get(b) + 1);
		else
			m.set(b, 1);
	}
}

console.log(ans);