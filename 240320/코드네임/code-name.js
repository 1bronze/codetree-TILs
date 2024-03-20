const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const users = [];

for (let i = 0; i < 5; i++) {
    const [code_name, score] = input[i].split(' ');
    users.push([code_name, Number(score)]);
}


// 최소 점수를 갖는 유저 찾기
let min_idx = 0;
for (let i = 1; i < 5; i++) {
    const [, min_score] = users[min_idx];
    const [, curr_user_score] = users[i];
    
    if (min_score > curr_user_score) {
        min_idx = i;
    }
}

// 출력
const [code_name, score] = users[min_idx];
console.log(code_name, score);