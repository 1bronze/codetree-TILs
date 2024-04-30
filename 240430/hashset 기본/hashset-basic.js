const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const commands = input.slice(1, 1 + n).map(line => line.split(' '));

const s = new Set();

commands.forEach(command => {
    if (command[0] === "add") {
        s.add(Number(command[1]));
    }
    else if (command[0] === "remove") {
        s.delete(Number(command[1]));
    }
    else {
        if (s.has(Number(command[1])))
            console.log("true");
        else
            console.log("false");
    }
});