const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const EMPTY = '.';
const START = 'S';
const END = 'E';

const n = Number(input[0]);
const grid = input.slice(1, 1 + n).map(line => line.split(''));
const coins = new Array(10).fill(-1);
const selectedCoins = [];

let ans = 1000000000;

// Step 1. 초기 값 설정
const start = {y: -1, x: -1};
const end = {y: -1, x: -1};

for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
        if (grid[y][x] === START) {
            start.y = y;
            start.x = x;
        } else if (grid[y][x] === END) {
            end.y = y;
            end.x = x;
        } else if (grid[y][x] !== EMPTY) {
            coins[Number(grid[y][x])] = {y: y, x: x};
        }
    }
}

function getDist() {
    let dist = 0;
    // console.log(selectedCoins)

    // Start > 1
    const first = selectedCoins[0];
    dist += Math.abs(start.y - coins[first].y) + Math.abs(start.x - coins[first].x);
    // console.log('Start > 1', dist)

    // 1 > 2
    const second = selectedCoins[1];
    dist += Math.abs(coins[first].y - coins[second].y) + Math.abs(coins[first].x - coins[second].x);
    // console.log('Start > 2', dist)

    // 2 > 3
    const third = selectedCoins[2];
    dist += Math.abs(coins[second].y - coins[third].y) + Math.abs(coins[second].x - coins[third].x);
    // console.log('Start > 3', dist)

    // 3 > End
    dist += Math.abs(coins[third].y - end.y) + Math.abs(coins[third].x - end.x);
    // console.log('Start > End', dist)

    return dist;
}

function select(cnt, cur) {
    if (cnt === 3) {
        ans = Math.min(ans, getDist());
        return;
    }

    for (let i = cur + 1; i <= 9; i++) {
        if (coins[i] === -1) continue;
        selectedCoins.push(Number(grid[coins[i].y][coins[i].x]));
        select(cnt + 1, Number(grid[coins[i].y][coins[i].x]));
        selectedCoins.pop();
    }
}

// Step 2. 백트래킹으로 숫자 3개 선택
select(0, -1);

if (ans === 1000000000) console.log(-1);
else console.log(ans);