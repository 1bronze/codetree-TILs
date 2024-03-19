const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

class Student {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}

// 변수 선언 및 입력
const n = parseInt(input.shift()); // 첫 번째 입력값을 n으로 할당 후 배열에서 제거
let students = [];
for (let i = 0; i < n; i++) {
    const [name, height, weight] = input[i].split(' ');
    students.push(new Student(name, parseInt(height), parseInt(weight)));
}

// Custom Comparator를 활용한 정렬
students.sort((a, b) => {
    if (a.height !== b.height) return a.height - b.height;
    return b.weight - a.weight;
});

// 출력
for (let i = 0; i < students.length; i++) {
    console.log(`${students[i].name} ${students[i].height} ${students[i].weight}`);
}