const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split("").map(Number);

// Step1. gap이 가장 큰 구간 찾기
let maxDist = 0;
let max_l = -1;
let max_r = -1;
let last = -1;
for (let i = 0; i < n; i++) {
    if (arr[i] === 1) {
        if (last != -1 && maxDist < i - last) {
            maxDist = i - last;
            max_l = last;
            max_r = i;
        }
        last = i;
    }
}

// Step2. gap이 가장 큰 구간 사이에 1 놓기
const mid = Math.floor((max_l + max_r) / 2);
arr[mid] = 1;

let ans = 0;

// Step3. minDist 찾기
let minDist = n;
last = -1;
for (let i = 0; i < n; i++) {
    if (arr[i] === 1) {
        if (last === -1) {
            last = i;
        } else if (minDist > i - last) {
            minDist = i - last;
        }
        last = i;
    }
}
ans = Math.max(ans, minDist);
arr[mid] = 0;

// Step4. 제일 앞에 1이 오는 경우를 고려해서 minDist 업데이트 하기
if (arr[0] !== 1) {
    arr[0] = 1;
    minDist = n;
    last = -1;
    for (let i = 0; i < n; i++) {
        if (arr[i] === 1) {
            if (last === -1) {
                last = i;
            } else if (minDist > i - last) {
                minDist = i - last;
            }
            last = i;
        }
    }
    ans = Math.max(ans, minDist);
    arr[0] = 0;
}

// Step5. 제일 뒤에 1이 오는 경우를 고려해서 minDist 업데이트 하기
if (arr[n - 1] !== 1) {
    arr[n - 1] = 1;
    minDist = n;
    last = -1;
    for (let i = 0; i < n; i++) {
        if (arr[i] === 1) {
            if (last === -1) {
                last = i;
            } else if (minDist > i - last) {
                minDist = i - last;
            }
            last = i;
        }
    }
    ans = Math.max(ans, minDist);
    arr[n - 1] = 0;
}

console.log(ans);