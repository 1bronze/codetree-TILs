const SortedMap = require("collections/sorted-map");

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const words = input.slice(1, 1 + n);

const freq = new SortedMap();

words.forEach(word => {
    if (freq.has(word)) {
        freq.set(word, freq.get(word) + 1);
    } else {
        freq.set(word, 1);
    }
});

// 순서대로 데이터를 순회합니다.
freq.forEach((cnt, word) => {
    const ratio = cnt / n * 100;

    // 소숫점 4째짜리까지만 출력합니다.
    console.log(`${word} ${ratio.toFixed(4)}`);
});