const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력:
let A = input[0];

function runLengthEncoding(target) {
    // 이 함수는 input 문자열을 Run-Length-Encoding한 결과를 반환합니다.
    let encoded = "";

    // 입력의 첫번째 값을 읽고 초기화합니다.
    let currChar = target[0];
    let numChar = 1;
    for (const targetChar of target.substring(1)) {
        if (targetChar === currChar) {
            numChar += 1;
        } else {
            // 지금까지 세어온 currChar와 numChar를 기록합니다.
            encoded += currChar;
            encoded += String(numChar);
    
            // currChar와 numChar를 현재 값으로 초기화합니다.
            currChar = targetChar;
            numChar = 1;
        }
    }
    
    // 마지막 덩어리에 해당하는 currChar와 numChar를 기록합니다.
    encoded += currChar;
    encoded += String(numChar);
    return encoded;
}

let minLength = runLengthEncoding(A).length; // 초기값은 shift안했을 때의 값
const n = A.length;
let numShift = n - 1; // 0부터 length - 1

while (numShift) {
    // 문자열 A를 오른쪽으로 1번 shift합니다.
    A = A.slice(-1) + A.slice(0, -1);
    
    const length = runLengthEncoding(A).length;
    if (minLength > length) {
        minLength = length;
    }
    
    numShift -= 1;
}

// 출력
console.log(minLength);