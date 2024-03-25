// 변수 선언 및 입력
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 정수 n과 q을 입력받습니다.
const n = Number(input[0].split(" ")[0]);
const q = Number(input[0].split(" ")[1]);

// 배열 arr을 입력받습니다.
let arr = input[1].split(" ").map(Number);

// q개의 질의를 수행합니다.
for (let i = 0; i < q; i++) {
    // 몇번째 질의인지 확인합니다.
    let qInfo = input[i + 2].split(" ").map(Number);
    let qType = qInfo[0];

    if (qType === 1) {
        // a를 입력받은 후, a번째 원소를 출력합니다.
        let a = qInfo[1];
        console.log(arr[a - 1]);
    }

    else if (qType === 2) {
        // a를 입력받은 후, 배열에 숫자 a가 있다면 가장 index가 작은 원소가 몇번째인지 출력합니다. 없다면 0을 출력합니다.
        let a = qInfo[1];
        let idx = -1;

        // 가장 index가 작은 원소에 있는 숫자 a를 찾습니다.
        for (let j = 0; j < n; j++) {
            if (arr[j] === a) {
                idx = j;
                break;
            }
        }

        // 숫자 a가 몇번째인지 출력합니다. 없다면 0을 출력합니다.
        console.log(idx + 1);
    }

    else {
        // a, b를 입력받은 후, a번째 원소부터 b번째 원소까지 공백을 사이에 두고 출력합니다.
        let a = qInfo[1];
        let b = qInfo[2];

        let str = "";
        // a번째 원소부터 b번째 원소까지 공백을 사이에 두고 출력합니다.
        for (let j = a - 1; j < b; j++) {
            str += arr[j] + " ";
        }
        console.log(str);
    }
}