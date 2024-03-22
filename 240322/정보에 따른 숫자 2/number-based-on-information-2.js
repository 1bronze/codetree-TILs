const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [t, a, b] = input[0].split(' ').map(Number);
const snData = input.slice(1, 1 + t).map(line => line.split(' '));

let ans = 0;

// 각 숫자에 대해
// s에 더 가까운지 n에 더 가까운지 판단합니다.
for (let i = a; i <= b; i++) {
    // 숫자 i에서부터 s로부터의 거리와
    // n으로부터의 거리를 확인합니다.
    let distanceS = Number.MAX_SAFE_INTEGER;
    let distanceN = Number.MAX_SAFE_INTEGER;

    snData.forEach(([p, q]) => {
        q = Number(q);

        if (p === 'S') {
            distanceS = Math.min(distanceS, Math.abs(q - i));
        } else {
            distanceN = Math.min(distanceN, Math.abs(q - i));
        }
    });

    if (distanceS <= distanceN) {
        ans += 1;
    }
}

console.log(ans);