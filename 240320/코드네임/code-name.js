class User {
    constructor(code_name, score) {
        this.code_name = code_name;
        this.score = score;
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const users = [];

for (let i = 0; i < 5; i++) {
    const [code_name, score] = input[i].split(' ');
    users.push(new User(code_name, parseInt(score)));
}


// 최소 점수를 갖는 유저 찾기
let min_idx = 0;
for (let i = 1; i < 5; i++) {
    if (users[min_idx].score > users[i].score) {
        min_idx = i;
    }
}

// 출력
console.log(users[min_idx].code_name, users[min_idx].score);