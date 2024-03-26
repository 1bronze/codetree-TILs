const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const [x1, y1, x2, y2] = input[0].split(' ').map(Number);
const [a1, b1, a2, b2] = input[1].split(' ').map(Number);

const overlapping = (x1, y1, x2, y2, a1, b1, a2, b2) => {
    // 겹치지 않는 경우에 대한 처리를 먼저 진행합니다.
    if (x2 < a1 || a2 < x1 || b2 < y1 || y2 < b1) {
        return false;
    }
    // 나머지는 전부 겹치는 경우라고 볼 수 있습니다.
    else {
        return true;
    }
}

// 겹치는지를 확인합니다.
if (overlapping(x1, y1, x2, y2, a1, b1, a2, b2)) {
    console.log("overlapping");
} else {
    console.log("nonoverlapping");
}