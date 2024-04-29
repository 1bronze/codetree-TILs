const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
const guess = input[2].split(' ').map(Number);

const count = new Map();

for (let i = 0; i < n; i++) {
	if (count.has(arr[i]))
		count.set(arr[i], count.get(arr[i]) + 1);
	else 
		count.set(arr[i], 1);
}

let ans = '';
for (let i = 0; i < guess.length; i++) {
	if (count.has(guess[i]))
		ans += `${count.get(guess[i])} `;
	else
		ans += `0 `;
}
	
console.log(ans);