const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let idx = 0;
let t = Number(input[idx++]);
let marbles = [0];

const dy = [1, 0, -1, 0];
const dx = [0, 1, 0, -1];

const dirMapper = {
    'U': 0,
    'R': 1,
    'D': 2,
    'L': 3
}

function move() {
    for (let i = 1; i < marbles.length; i++) {
        let marble = marbles[i];

        if (!marble.active) continue;

        marble.y += 0.5 * dy[marble.direction];
        marble.x += 0.5 * dx[marble.direction];
    }
}

function check(curTime) {
    let flag = false;

    for (let first = 1; first < marbles.length; first++) {
        if (!marbles[first].active) continue;

        for (let second = first + 1; second < marbles.length; second++) {
            if (!marbles[second].active) continue;

            if (marbles[first].y === marbles[second].y && marbles[first].x === marbles[second].x) {
                let target;

                if (marbles[first].weight > marbles[second].weight) target = second;
                else if (marbles[first].weight < marbles[second].weight) target = first;
                else target = first;

                marbles[target].active = false;
                flag = true;
            }
        }
    }

    return flag;
}

for (let i = 0; i < t; i++) {
    const n = Number(input[idx++]);
    marbles = [0];

    for (let j = 1; j <= n; j++) {
        let [x, y, w, d] = input[idx++].split(' ');
        [x, y, w] = [x, y, w].map(Number);

        marbles.push({
            index: j, 
            y: y, 
            x: x, 
            weight: w, 
            direction: dirMapper[d], 
            active: true
        });
    }

    let lastCollisionTime = -1;
    let curTime = 0;

    while (true) {
        if (curTime >= 4000) break;
        curTime += 1;

        move();
        if(check(curTime))
            lastCollisionTime = curTime;
    }

    console.log(lastCollisionTime);
}