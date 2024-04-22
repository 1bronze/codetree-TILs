const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, m] = input[0].split(' ').map(Number);
const combination = [];

// 방문한 원소들을 출력해줍니다.
function printCombination() {
    console.log(combination.join(' '));
}

// 지금까지 뽑은 개수와 마지막으로 뽑힌 숫자를 추적하여
// 그 다음에 뽑힐 수 있는 원소의 후보를 정합니다.
function findCombination(cnt, lastNum) {
    // m개를 모두 뽑은 경우 답을 출력해줍니다.
    if (cnt === m) {
        printCombination();
        return;
    }

    // 뽑을 수 있는 원소의 후보들을 탐색합니다.
    for (let i = lastNum + 1; i <= n; i++) {
        combination.push(i);
        findCombination(cnt + 1, i);
        combination.pop();
    }
}

// 가능한 범위를 순회하며 해당 숫자가 
// 조합의 첫번째 숫자일 때를 탐색합니다.
for (let i = 1; i <= n; i++) {
    combination.push(i);
    findCombination(1, i);
    combination.pop();
}