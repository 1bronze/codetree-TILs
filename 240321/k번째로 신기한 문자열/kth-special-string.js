const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
let index = 0;
const [n, k, t] = input[index++].split(' ');

// a가 b로 시작하는지를 확인합니다.
function startsWith(a, b) {
    // b의 길이가 더 길 수는 없습니다.
    if (a.length < b.length) {
        return false;
    }

    // b의 길이만큼 살펴보며, a와 문자열이 완벽히 동일한지 확인합니다.
    return a.substring(0, b.length) === b;
}

const words = [];
for (let i = 0; i < Number(n); i++) {
    const word = input[index++];
    if (startsWith(word, t)) {
        words.push(word);
    }
}

// 정렬을 진행합니다.
words.sort();

console.log(words[Number(k) - 1]);