const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const MAX_A = 1000000;

// 변수 선언 및 입력
let index = 0;
const [n, k] = input[index++].split(' ').map(Number);

const num = [];
for (let i = 0; i < n; i++) {
    num.push(Number(input[index++]));
}

const bomb = new Array(MAX_A + 1).fill(0);
const explode = new Array(n).fill(false);

let maxVal = 1;
let maxIdx = 0;

// 모든 쌍에 대해서 터질 수 있는 폭탄을 찾고
// 터진 폭탄의 개수를 저장합니다.
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        // 거리가 k를 초과하는 경우 넘어갑니다.
        if (j - i > k) {
            break;
        }

        // 두 폭탄의 번호가 다를 경우 터지지 않습니다.
        if (num[i] !== num[j]) {
            continue;
        }

        // 두 폭탄의 번호가 같을 경우 폭탄은 터집니다.
        // 해당 폭탄이 이미 터진 폭탄인지 확인하고,
        // 아직 터지지 않은 폭탄이라면 터진 폭탄의 개수를 갱신합니다.
        if (!explode[i]) {
            bomb[num[i]] += 1;
            explode[i] = true;
        }

        if (!explode[j]) {
            bomb[num[j]] += 1;
            explode[j] = true;
        }
    }
}

for (let i = 0; i <= MAX_A; i++) {
    if (maxVal <= bomb[i]) {
        maxVal = bomb[i];
        maxIdx = i;
    }
}

console.log(maxIdx);