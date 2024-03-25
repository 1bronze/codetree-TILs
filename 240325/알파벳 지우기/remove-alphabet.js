// 변수 선언 및 입력
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 문자열을 구현하여 입력받습니다.
let a = input[0];
let b = input[1];

let str1 = "";
let str2 = "";

// a의 정수로 변환 가능한 부분을 다른 문자열로 옮깁니다.
for (let elem of a) {
    if (elem >= '0' && elem <= '9') {
        str1 += elem;
    }
}

// b의 정수로 변환 가능한 부분을 다른 문자열로 옮깁니다.
for (let elem of b) {
    if (elem >= '0' && elem <= '9') {
        str2 += elem;
    }
}

// 합쳐진 문자열을 숫자로 바꿉니다.
str1 = Number(str1);
str2 = Number(str2);

// 두 숫자의 합을 출력합니다.
console.log(str1 + str2);