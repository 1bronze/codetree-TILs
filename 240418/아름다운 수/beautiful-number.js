const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = Array.from(Array(10).fill(0));

let ans = 0;

function check() {
    let cnt = 0;

    for (let i = 0; i < n; i++) {
        if (i === 0) cnt = 1;
        else if (arr[i] === arr[i - 1]) cnt++;
        else {
            if (cnt % arr[i - 1] !== 0)
                return false;
            cnt = 1;
        }
    }

    // console.log(n, cnt, arr[n - 1], cnt % arr[n - 1]);

    if (n === 1) {
        if (arr[0] !== 1) {
            return false;
        }
    }
    else {
        if ((cnt % arr[n - 1]) !== 0) {
            // console.log('called!')
            return false;   
        }
    }

    return true;
}

function recur(cnt) {
    if (cnt === n) {
        if (check()) ans++;
        // console.log(arr.join(' '), ans);
        return;
    }

    for (let i = 1; i <= 4; i++) {
        arr[cnt] = i;
        recur(cnt + 1);
    }
}

recur(0);
console.log(ans);