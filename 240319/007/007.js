const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [s_code, m_point, given_time] = input[0].split(' ');

// 객체 생성 대신, 배열을 사용합니다.
const s = [s_code, m_point, parseInt(given_time)];

// 배열 원소들을 각 변수에 대입
const [secret_code, meeting_point, time] = s;

// 출력
console.log(`secret code : ${secret_code}`);
console.log(`meeting point : ${meeting_point}`);
console.log(`time : ${time}`);