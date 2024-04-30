const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const n = Number(input[0]);
const arr1 = input[1].trim().split(' ').map(Number);
const m = Number(input[2]);
const arr2 = input[3].trim().split(' ').map(Number);

// 수열 a의 원소를 전부 HashSet에 넣어줍니다.
const set1 = new Set(arr1);

// 수열 b의 각 원소가 수열 a에 있는지 확인합니다.
arr2.forEach(elem2 => {
    // 찾지 못했다면 0을 출력합니다.
    if (!set1.has(elem2)) {
        console.log(0);
    // 찾았다면 1을 출력합니다.
    } else {
        console.log(1);
    }
});