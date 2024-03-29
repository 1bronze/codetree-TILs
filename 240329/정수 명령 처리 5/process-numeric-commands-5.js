const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);

// 동적 배열 선언
const v = [];

for (let i = 1; i <= n; i++) {
    const commandLine = input[i];

    if (commandLine.startsWith("push_back")) {
        const [, num] = commandLine.split(' ');
        v.push(Number(num));
    } else if (commandLine.startsWith("pop_back")) {
        v.pop();
    } else if (commandLine.startsWith("size")) {
        console.log(v.length);
    } else {
        const [, index] = commandLine.split(' ');
        console.log(v[Number(index) - 1]);
    }
}