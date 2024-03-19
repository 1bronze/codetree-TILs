const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

// 오름차순 정렬
arr.sort((a, b) => a - b);

for (let elem of arr) {
    process.stdout.write(`${elem} `);
}
console.log();

// 내림차순 정렬
arr.sort((a, b) => b - a);

for (let elem of arr) {
    process.stdout.write(`${elem} `);
}
console.log();