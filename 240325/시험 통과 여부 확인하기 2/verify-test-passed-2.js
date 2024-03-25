// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);

let passPeople = 0;

for (let i = 1; i <= n; i++) {
    // 4과목의 점수를 저장할 배열 선언
    let scores = input[i].split(" ").map(Number);
    let sum = 0;

    // 4과목의 점수의 합을 구합니다.
    for (let j = 0; j < 4; j++) {
        sum += scores[j];
    }

    // 평균을 구합니다.
    let avg = sum / 4;

    // 출력
    if (avg >= 60) {
        console.log("pass")
        passPeople++;
    }
    else {
        console.log("fail")
    }
}

// 통과한 사람의 수 출력
console.log(passPeople);