// 변수 선언 및 입력
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let string = input[0].split(" ")[0];
let q = Number(input[0].split(" ")[1]);

// 문자열의 길이를 구합니다.
let strSize = string.length;

// q개의 질의를 수행합니다.
for (let i = 1; i < q + 1; i++) {
    // 요청을 입력받습니다.
    let qType = Number(input[i]);

    if (qType === 1) {
        // 가장 앞에 있는 문자를 제외한 나머지 문자를 한 칸씩 앞으로 당기고 
        // 가장 앞에 있던 문자를 가장 뒤로 옮깁니다.
        string = string.slice(1) + string.slice(0, 1);
        console.log(string);
    }

    else if (qType === 2) {
        // 가장 뒤에 있는 문자를 제외한 나머지 문자를 한 칸씩 뒤로 밀고 
        // 가장 뒤에 있던 문자를 가장 앞으로 옮깁니다.
        string = string.slice(-1) + string.slice(0, -1);
        console.log(string);
    }

    else {
        // 문자열의 앞부터 순회하며 좌우 대칭 위치에 있는 문자와 swap해줍니다.
        // 단, 문자열의 절반만 순회해줍니다.
        let arr = string.split("");
        for (let i = 0; i < strSize / 2; i++) {
            let temp = arr[i];
            arr[i] = arr[strSize - i - 1];
            arr[strSize - i - 1] = temp;
        }
        string = arr.join("");

        console.log(string);
    }
}