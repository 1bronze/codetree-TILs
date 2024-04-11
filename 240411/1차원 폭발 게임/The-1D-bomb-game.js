const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1, 1 + n).map(Number);

function bomb() {
    let flag = false;

    let startIdx = -1; // 시작 인덱스 바로 앞
    let endIdx = -1; // 마지막 인덱스

    // let tmpArr = [];
    for (let i = 0; i < n; i++) {
        if (i === 0 || arr[i] !== arr[i - 1]) {
            if (endIdx - startIdx >= m) {
                for (let j = startIdx + 1; j <= endIdx; j++) {
                    arr[j] = 0;
                }
                flag = true;
            }

            startIdx = i - 1;
            endIdx = i;
        } else {
            endIdx++;
        }
    }

    let tmp = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] !== 0) {
            arr[tmp++] = arr[i];
        }
    }
    for (let i = tmp; i < n; i++) {
        arr[i] = 0;
    }

    return flag;
}

while (true) {
    let flag = bomb();

    if (!flag) break;
}

let size = 0;
let ans = "";
for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
        size++;
        ans += `${arr[i]}\n`;
    } else {
        break;
    }
}

console.log(size);
console.log(ans);