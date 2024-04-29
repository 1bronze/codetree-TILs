const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력:
const [n, m] = input[0].split(' ').map(Number);

// words 배열에는 입력 순서를 index, 입력값을 value로 저장합니다.
const words = [0].concat(input.slice(1, 1 + n));
const keys = input.slice(1 + n, 1 + n + m);

const stringToNum = new Map();

// 각 문자의 대응되는 숫자를 hashmap에 기록해줍니다.
words.forEach((word, i) => {
    stringToNum.set(word, i);
});

keys.forEach(key => {
    // 입력된 값이 숫자일 때에는 array에 저장한 문자를 출력합니다.
    if ('0' <= key[0] && key[0] <= '9')
        console.log(words[Number(key)]);
    // 입력된 값이 문자일 때에는 hashmap에 기록된 대응되는 숫자를 출력합니다.
    else
        console.log(stringToNum.get(key));
})