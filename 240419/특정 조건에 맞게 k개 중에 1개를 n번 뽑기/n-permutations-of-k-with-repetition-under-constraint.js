const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [k, n] = input[0].split(' ').map(Number);
const selectedNums = [];

// 선택된 원소들을 출력해줍니다.
function printPermutation() {
    console.log(selectedNums.join(' '));
}

function findDuplicatedPermutations(cnt) {
    // n개를 모두 뽑은 경우 답을 출력해줍니다.
    if (cnt === n) {
        printPermutation();
        return;
    }
    
    for (let i = 1; i <= k; i++) {
        if (cnt >= 2 && i === selectedNums[selectedNums.length - 1] && i === selectedNums[selectedNums.length - 2]) {
            continue;
        } else {
            selectedNums.push(i);
            findDuplicatedPermutations(cnt + 1);
            selectedNums.pop();
        }
    }
}

findDuplicatedPermutations(0);