class Student {
    constructor(name, korean, english, math) {
        this.name = name;
        this.korean = korean;
        this.english = english;
        this.math = math;
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input.shift());
const students = [];
for (let i = 0; i < n; i++) {
    let [name, korean, english, math] = input[i].split(' ');
    students.push(new Student(name, Number(korean), Number(english), Number(math)));
}

// Custom Comparator를 활용한 정렬
students.sort((a, b) => (a.korean + a.english + a.math) - (b.korean + b.english + b.math));

// 출력
students.forEach(student => {
    console.log(`${student.name} ${student.korean} ${student.english} ${student.math}`);
});