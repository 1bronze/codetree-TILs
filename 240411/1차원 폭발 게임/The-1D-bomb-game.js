const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, m] = input[0].split(' ').map(Number);
const numbers = input.slice(1, n + 1).map(Number);

// 주어진 시작점에 대하여 부분 수열의 끝 위치를 반환합니다.
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

    for (let currIdx = 0; currIdx < numbers.length; currIdx++) {
        const number = numbers[currIdx];
        // 각 위치마다 그 뒤로 폭탄이 m개 이상 있는지 확인합니다.

        // 이미 터지기로 예정되어있는 폭탄은 패스합니다.
        if (number === 0) {
            continue;
        }
        // currIdx로부터 연속하여 같은 숫자를 갖는 폭탄 중
        // 가장 마지막 위치를 찾아 반환합니다.
        const endIdx = getEndIdxOfExplosion(currIdx, number);

        if (endIdx - currIdx + 1 >= m) {
            // 연속한 숫자의 개수가 m개 이상인 경우 폭탄이 터졌음을 기록해줍니다.
            // 터져야 할 폭탄들에 대해 터졌다는 의미로 0을 채워줍니다.
            for (let idx = currIdx; idx <= endIdx; idx++) {
                numbers[idx] = 0;
            }
            didExplode = true;
        }
    }

    // 폭탄이 터진 이후의 결과를 계산하여 반영해줍니다.
    const filteredNumbers = numbers.filter(num => num > 0);
    numbers.length = 0; // Clear the array
    Array.prototype.push.apply(numbers, filteredNumbers); // Push filtered numbers

    // 더 이상 폭탄이 터지지 않는다면 종료합니다.
    if (!didExplode) {
        break;
    }
}

console.log(numbers.length);
numbers.forEach(number => console.log(number));