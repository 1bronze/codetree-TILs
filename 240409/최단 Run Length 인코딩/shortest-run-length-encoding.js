const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

function runLengthEncoding(input) {
    // 이 함수는 input 문자열을 Run-Length-Encoding한 결과를 반환합니다.
    let encoded = "";

    // 입력의 첫번째 값을 읽고 초기화합니다.
    let currChar = input[0];
    let numChar = 1;
    for (let i = 1; i < input.length; i++) {
        if (input[i] === currChar)
            numChar++;
        else {
            // 지금까지 세어온 currChar와 numChar를 기록합니다.
            encoded += currChar;
            encoded += numChar.toString();
            // currChar와 numChar를 현재 값으로 초기화합니다.
            currChar = input[i];
            numChar = 1;
        }
    }
    // 마지막 덩어리에 해당하는 currChar와 numChar를 기록합니다.
    encoded += currChar;
    encoded += numChar.toString();
    return encoded;
}

let A = input;

let minLength = runLengthEncoding(A).length; // 초기값은 shift안했을 때의 값
let n = A.length;
let numShift = n - 1; // 0부터 length - 1

while (numShift--) {
    // 문자열 A를 오른쪽으로 1번 shift합니다.
    // 오른쪽부터 채워넣어야하며, 마지막 값은 temp에 저장된 값을 사용해야함을 유의합니다.
    let temp = A[n - 1];
    A = temp + A.substring(0, n - 1);
    let length = runLengthEncoding(A).length;
    if (minLength > length)
        minLength = length;
}

// 출력
console.log(minLength);