const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const MAX_X = 100;

// 변수 선언 및 입력
const n = Number(input[0]);
const points = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

let ans = 100;

// 모든 직선에 대해 전부 시도해 봅니다.
for (let i = 0; i <= MAX_X; i += 2) {
    for (let j = 0; j <= MAX_X; j += 2) {
        // x = i, y = j 를 기준으로 나눴을 때의 m을 구합니다.
        // segment : x = i, y = j를 기준으로 1 ~ 4사분면의 점의 개수
        let segment = [0, 0, 0, 0, 0];

        points.forEach(([x, y]) => {
            // k번째 점이 몇사분면인지 확인하고 해당 위치의 segment를 1 증가시킵니다.
            if (x > i && y > j) {
                segment[1] += 1;
            } else if (x < i && y > j) {
                segment[2] += 1;
            } else if (x < i && y < j) {
                segment[3] += 1;
            } else {
                segment[4] += 1;
            }
        });

        // x = i, y = j로 나눴을때의 m을 구합니다.
        const curM = Math.max(...segment);

        ans = Math.min(ans, curM);
    }
}

console.log(ans);