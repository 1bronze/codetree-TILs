// 변수 선언 및 입력
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

// 문자열을 구현하여 입력받습니다.
let a = input.split(" ")[0];
let b = input.split(" ")[1];

let idx1 = 0;
let idx2 = 0;

// a의 정수로 변환 가능한 최대 인덱스를 찾습니다.
for (let elem of a) {
    if (elem <= '9' && elem >= '0') {
        idx1 += 1;
    }
    else {
        break;
    }
}

// b의 정수로 변환 가능한 최대 인덱스를 찾습니다.
for (let elem of b) {
    if (elem <= '9' && elem >= '0') {
        idx2 += 1;
    }
    else {
        break;
    }
}

let str1 = a.slice(0, idx1);
let str2 = b.slice(0, idx2);

// 합쳐진 문자열을 숫자로 바꿉니다.
str1 = Number(str1);
str2 = Number(str2);

// 두 숫자의 합을 출력합니다.
console.log(str1 + str2);