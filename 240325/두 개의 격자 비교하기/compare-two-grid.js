// 변수 선언 및 입력
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0].split(" ")[0]);
const m = Number(input[0].split(" ")[1]);

// 2차원 배열을 구현합니다.
let arr1 = Array(n).fill(0).map(() => Array(m).fill(0));
let arr2 = Array(n).fill(0).map(() => Array(m).fill(0));
let arr3 = Array(n).fill(0).map(() => Array(m).fill(0));

// 첫 번째 배열의 입력을 받습니다.
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        arr1[i] = input[i + 1].split(" ").map(Number);
    }
}

// 두 번째 배열의 입력을 받습니다.
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        arr2[i] = input[i + 1 + n].split(" ").map(Number);
    }
}

// 두 배열의 같음 여부를 새로운 배열에 담습니다.
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (arr1[i][j] === arr2[i][j]) {
            arr3[i][j] = 0;
        }
        else {
            arr3[i][j] = 1;
        }
    }
}

// 새로운 배열을 출력합니다.
for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < m; j++) {
        str += arr3[i][j] + " ";
    }
    console.log(str);
}