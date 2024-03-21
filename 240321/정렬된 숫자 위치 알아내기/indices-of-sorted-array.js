class Num {
    constructor(number, index) {
        this.number = number;
        this.index = index;
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
let numbers = [];
for (let i = 0; i < arr.length; i++) {
    numbers.push(new Num(arr[i], i));
}
let answer = Array(n).fill(0);

// Custom Comparator를 활용한 정렬
numbers.sort((a, b) => {
    if (a.number === b.number) return a.index - b.index;
    return a.number - b.number;
});

// 정렬된 숫자들의 원래 인덱스를 활용한 정답 배열 저장
for (let i = 0; i < numbers.length; i++) {
    answer[numbers[i].index] = i + 1; // 인덱스 보정
}

// 출력
console.log(answer.join(" "));