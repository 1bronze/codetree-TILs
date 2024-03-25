// 변수 선언 및 입력
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let a = input[0];
let b = input[1];

// 문자열 a를 우측으로 한 칸씩 밀어보면서 문자열 b와 같아지는지 확인합니다.
let cnt = 0;
for (let i = 0; i < a.length; i++) {
    // 문자열을 오른쪽으로 한 칸 쉬프트합니다.
    a = a[a.length - 1] + a.slice(0, a.length - 1);
    cnt++;

    // 문자열이 같을 경우 민 횟수를 출력합니다.
    if (a === b) {
        console.log(cnt);
        break;
    }

    // 만약 불가능하다면 -1을 출력합니다.
    if (i === a.length - 1) console.log("-1");
}