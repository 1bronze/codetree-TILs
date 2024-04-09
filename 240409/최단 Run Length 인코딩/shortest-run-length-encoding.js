const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const str = input[0].split("");

let ans = 100;

function encoding() {
    let ret = "";

    let char = str[0];
    let cnt = 1;

    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) cnt++;
        else {
            ret += char + cnt;
            char = str[i];
            cnt = 1;
        }
    }
    ret += char + cnt;

    return ret;
}

for (let i = 0; i < str.length; i++) {
    let tmp = str[str.length - 1];
    for (let j = str.length - 1; j > 0; j--)
        str[j] = str[j - 1];
    str[0] = tmp;

    const encoded = encoding();
    ans = Math.min(ans, encoded.length);
}

console.log(ans);