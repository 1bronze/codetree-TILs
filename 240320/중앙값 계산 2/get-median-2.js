const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// 출력 결과를 모을 변수입니다.
let result = "";

// 홀수 번째 수를 지날때마다 정렬을 진행한 후 가운데 값을 출력합니다.
for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
        // 오름차순 정렬을 진행합니다.
        const sortedArr = arr.slice(0, i + 1).sort((a, b) => a - b);
        // 가운데 값을 출력합니다.
        result += sortedArr[Math.floor(i / 2)] + " ";
    }
}

console.log(result.trim());