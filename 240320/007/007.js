const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [s_code, m_point, given_time] = input[0].split(' ');

// tuple 생성
const s = [s_code, m_point, Number(given_time)];

// tuple 원소들을 각 변수에 대입
const [secret_code, meeting_point, time] = s;