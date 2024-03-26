const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number); // 입력 처리

// x1, x2, x3, x4 변수 입력 받기
const [x1, x2, x3, x4] = input;

// 겹치는지 확인하는 함수
function intersecting(x1, x2, x3, x4) {
    // 겹치지 않는 경우에 대한 처리를 먼저 진행합니다.
    if (x2 < x3 || x4 < x1) {
        return false;
    }
    // 나머지는 전부 겹치는 경우라고 볼 수 있습니다.
    else {
        return true;
    }
}

// 겹치는지를 확인합니다.
if (intersecting(x1, x2, x3, x4)) {
    console.log("intersecting");
} else {
    console.log("nonintersecting");
}