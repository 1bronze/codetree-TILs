// 변수 선언 및 입력
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n1 = Number(input[0].split(" ")[0]);
const n2 = Number(input[0].split(" ")[1]);
let arr1 = input[1].split(" ").map(Number);
let arr2 = input[2].split(" ").map(Number);

// arr2이 arr1의 연속부분수열인지 확인합니다.
for (let i = 0; i < n1; i++) {
    // arr1의 i번 index부터의 수열이 arr2와 완전히 일치하는지 확인합니다.
    // 즉, arr1[i] == arr2[0], arr1[i+1] == arr2[1]...이 성립하는지 확인합니다.
    // success : arr1의 i번 index부터의 수열이 arr2와 완전히 일치할때만 true, 그 외 false
    let success = true;
    
    for (let j = 0; j < n2; j++) {
        // arr1의 index가 범위 밖으로 벗어날때
        if (i + j >= n1) {
            success = false;
            break;
        }
        
        // arr1과 arr2가 일치하지 않을때
        if (arr1[i + j] !== arr2[j]) {
            success = false;
            break;
        }
    }
    
    // 완전히 일치할 경우, arr2는 arr1의 연속부분수열이 맞습니다.
    // 구현의 편의를 위해 return 0으로 프로그램을 강제 종료하였습니다.
    if (success) {
        console.log("Yes");
        return 0;
    }
}

// 완전히 일치하는 경우가 하나도 없을 경우, arr2는 arr1의 연속부분수열이 아닙니다.
console.log("No");