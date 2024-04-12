const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
let [y, x] = input[1].split(' ').map(n => Number(n) - 1);
let grid = input.slice(2, 2 + n).map(line => line.trim().split(''));

const WALL = '#';
const BLANK = '.';

const EAST = 0;
const SOUTH = 1;
const WEST = 2;
const NORTH = 3;

let dir = EAST;
let time = 0;
let status = new Array(n).fill(0).map(() => new Array(n).fill(0).map(() => new Array(4).fill(false)));

function turnRight() {
    dir = (dir + 1) % 4;
}

function turnLeft() {
    dir = (dir + 3) % 4;
}

function getLeftDir() {
    return (dir + 3) % 4;
}

function getFrontDir() {
    return dir;
}

function getRightDir() {
    return (dir + 1) % 4;
}

function getBackDir() {
    return (dir + 2) % 4;
}

function inRange(nextY, nextX) {
    return (nextY >= 0 && nextY < n && nextX >= 0 && nextX < n);
}

function isBlank(nextDir) {

    if (nextDir === EAST) 
        return (!inRange(y, x + 1) || grid[y][x + 1] === BLANK);
    else if (nextDir === SOUTH)
        return (!inRange(y + 1, x) || grid[y + 1][x] === BLANK);
    else if (nextDir === WEST)
        return (!inRange(y, x - 1) || grid[y][x - 1] === BLANK);
    else
        return (!inRange(y - 1, x) || grid[y - 1][x] === BLANK);
}

function go() {
    if (dir === EAST) x++;
    else if (dir === SOUTH) y++;
    else if (dir === WEST) x--;
    else y--;

    time++;
}

while (true) {
    if (status[y][x][dir]) {
        console.log(-1);
        break;
    } else {
        status[y][x][dir] = true;
    }

    if (isBlank(getRightDir())) {
        turnRight();
        go();
    } else if (isBlank(getFrontDir())) {
        go();
    } else if (isBlank(getLeftDir())) {
        turnLeft();
        go();
    } else if (isBlank(getBackDir())) {
        turnLeft();
        turnLeft();
        go();
    } else {
        console.log(-1);
        break;
    }

    if (!inRange(y, x)) {
        console.log(time);
        break;
    }
}

/*
while(1) {
    if (오른쪽이 뚫려있다) {
        시계방향으로 90' 회전한다.
        한칸 앞으로 간다.
        시간을 +1한다.
    } else if (앞쪽이 뚫려있다) {
        한칸 앞으로 간다.
        시간을 +1한다.
    } else if (왼쪽이 뚫려있다) {
        반시계방향으로 90' 회전한다.
        한칸 앞으로 간다.
        시간을 +1한다.
    } else if (뒷쪽이 뚫려있다) {
        반시계방향으로 90' 회전한다.
        반시계방향으로 90' 회전한다.
        한칸 앞으로 간다.
        시간을 +1한다.
    } else {
        -1을 출력한다.
        프로그램을 종료한다.
    }

    if (범위 밖이다) {
        시간을 출력한다.
        프로그램을 종료한다.
    }
}
*/