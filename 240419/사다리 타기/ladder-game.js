const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, m] = input[0].split(' ').map(Number);
const lines = input.slice(1, 1 + m).map(line => {
    const [a, b] = line.split(' ').map(Number);
    return [b, a - 1];
});
let selectedLines = [];

let ans = m;

// 처음 상황과, 선택한 가로줄만 사용했을 때의
// 상황을 시뮬레이션하여
// 둘의 결과가 같은지 확인합니다.
function possible() {
    // Step1. 시작 숫자를 셋팅합니다.
    let num1 = Array.from(Array(n), (_, i) => i);
    let num2 = Array.from(Array(n), (_, i) => i);
  
    // Step2. 위에서부터 순서대로 적혀있는 
    // 가로줄에 대해 양쪽 번호에 해당하는 숫자를 바꿔줍니다.
    lines.forEach(([_, idx]) => {
        [num1[idx], num1[idx + 1]] = [num1[idx + 1], num1[idx]];
    });
    selectedLines.forEach(([_, idx]) => {
        [num2[idx], num2[idx + 1]] = [num2[idx + 1], num2[idx]];
    });
  
    // Step3. 두 상황의 결과가 동일한지 확인합니다.
    for (let i = 0; i < n; i++)
        if (num1[i] !== num2[i])
            return false;
  
    return true;
}

function findMinLines(cnt) {
    if (cnt === m) {
        if (possible()) {
            ans = Math.min(ans, selectedLines.length);
        }
        return;
    }
  
    selectedLines.push(lines[cnt]);
    findMinLines(cnt + 1);
    selectedLines.pop();
  
    findMinLines(cnt + 1);
}

lines.sort((a, b) => a[0] - b[0]);

findMinLines(0);
console.log(ans);