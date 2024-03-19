const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const users = [];

for (let i = 0; i < 5; i++) {
    const [code_name, score] = input[i].split(' ');
    users.push([code_name, parseInt(score)]);
}

// 최소 점수를 갖는 유저 찾기
let minIdx = 0;
for (let i = 1; i < 5; i++) {
    const [, minScore] = users[minIdx];
    const [, currUserScore] = users[i];
    
    if (minScore > currUserScore) {
        minIdx = i;
    }
}

// 출력
const [codeName, score] = users[minIdx];
console.log(codeName, score);