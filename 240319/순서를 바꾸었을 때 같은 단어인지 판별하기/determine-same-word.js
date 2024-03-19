const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const ASCCI_NUM = 128;

const str1 = input[0];
const str2 = input[1];

// 0으로 초기화 된 count 배열을 정의합니다.
let count = new Array(ASCCI_NUM).fill(0);

// 첫 번째 문자열을 순회하며 각 문자의 개수를 세줍니다.
for (let char1 of str1) {
    count[char1.charCodeAt(0)] += 1;
}

// 두 번째 문자열을 순회하며 각 문자의 개수를 세줍니다.
for (let char2 of str2) {
    count[char2.charCodeAt(0)] -= 1;
}

// count 배열을 순회하면서 모든 문자의 개수가 동일한지를 확인합니다.
for (let i = 0; i < ASCCI_NUM; i++) {
    if (count[i] !== 0) {
        console.log("No");
        process.exit(0);
    }
}

console.log("Yes");