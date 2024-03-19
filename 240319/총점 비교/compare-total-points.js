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
students.sort((a, b) => (a.korean + a.english + a.math) - (b.korean + b.english + b.math));

// 출력
for (let i = 0; i < students.length; i++) {
    console.log(`${students[i].name} ${students[i].korean} ${students[i].english} ${students[i].math}`);
}