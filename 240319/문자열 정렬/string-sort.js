// 변수 선언 및 입력
const fs = require("fs");
const s = fs.readFileSync(0).toString().trim().split('');

// 각 문자를 원소로 담는 리스트 만들기
const sortedList = s.sort();
// 각 문자를 원소로 갖는 리스트를 하나의 문자열로 합치기
const sortedStr = sortedList.join('');

// 출력
console.log(sortedStr);