// 변수 선언 및 입력
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

// 문자열을 구현하여 입력받습니다.
let a = input.split(" ")[0];
let b = input.split(" ")[1];

// str1에는 a, b 순으로 문자열을 붙입니다.
let str1 = a + b;

// str2에는 b, a 순으로 문자열을 붙입니다.
let str2 = b + a;

// 합쳐진 문자열을 숫자로 바꿉니다.
let str1Number = Number(str1);
let str2Number = Number(str2);

// 두 숫자의 합을 출력합니다.
console.log(str1Number + str2Number);