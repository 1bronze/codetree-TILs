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
let students = [];
for (let i = 0; i < 5; i++) {
    const [name, height, weight] = input[i].split(' ');
    students.push(new Student(name, parseInt(height), parseFloat(weight)));
}

// Custom Comparator를 활용한 정렬 (이름순으로 정렬)
students.sort((a, b) => a.name.localeCompare(b.name));

console.log("name");
// 이름순으로 정렬한 결과 출력
for (let student of students) {
    console.log(`${student.name} ${student.height} ${student.weight.toFixed(1)}`);
}

console.log();

// Custom Comparator를 활용한 정렬 (키순으로 정렬)
students.sort((a, b) => b.height - a.height);

console.log("height");
// 키순으로 정렬한 결과 출력
for (let student of students) {
    console.log(`${student.name} ${student.height} ${student.weight}`);
}