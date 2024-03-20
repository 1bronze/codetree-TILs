const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

// 변수 선언 및 입력
// 예: banana
const s = input;

// 각 문자를 원소로 담는 배열 만들기
// 예: ['b', 'a', 'n', 'a', 'n', 'a']
const sortedList = s.split('').sort();

// 각 문자를 원소로 갖는 배열을 하나의 문자열로 합치기
// 예: 'aaabnn'
const sortedStr = sortedList.join('');

// 출력
console.log(sortedStr);