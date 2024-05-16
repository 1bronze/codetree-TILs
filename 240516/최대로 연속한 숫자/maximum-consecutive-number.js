const SortedSet = require("collections/sorted-set");
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력:
const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const sNum = new SortedSet();
const sLen = new SortedSet();

// sNum : 지워진 숫자 모음(코드의 깔끔한 처리를 위해
// 범위 밖의 숫자를 treeset에 추가했습니다)
sNum.push(-1);
sNum.push(n + 1);
// sLen : (-구간의 길이, 시작 숫자, 끝 숫자)
// 길이가 긴 구간부터 나오도록 구간의 길이에 -를 붙여서 넣어줍니다.
sLen.push([-(n + 1), -1, n + 1]);

const result = [];
arr.forEach(y => {
    // 입력받은 숫자를 treeset에 추가합니다.
    sNum.push(y);

    // 입력받은 숫자 y를 기준으로
    // 그 바로 뒤의 숫자를 z, 바로 앞의 숫자를 x라고 두었습니다.
    const z = sNum.findLeastGreaterThan(y).value;
    const x = sNum.findGreatestLessThan(y).value;

    // 구간의 길이는 (x ~ z) 구간이 사라지며,
    // (x ~ y) 구간과 (y ~ z) 구간이 새로 생겨납니다.
    sLen.delete([-(z - x - 1), x, z]);
    sLen.push([-(y - x - 1), x, y]);
    sLen.push([-(z - y - 1), y, z]);

    // y가 추가된 후로 구간 중 가장 긴 구간을 찾아 출력합니다.
    const [bestLength, , ] = sLen.findLeast().value;
    result.push(-bestLength);
});

console.log(result.join("\n"));