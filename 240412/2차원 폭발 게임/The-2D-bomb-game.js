const BLANK = -1;
const WILL_EXPLODE = 0;

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, m, k] = input[0].split(' ').map(Number);
let numbers2d = input.slice(1, n + 1).map(line => line.trim().split(' ').map(Number));
let numbers1d = Array(n).fill(0);

// 주어진 시작점에 대하여
// 부분 수열의 끝 위치를 반환합니다.
function getEndIdxOfExplosion(startIdx, currNum) {
    for (let endIdx = startIdx + 1; endIdx < numbers1d.length; endIdx++) {
        if (numbers1d[endIdx] !== currNum) {
            return endIdx - 1;
        }
    }
    return numbers1d.length - 1;
}

function explode() {
    while (true) {
        let didExplode = false;
        let currIdx = 0;
    
        while (currIdx < numbers1d.length) {
            let endIdx = getEndIdxOfExplosion(currIdx, numbers1d[currIdx]);
        
            if (endIdx - currIdx + 1 >= m) {
                // 연속한 숫자의 개수가 m개 이상이면
                // 폭탄이 터질 수 있는 경우 해당 부분 수열을 잘라내고
                // 폭탄이 터졌음을 기록해줍니다.
                numbers1d.splice(currIdx, endIdx - currIdx + 1);
                didExplode = true;
            } else {
                // 주어진 시작 원소에 대하여 폭탄이 터질 수 없는 경우
                // 다음 원소에 대하여 탐색하여 줍니다.
                currIdx = endIdx + 1;
            }
        }

        if (!didExplode) {
            break;
        }
    }
}

// ##################################################################################
// ##			이 줄을 기준으로 위에 있는 함수들에 대한 설명은 1차원 폭발 게임을 참조해주세요     	  ##
// ##################################################################################


// 격자의 특정 열을 일차원 배열에 복사해줍니다.
function copyColumn(col) {
    numbers1d = numbers2d.map(row => row[col]).filter(value => value !== BLANK);
}

// 폭탄이 터진 결과를 격자의 해당 열에 복사해줍니다.
function copyResult(col) {
    for (let row = n - 1; row >= 0; row--) {
        numbers2d[row][col] = numbers1d.length ? numbers1d.pop() : BLANK;
    }
}

// 폭탄이 터지는 과정을 시뮬레이션 합니다.
function simulate() {
    for (let col = 0; col < n; col++) {
        copyColumn(col);
        explode();
        copyResult(col);
    }
}

// 시계 방향으로 90도 회전해줍니다.
function rotate() {
    // 빈 칸으로 초기화 된 임시 격자를 선언합니다.
    let temp2d = Array.from(Array(n), () => Array(n).fill(BLANK));
    
    // 기존 격자를 시계 방향으로 90도 회전했을 때의 결과를
    // 임시 격자에 저장해줍니다.
    for (let i = n - 1; i >= 0; i--) {
        let currIdx = n - 1;
        for (let j = n - 1; j >= 0; j--) {
            if (numbers2d[i][j] !== BLANK) {
                temp2d[currIdx][n - i - 1] = numbers2d[i][j];
                currIdx--;
            }
        }
    }
    
    // 임시 격자에 저장된 값을 기존 격자에 복사합니다.
    numbers2d = temp2d;
}

// 주어진 입력에 따라 폭탄이 터지는 것을 시뮬레이션 합니다.
simulate();
for (let i = 0; i < k; i++) {
    rotate();
    simulate();
}

// 격자를 순회하며 남아 있는 폭탄의 개수를 세줍니다.


let answer = 0;
    
for (let y = 0; y < n; y++)
    for (let x = 0; x < n; x++)
        if (numbers2d[y][x] !== BLANK) answer++;

console.log(answer);