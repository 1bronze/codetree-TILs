// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let str = input[0];
let a = input[1];

// 문자열의 길이를 구합니다.
// cnt : 지금까지 출력한 문자의 개수
let len = str.length;
let cnt = 0;

// 문자열의 맨 뒤에서부터 주어진 개수만큼 출력합니다.
let res = "";
for(let i = len - 1; i >= 0; i--) {
    // 주어진 개수만큼 출력했을 경우 for문을 나갑니다.
    if(cnt >= a) break;
    res += str[i];
    cnt++;
}

console.log(res);