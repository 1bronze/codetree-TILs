const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

class Student {
    constructor(height, weight, number) {
        this.height = height;
        this.weight = weight;
        this.number = number;
    }
}

// 변수 선언 및 입력
const n = parseInt(input.shift()); // 첫 번째 입력값을 n으로 할당 후 배열에서 제거
let students = [];
for (let i = 0; i < n; i++) {
    const [height, weight] = input[i].split(' ').map(Number);
    students.push(new Student(height, weight, i + 1));
}

// Custom Comparator를 활용한 정렬
students.sort((a, b) => {
    if (a.height !== b.height) return b.height - a.height;
    if (a.weight !== b.weight) return b.weight - a.weight;
    return a.number - b.number;
});

// 출력
for (let i = 0; i < students.length; i++) {
    console.log(`${students[i].height} ${students[i].weight} ${students[i].number}`);
}