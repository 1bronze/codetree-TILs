const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const n = Number(input[0]);
const arr1 = input[1].trim().split(' ').map(Number);
const m = Number(input[2]);
const arr2 = input[3].trim().split(' ').map(Number);

// 첫 번째 수열의 원소를 전부 HashSet에 넣어줍니다.
const set1 = new Set(arr1);

// 두 번째 수열의 각 원소가 첫 번째 수열에 들어있는지를 확인합니다.
let answer = "";
arr2.forEach(elem2 => {
    // 찾지 못했다면 0을 출력합니다.
    if (!set1.has(elem2)) {
        answer += "0 ";
    // 찾았다면 1을 출력합니다.
    } else {
        answer += "1 ";
    }
});
console.log(answer);