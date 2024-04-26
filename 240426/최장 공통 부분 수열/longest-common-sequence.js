const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const UNUSED = -1;

let str1 = input[0];
let str2 = input[1];

const [str1Len, str2Len] = [str1.length, str2.length];

// string의 index가 0부터 시작하기 때문에
// 이를 1부터 시작하기 위해서 앞에 #을 추가해줍니다.
str1 = '#' + str1;
str2 = '#' + str2;

const memo = Array.from(Array(str1Len + 1), () => Array(str2Len + 1).fill(UNUSED));

function findMaxLen(i, j) {
    // 만약 주어진 문자열의 범위가 가능한 범위를 넘어가는 경우
    // 더 이상 매칭을 진행할 수 없으므로, 
    // 해당 상황에서 최장 증가 부분 수열의 길이는 0이 됩니다
    if (i > str1Len || j > str2Len) {
        return 0;
    }

    // 이미 탐색한 적이 있다면 해당 값을 사용해줍니다.
    if (memo[i][j] !== UNUSED) {
        return memo[i][j];
    }

    // Case 1:
    if (str1[i] === str2[j]) {
        memo[i][j] = findMaxLen(i + 1, j + 1) + 1;
    }
    // Case 2:
    else {
        memo[i][j] = Math.max(findMaxLen(i + 1, j), findMaxLen(i, j + 1));
    }

    return memo[i][j];
}

console.log(findMaxLen(1, 1));