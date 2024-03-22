class Info1 {
    constructor(p, m, t) {
        this.p = p;
        this.m = m;
        this.t = t;
    }
}

class Info2 {
    constructor(p, t) {
        this.p = p;
        this.t = t;
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, d, s] = input[0].split(' ').map(Number);

const info1 = [];
for (let i = 1; i <= d; i++) {
    const [p, x, t] = input[i].split(' ').map(Number);
    info1.push(new Info1(p, x, t));
}

const info2 = [];
for (let i = 1 + d; i <= d + s; i++) {
    const [p, t] = input[i].split(' ').map(Number);
    info2.push(new Info2(p, t));
}

let ans = 0;

// 하나의 치즈가 상했을 때 필요한 약의 수의 최댓값을 구합니다.
for (let i = 1; i <= m; i++) {
    // i번째 치즈가 상했을 때 필요한 약의 수를 구합니다.
    
    // 우선 i번째 치즈가 상했다고 가정할 때 모순이 발생하지 않는지 확인합니다.
    // time배열을 만들어 각 사람이 언제 치즈를 먹었는지 저장합니다.
    const time = Array(n + 1).fill(0);
    info1.forEach(info => {
        // i번째 치즈에 대한 정보가 아닌 경우 넘어갑니다.
        if (info.m !== i) {
            return;
        }

        // person이 i번째 치즈를 처음 먹었거나
        // 이전보다 더 빨리 먹게 된 경우 time배열을 갱신합니다.
        const {p: person, t} = info;
        if (time[person] === 0 || time[person] > t) {
            time[person] = t;
        }
    });

    // possible: i번째 치즈가 상했을 수 있으면 true, 아니면 false
    let possible = true;

    info2.forEach(info => {
        // person이 i번째 치즈를 먹지 않았거나
        // i번째 치즈를 먹은 시간보다 먼저 아픈 경우 모순이 생깁니다.
        const {p: person, t} = info;
        if (time[person] === 0 || time[person] >= t) {
            possible = false;
        }
    });

    // 만약 i번째 치즈가 상했을 가능성이 있다면, 몇 개의 약이 필요한지 확인합니다.
    let pill = 0;
    if (possible) {
        // 한번이라도 i번째 치즈를 먹은 적이 있다면, 약이 필요합니다.
        for (let j = 1; j <= n; j++) {
            if (time[j] !== 0) {
                pill += 1;
            }
        }
    }

    ans = Math.max(ans, pill);
}

console.log(ans);