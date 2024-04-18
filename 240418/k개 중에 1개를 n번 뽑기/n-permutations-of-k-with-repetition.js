const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [k, n] = input[0].split(' ').map(Number);
let selectedNums = [];

// 선택된 원소들을 출력해줍니다.
function printPermutation() {
    console.log(selectedNums.join(' '));
}

function findPermutations(cnt) {
    // n개를 모두 뽑은 경우 답을 출력해줍니다.
    if (cnt === n) {
        printPermutation();
        return;
    }
    
    // 1부터 k까지의 각 숫자가 뽑혔을 때의 경우를 탐색합니다.
    for (let i = 1; i <= k; i++) {
        selectedNums.push(i);
        findPermutations(cnt + 1);
        selectedNums.pop();
    }
}

findPermutations(0);