const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const n = Number(input[0]);
let ans = 0;
const seq = [];

function isBeautiful() {
    // 연달아 같은 숫자가 나오는 시작 위치를 잡습니다.
    let i = 0;
    while (i < n) {
        // 만약 연속하여 해당 숫자만큼 나올 수 없다면
        // 아름다운 수가 아닙니다.
        if (i + seq[i] - 1 >= n) {
            return false;
        }
        // 연속하여 해당 숫자만큼 같은 숫자가 있는지 확인합니다.
        // 하나라도 다른 숫자가 있다면
        // 아름다운 수가 아닙니다.
        for (let j = i; j < i + seq[i]; j++) {
            if (seq[j] !== seq[i]) {
                return false;
            }
        }
        
        i += seq[i];
    }
    
    return true;
}

function countBeautifulSeq(cnt) {
    if (cnt === n) {
        if (isBeautiful()) {
            ans += 1;
        }
        return;
    }
    
    for (let i = 1; i <= 4; i++) {
        seq.push(i);
        countBeautifulSeq(cnt + 1);
        seq.pop();
    }
}

countBeautifulSeq(0);
console.log(ans);