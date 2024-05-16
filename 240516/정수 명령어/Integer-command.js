const SortedSet = require("collections/sorted-set");
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력
const t = Number(input[0]);
let inputIndex = 1;

for (let i = 0; i < t; i++) {
    const n = Number(input[inputIndex]);
    inputIndex++;
    const s = new SortedSet();

    for (let j = 0; j < n; j++) {
        const [command, x] = input[inputIndex].split(" ");
        const num = Number(x);
        inputIndex++;

        // treeset에 넣어줍니다.
        if (command === 'I') {
            s.push(num);
        }
        // 셋이 비어있지 않을 경우에는 값을 제거해줍니다.
        else if (command === 'D' && s.length > 0) {
            if (num === 1) {
                s.delete(s.max());
            } else if (num === -1) {
                s.delete(s.min());
            }
        }
    }

    if (s.length === 0) {
        console.log("EMPTY");
    } else {
        console.log(`${s.max()} ${s.min()}`);
    }
}