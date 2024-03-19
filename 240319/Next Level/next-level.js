const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 첫 번째 유저 정보 등록
const user1 = ["codetree", 10];

// 변수 선언 및 입력
const [user2_id, user2_level] = input[0].split(' ');

// 두 번째 유저 정보 등록
const user2 = [user2_id, parseInt(user2_level)];

// 출력
[user1, user2].forEach(([user_id, user_level]) => {
    console.log(`user ${user_id} lv ${user_level}`);
});