const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, p] = input[0].split(' ').map(Number);
const message = input.slice(1, 1 + m).map(line => line.split(' '));

// 모두 읽은 채팅이라면 읽지 않은 사람은 없습니다.
if (Number(message[p - 1][1]) === 0) {
    process.exit();
}

// 각 사람에 대해 채팅을 읽었을지 안 읽었을지 판단합니다.
let result = "";
for (let i = 0; i < n; i++) {
    // read : 확실하게 채팅을 읽었으면 true
    const person = String.fromCharCode('A'.charCodeAt(0) + i);
    let read = false;

    // 만약 p번 메시지를 읽은 사람 수와 같은 채팅을 기준으로
    // 한번이라도 채팅을 쳤다면 확실하게 채팅을 읽었습니다.
    message.forEach(([c, u]) => {
        u = Number(u);
        if (u >= Number(message[p - 1][1]) && c === person) {
            read = true;
        }
    });

    if (!read) {
        result += `${person} `;
    }
}

console.log(result.trimEnd());