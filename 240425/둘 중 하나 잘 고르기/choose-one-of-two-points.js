const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const cards = input.slice(1, 1 + 2 * n).map(line => line.split(' ').map(Number));

// red - blue값을 내림차순으로 정렬합니다.
cards.sort((a, b) => (b[0] - b[1]) - (a[0] - a[1]));

let maxSum = 0;

// 앞 n개에서는 빨간색 카드를 선택합니다.
for(let i = 0; i < n; i++)
    maxSum += cards[i][0];

// 뒤 n개에서는 파란색 카드를 선택합니다.
for(let i = n; i < 2 * n; i++)
    maxSum += cards[i][1];

console.log(maxSum);