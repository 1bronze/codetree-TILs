// 변수 선언 및 입력
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const a = input[0];
const b = input[1];
let ans = 0;

// 문자열의 길이를 구합니다.
let lenA = a.length;

// 문자열 b가 등장하는 횟수를 구합니다.
for (let i = 0; i < lenA - 1; i++) {
    if (a[i] === b[0] && a[i + 1] === b[1]) {
        ans += 1;
    }
}

// 출력
console.log(ans);