const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력:
const n = Number(input[0]);

// 입력받은 학생 이름과 점수 변동값을 저장합니다.
const changes = input.slice(1).map((v) => v.split(" "));

// 현재 A, B의 점수를 나타냅니다.
let scoreA = 0;
let scoreB = 0;

// 명예의 전당 상태를 반환합니다.
// 총 3가지 상황이 있습니다.
function getStatus(score1, score2) {
    // 1. A만 명예의 전당에 올라가 있는 경우
    if (score1 > score2) {
        return 1;
    }
    // 2. B만 명예의 전당에 올라가 있는 경우
    else if (score2 > score1) {
        return 2;
    }
    // 3. A, B 둘 다 명예의 전당에 올라가 있는 경우
    else {
        return 3;
    }
}

let ans = 0;
// 순서대로 점수를 변동시켜보며
// 조합이 몇 번 변동되는지를 조사합니다.
changes.forEach(([name, value]) => {
    value = Number(value);
    // 변동이 있는 학생이 A라면
    if (name === "A") {
        // 현재 점수와, 이후 점수의 상태를 비교했을 때 조합에 변동이 있다면
        // 답을 갱신합니다.
        if (getStatus(scoreA, scoreB) !== getStatus(scoreA + value, scoreB)) {
            ans += 1;
        }

        // 값을 갱신해줍니다.
        scoreA += value;
    }
    // 변동이 있는 학생이 B라면
    else {
        // 현재 점수와, 이후 점수의 상태를 비교했을 때 조합에 변동이 있다면
        // 답을 갱신합니다.
        if (getStatus(scoreA, scoreB) !== getStatus(scoreA, scoreB + value)) {
            ans += 1;
        }

        // 값을 갱신해줍니다.
        scoreB += value;
    }
});

console.log(ans);