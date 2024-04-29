const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const words = input.slice(1, 1 + n);
const count = new Map();

// 입력 문자열을 정렬한 뒤 map에 저장해줍니다.
words.forEach(word => {
    const sortedWord = word.split('').sort().join('');

    if (count.has(sortedWord))
        count.set(sortedWord, count.get(sortedWord) + 1);
    else
        count.set(sortedWord, 1);
})

// map을 순회하며 최대인 경우를 출력해줍니다.
let ans = 0;
for (let [key, value] of count) {
    if (ans < value) {
        ans = value;
    }
}

console.log(ans);