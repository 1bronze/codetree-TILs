const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력
const n = Number(input[0]);
const a = input[1].split(" ").map(Number);

// 새로운 배열을 만들어 정렬하고
// 2번째로 작은 숫자를 찾아냅니다.
const myarr = a.slice().sort((a, b) => a - b);

// isexist : 2번째로 작은 숫자가 존재하면 true
let isexist = false;
let low2 = 0;
for (const elem of myarr) {
    // 가장 처음으로 myarr[0]과 다른 숫자는
    // 2번째로 작은 숫자라고 할 수 있습니다.
    if (elem !== myarr[0]) {
        low2 = elem;
        isexist = true;
        break;
    }
}

// 2번째로 작은 숫자가 존재하지 않을 때
if (isexist === false) {
    console.log(-1);
    process.exit();
}

let ansidx = -1;
for (let idx = 0; idx < n; idx++) {
    if (a[idx] === low2) {
        // 2번째로 작은 숫자가 여러 개 있을 때
        if (ansidx !== -1) {
            console.log(-1);
            process.exit();
        }

        ansidx = idx;
    }
}

console.log(ansidx + 1);