const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);

// 시작 위치를 기록합니다.
let x = 0, y = 0;

// 동, 서, 남, 북 순으로 dx, dy를 정의합니다.
const dx = [1, -1, 0, 0], dy = [0, 0, -1, 1];

// 답을 저장합니다.
let ans = -1;

// 지금까지 걸린 시간을 기록합니다.
let elapsedTime = 0;


// dir 방향으로 dist 만큼 이동하는 함수입니다.
// 만약 시작지에 도달하면 true를 반환합니다.
function move(moveDir, dist) {
    for (let i = 0; i < dist; i++) {
        x += dx[moveDir];
        y += dy[moveDir];
        
        // 이동한 시간을 기록합니다.
        elapsedTime += 1;

        // 시작지로 다시 돌아오면,
        // 답을 갱신해줍니다.
        if (x === 0 && y === 0) {
            ans = elapsedTime;
            return true;
        }
    }
    
    return false;
}

// 움직이는 것을 진행합니다.
for (let i = 1; i <= n; i++) {
    let [cDir, dist] = input[i].split(' ');
    dist = Number(dist);
    
    // 각 방향에 맞는 번호를 붙여줍니다.
    let moveDir;
    if (cDir === 'E') {
        moveDir = 0;
    } else if (cDir === 'W') {
        moveDir = 1;
    } else if (cDir === 'S') {
        moveDir = 2;
    } else {
        moveDir = 3;
    }

    // 주어진 방향대로 dist 만큼 위치를 이동해봅니다.
    const done = move(moveDir, dist);

    // 시작 위치에 도달했다면, 종료합니다.
    if (done) {
        break;
    }
}

console.log(ans);