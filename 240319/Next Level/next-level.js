class User {
    constructor(user_id = "", level = 0) {
        this.user_id = user_id;
        this.level = level;
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 초기값을 이용하여 첫 번째 User 객체를 만들어 줍니다.
const user1 = new User();

// 값을 변경합니다.
user1.user_id = "codetree";
user1.level = 10;

// 변수 선언 및 입력
const [user2_id, level2] = input[0].split(' ');

// 초기값을 이용하여 두 번째 User 객체를 만들어 줍니다.
const user2 = new User();

// 값을 변경합니다.
user2.user_id = user2_id;
user2.level = parseInt(level2);

// 출력
console.log(`user ${user1.user_id} lv ${user1.level}`);
console.log(`user ${user2.user_id} lv ${user2.level}`);