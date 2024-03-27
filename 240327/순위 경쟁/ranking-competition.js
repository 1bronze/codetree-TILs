const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력:
const n = Number(input[0]);

// 입력받은 학생 이름과 점수 변동값을 저장합니다.
const changes = input.slice(1).map(e => e.split(" "));

// 현재 A, B의 점수를 나타냅니다.
let [scoreA, scoreB, scoreC] = [0, 0, 0];

// 명예의 전당 상태를 반환합니다.
// 총 7가지 상황이 있습니다.
function getStatus(score1, score2, score3) {
    let returnVal = 0;
    const maxval = Math.max(score1, score2, score3);

    // 다음과 같이 하면 상태들을 서로 겹치지 않고 정리할 수 있습니다.
    // 1. A가 명예의 전당에 올라가 있는 경우 상태에 1을 더합니다.
    if (score1 === maxval) {
        returnVal += 1;
    }

    // 2. B가 명예의 전당에 올라가 있는 경우 상태에 2를 더합니다.
    if (score2 === maxval) {
        returnVal += 2;
    }

    // 3. C가 명예의 전당에 올라가 있는 경우 상태에 4를 더합니다.
    if (score3 === maxval) {
        returnVal += 4;
    }

    return returnVal;
}

let ans = 0;
// 순서대로 점수를 변동시켜보며
// 조합이 몇 번 변동되는지를 조사합니다.
for (const [name, value] of changes) {
    const val = Number(value);
    // 변동이 있는 학생이 A라면
    if (name === 'A') {
        // 현재 점수와, 이후 점수의 상태를 비교했을 때 조합에 변동이 있다면
        // 답을 갱신합니다.
        if (getStatus(scoreA, scoreB, scoreC) !== getStatus(scoreA + val, scoreB, scoreC)) {
            ans += 1;
        }

        // 값을 갱신해줍니다.
        scoreA += val;
    }

    // 변동이 있는 학생이 B라면
    else if (name === 'B') {
        // 현재 점수와, 이후 점수의 상태를 비교했을 때 조합에 변동이 있다면
        // 답을 갱신합니다.
        if (getStatus(scoreA, scoreB, scoreC) !== getStatus(scoreA, scoreB + val, scoreC)) {
            ans += 1;
        }

        // 값을 갱신해줍니다.
        scoreB += val;
    }

    // 변동이 있는 학생이 C라면
    else {
        // 현재 점수와, 이후 점수의 상태를 비교했을 때 조합에 변동이 있다면
        // 답을 갱신합니다.
        if (getStatus(scoreA, scoreB, scoreC) !== getStatus(scoreA, scoreB, scoreC + val)) {
            ans += 1;
        }

        // 값을 갱신해줍니다.
        scoreC += val;
    }
}

console.log(ans);