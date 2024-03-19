class Spy {
    constructor(secretCode, meetingPoint, time) {
        this.secretCode = secretCode;
        this.meetingPoint = meetingPoint;
        this.time = time;
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [sCode, mPoint, time] = input[0].split(' ');

// 객체 생성
const s = new Spy(sCode, mPoint, parseInt(time));

// 출력
console.log(`secret code : ${s.secretCode}`);
console.log(`meeting point : ${s.meetingPoint}`);
console.log(`time : ${s.time}`);