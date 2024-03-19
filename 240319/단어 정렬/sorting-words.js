// 변수 선언 및 입력
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const wordList = input.slice(1);

// 문자열 정렬
wordList.sort();

// 출력
for (let word of wordList) {
    console.log(word);
}