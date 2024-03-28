const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = 15;
const arr = input[0].trim().split(' ').map(Number);

// 오름차순으로 정렬을 진행합니다.
arr.sort((a, b) => a - b);

// 오름차순으로 정렬했을 때,
// 가장 작은 숫자는 A,
// 두 번째로 작은 숫자 B,
// 그리고 세 번째로 작은 숫자는 C가 됩니다.
const a = arr[0], b = arr[1], c = arr[2];
// 또한, 가장 큰 숫자는 항상 A + B + C + D가 되므로
// D는 끝 숫자 - A - B - C가 됩니다
const d = arr[arr.length - 1] - a - b - c;

console.log(a, b, c, d);