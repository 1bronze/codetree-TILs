// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = input[0];
let b = input[1];

// 문자의 아스키코드를 구합니다.
let aNum = a.charCodeAt(0);
let bNum = b.charCodeAt(0);

let str = "";
// 두 아스키코드 값의 합을 출력합니다.
str += aNum + bNum + " ";

// 두 아스키코드 값의 차를 출력합니다.
if (aNum > bNum) {
    str += aNum - bNum;
}
else {
    str += bNum - aNum;
}

console.log(str);