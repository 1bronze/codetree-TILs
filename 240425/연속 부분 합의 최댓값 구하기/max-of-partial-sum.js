const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const INT_MIN = Number.MIN_SAFE_INTEGER;

// 변수 선언 및 입력
const n = Number(input[0]);
const a = [0].concat(input[1].trim().split(' ').map(Number));

// [startIdx, endIdx] 구간 내에서의 
// 최대 연속 부분합을 계산하여 반환합니다.
function findMax(startIdx, endIdx) {
    // 원소가 하나일 때에는 그 원소를 고르는 것 만이 
    // 연속 부분 수열을 만들 수 있는 방법이므로 
    // 해당 원소값을 반환합니다.
    if (startIdx === endIdx) {
        return a[startIdx];
    }
    
    // 최댓값을 구해야 하는 문제이므로
    // 초기값을 INT_MIN으로 설정합니다.
    let maxSum = INT_MIN;

    // 가운데를 기준으로 divide & conquer를 진행합니다.
    const mid = Math.floor((startIdx + endIdx) / 2);

    // Case 1 : 
    // [startIdx, mid] 사이에서 가능한 최대 연속 부분 합을 계산합니다.
    maxSum = Math.max(maxSum, findMax(startIdx, mid));
    
    // Case 2 : 
    // [mid + 1, endIdx] 사이에서 가능한 최대 연속 부분 합을 계산합니다.
    maxSum = Math.max(maxSum, findMax(mid + 1, endIdx));

    // Case 3 :
    // mid, mid + 1번째 원소를 모두 연속 부분 수열에 포함시키는 경우입니다.
    // 이 경우의 최대 연속 부분 합은
    // mid원소를 끝으로 하는 최대 연속 부분 수열과
    // mid + 1번째 원소를 시작으로 하는 최대 연속 부분 수열을 합한 경우입니다.
    let leftMaxSum = INT_MIN, rightMaxSum = INT_MIN, sumOfNums = 0;
    for (let i = mid; i >= startIdx; i--) {
        sumOfNums += a[i];
        leftMaxSum = Math.max(leftMaxSum, sumOfNums);
    }
    
    sumOfNums = 0;
    for (let i = mid + 1; i <= endIdx; i++) {
        sumOfNums += a[i];
        rightMaxSum = Math.max(rightMaxSum, sumOfNums);
    }

    maxSum = Math.max(maxSum, leftMaxSum + rightMaxSum);
    
    // 3가지 경우 중 최대를 반환합니다.
    return maxSum;
}

console.log(findMax(1, n));