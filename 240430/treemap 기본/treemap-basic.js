const SortedMap = require("collections/sorted-map");

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력:
const n = Number(input[0]);
const commands = input.slice(1, 1 + n);

const m = new SortedMap();

commands.forEach(command => {
    if (command.startsWith("add")) {
        const [, k, v] = command.split(' ');
        m.set(Number(k), Number(v));
    }
    else if (command.startsWith("remove")) {
        const [, k] = command.split(' ');
        m.delete(Number(k));
    }
    else if (command.startsWith("find")) {
        const [, k] = command.split(' ');
        if (!m.has(Number(k)))
            console.log("None")
        else
            console.log(m.get(Number(k)));
    }
    else {
        // SortedDict가 비어있는 경우에 대해서는
        // None을 출력합니다.
        if (m.size === 0) {
            console.log("None");
        } else {
            // key가 오름차순으로 정렬된 상태에서
            // value 값만 순서대로 가져옵니다.
            let ans = '';
            for (let value of m.values())
                ans += `${value} `;
            console.log(ans);
        }
    }
})