const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const numbers = input.slice(1, 1 + n).map(Number);

// 주어진 시작점에 대하여
// 부분 수열의 끝 위치를 반환합니다.
function getEndIdxOfExplosion(startIdx, currNum) {
    for (let endIdx = startIdx + 1; endIdx < numbers.length; endIdx++) {
        if (numbers[endIdx] !== currNum) {
            return endIdx - 1;
        }
    }
    return numbers.length - 1;
}

while (true) {
    let didExplode = false;
    let currIdx = 0;

    while (currIdx < numbers.length) {
        let endIdx = getEndIdxOfExplosion(currIdx, numbers[currIdx]);

        if (endIdx - currIdx + 1 >= m) {
            // 연속한 숫자의 개수가 m개 이상이면
            // 폭탄이 터질 수 있는 경우 해당 부분 수열을 잘라내고
            // 폭탄이 터졌음을 기록해줍니다.
            numbers.splice(currIdx, endIdx - currIdx + 1);
            didExplode = true;
        } else {
            // 주어진 시작 원소에 대하여 폭탄이 터질 수 없는 경우
            // 다음 원소에 대하여 탐색하여 줍니다.
            currIdx += 1;
        }
    }

    if (!didExplode) {
        break;
    }
}

console.log(numbers.length);
numbers.forEach(number => {
    console.log(number);
});