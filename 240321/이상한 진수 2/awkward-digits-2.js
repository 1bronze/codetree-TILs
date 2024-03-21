const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');


const INT_MIN = Number.MIN_SAFE_INTEGER;

// 변수 선언 및 입력
const binary = input[0].split('').map(Number);
const length = binary.length;

// 각 i번째 자릿수를 바꾸었을 때의 십진수 값을 구해줍니다.
let ans = INT_MIN;
for (let i = 0; i < length; i++) {
    // i번째 자릿수를 바꿉니다.
    binary[i] = 1 - binary[i];
    
    // 십진수로 변환합니다.
    let num = 0;
    for (let j = 0; j < length; j++) {
        num = num * 2 + binary[j];
    }
    
    ans = Math.max(ans, num);
    
    // i번째 자릿수를 원래대로 돌려놓습니다.
    binary[i] = 1 - binary[i];
}

// 출력
console.log(ans);