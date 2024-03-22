const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [x, y] = input[0].split(' ').map(Number);
let ans = 0;

// 각 정수에 대해 
// 팰린드롬 수인지 아닌지 여부를 판단합니다.
for (let i = x; i <= y; i++) {
    // 정수 형태를 문자열 배열로 바꿉니다.
    const strI = String(i);

    // 펠린드롬 수가 되기 위해서는,
    // 거꾸로 읽어도 똑같은 수여야 합니다.
    if (strI === strI.split('').reverse().join('')) {
        ans += 1;
    }
}

console.log(ans);