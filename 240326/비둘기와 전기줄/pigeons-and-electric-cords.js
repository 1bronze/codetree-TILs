const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split('\n');

const maxNum = 10;
const undefinedVal = -1;

// 변수 선언 및 입력:
const n = Number(input[0]);

// 움직인 비둘기 번호와, 움직인 방향을 기록합니다.
const movements = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// 현재 비둘기의 위치를 기록합니다. 
// UNDEFINED이면 아직 미정인 상태로,
// 초기값을 전부 UNDEFINED로 설정합니다.
const pos = new Array(maxNum + 1).fill(undefinedVal);

let moveCnt = 0;
// 입력으로 주어진 움직임에 따라
// 비둘기 위치를 이동시켜줍니다.
movements.forEach(([pigeon, moveDir]) => {
    // 해당 비둘기의 위치가 미정이라면
    if (pos[pigeon] === undefinedVal) {
        // 주어진 첫 번째 위치에서 시작한다고
        // 생각하는게 비둘기의 이동 횟수를
        // 최소로 할 수 있는 방법입니다.
        pos[pigeon] = moveDir;
    }
    // 이미 비둘기의 위치가 정해져 있는데
    // 옮겨간 위치와 다른 위치라면
    else if (pos[pigeon] !== moveDir) {
        // 이동시켜준 뒤,
        pos[pigeon] = moveDir;
        // 답을 갱신합니다.
        moveCnt++;
    }
});

console.log(moveCnt);