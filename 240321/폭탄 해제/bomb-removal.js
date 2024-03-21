class Bomb {
    constructor(unlock_code, linear_color, time) {
        this.unlock_code = unlock_code;
        this.linear_color = linear_color;
        this.time = time;
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [u_code, l_color, time] = input[0].split(' ');

// 객체 생성
const b = new Bomb(u_code, l_color, Number(time));

// 출력
console.log(`code : ${b.unlock_code}`);
console.log(`color : ${b.linear_color}`);
console.log(`second : ${b.time}`);