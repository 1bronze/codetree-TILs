const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, m] = input[0].split(' ').map(Number);
const combination = [];

// 방문한 원소들을 출력해줍니다.
function printCombination() {
    let answer = '';
    combination.forEach(elem => {
        answer += `${elem} `;
    });
    console.log(answer.trim());
}

function findCombination(currNum, cnt) {
    // n개의 숫자를 모두 탐색했으면 더 이상 탐색하지 않습니다.
    if (currNum === n + 1) {
        // 탐색하는 과정에서 m개의 숫자를 뽑은 경우 답을 출력해줍니다.
        if (cnt === m) {
            printCombination();
        }
        return;
    }

    // currNum에 해당하는 숫자를 사용했을 때의 경우를 탐색합니다.
    combination.push(currNum);
    findCombination(currNum + 1, cnt + 1);
    combination.pop();

    // currNum에 해당하는 숫자를 사용하지 않았을 때의 경우를 탐색합니다.
    findCombination(currNum + 1, cnt);
}

findCombination(1, 0);