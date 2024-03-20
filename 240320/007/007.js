class Spy {
    constructor(secret_code, meeting_point, time) {
        this.secret_code = secret_code;
        this.meeting_point = meeting_point;
        this.time = time;
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [s_code, m_point, time] = input[0].split(' ');

// 객체 생성
const s = new Spy(s_code, m_point, parseInt(time));

// 출력
console.log(`secret code : ${s.secret_code}`);
console.log(`meeting point : ${s.meeting_point}`);
console.log(`time : ${s.time}`);