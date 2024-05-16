const SortedSet = require("collections/sorted-set");
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력:
const n = Number(input[0]);
const problemsArray = input.slice(1, 1 + n).map(line => line.split(" ").map(Number));
const m = Number(input[n + 1]);
const commands = input.slice(2 + n, 2 + n + m);

// 주어진 문제를 treeset에 넣어줍니다.
const problems = new SortedSet();
problemsArray.forEach(([p, l]) => problems.push([l, p]));

// m개의 명령을 수행합니다.
commands.forEach(line => {
    const command = line.split(" ")[0];

    if (command === "ad") {
        const [, p, l] = line.split(" ").map(Number);

        // 문제를 추가합니다.
        problems.push([l, p]);
    } 
    else if (command === "sv") {
        const [, p, l] = line.split(" ").map(Number);

        // 문제를 제거합니다.
        problems.delete([l, p]);
    } 
    else {
        const x = Number(line.split(" ")[1]);

        // x가 1이면 난이도가 가장 높은 문제의 번호를 출력합니다.
        if (x === 1) {
            const [, p] = problems.findGreatest().value;
            console.log(p);
        } 
        // x가 -1이면 난이도가 가장 낮은 문제의 번호를 출력합니다.
        else {
            const [, p] = problems.findLeast().value;
            console.log(p);
        }
    }
});