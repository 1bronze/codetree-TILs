const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

class Student {
    constructor(name, korean, english, math) {
        this.name = name;
        this.korean = korean;
        this.english = english;
        this.math = math;
    }
}

// 변수 선언 및 입력
const n = parseInt(input.shift()); // 첫 번째 입력값을 n으로 할당 후 배열에서 제거
let students = [];
for (let i = 0; i < n; i++) {
    const [name, korean, english, math] = input[i].split(' ');
    students.push(new Student(name, parseInt(korean), parseInt(english), parseInt(math)));
}

// Custom Comparator를 활용한 정렬
students.sort((a, b) => {
    if (a.korean !== b.korean) return b.korean - a.korean;
    if (a.english !== b.english) return b.english - a.english;
    return b.math - a.math;
});

// 출력
for (let i = 0; i < students.length; i++) {
    console.log(`${students[i].name} ${students[i].korean} ${students[i].english} ${students[i].math}`);
}