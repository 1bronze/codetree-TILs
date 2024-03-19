const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const str1 = input[0];
const str2 = input[1];

// 각 문자열을 정렬했을 때 두 문자열이 일치하는지 비교합니다.
const sortedStr1 = str1.split('').sort().join('');
const sortedStr2 = str2.split('').sort().join('');
console.log(sortedStr1 === sortedStr2 ? "Yes" : "No");