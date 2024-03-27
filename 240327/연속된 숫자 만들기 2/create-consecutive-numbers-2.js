const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [a, b, c] = input[0].split(" ").map(Number);

/*
abc acb
bac bca
cab cba
*/

const left = Math.min(a, b, c);
const right = Math.max(a, b, c);
const mid = a + b + c - left - right;

let ans = 3;

if (mid-left === 1 && right-left === 1) { // Case 1. 이미 일렬로 선 경우
    ans = 0;
} else if (mid-left === 2 || right-left === 2) { // Case 2. 두 명만 인접해 있는 경우
    ans = 1;
} else { // Case 3. 모두 떨어져 있는 경우
    ans = 2;
}

console.log(ans);