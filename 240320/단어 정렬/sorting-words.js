const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
let wordList = [];

for (let i = 1; i <= n; i++) {
    wordList.push(input[i]);
}

// 문자열 정렬
wordList.sort();

// 정렬된 문자열 출력
for (let word of wordList) {
    console.log(word);
}