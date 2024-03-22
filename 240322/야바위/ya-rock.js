const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' ').map(Number));

let maxScore = 0;

// 시작 위치를 전부 가정해 봅니다.
// 그 중 최대 점수를 계산합니다.
for (let i = 1; i <= 3; i++) {
    // 종이컵을 전부 비워줍니다.
    let yabawi = [0, 0, 0, 0];

    // i번째 종이컵에 처음 조약돌을 넣고 시작합니다.
    yabawi[i] = 1;

    let score = 0;
    // 게임을 순서대로 진행합니다.
    commands.forEach(([a, b, c]) => {
        // 두 종이컵을 교환합니다.
        [yabawi[a], yabawi[b]] = [yabawi[b], yabawi[a]];

        // 교환 이후 c번에 돌이 있다면 점수를 얻게 됩니다.
        if (yabawi[c]) {
            score += 1;
        }
    });

    // 최대 점수를 갱신합니다.
    maxScore = Math.max(maxScore, score);
}

console.log(maxScore);