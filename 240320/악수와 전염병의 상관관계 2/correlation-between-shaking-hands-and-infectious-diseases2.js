// 클래스 선언
class Shake {
    constructor(time, person1, person2) {
        this.time = time;
        this.person1 = person1;
        this.person2 = person2;
    }
}

// 파일 시스템 모듈을 사용
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

// 변수 선언 및 입력
const [n, k, p, t] = input[0].split(' ').map(Number);
const shakes = [];
for(let i = 1; i <= t; i++) {
    const [time, person1, person2] = input[i].split(' ').map(Number);
    shakes.push(new Shake(time, person1, person2));
}

const shakeNum = Array(n + 1).fill(0);
const infected = Array(n + 1).fill(false);

infected[p] = true;

// Custom Comparator를 활용한 정렬
shakes.sort((a, b) => a.time - b.time);

// 각 악수 횟수를 세서, K번 초과로 악수를 했을 시 전염시키지 않습니다.
for(let shake of shakes) {
    const target1 = shake.person1;
    const target2 = shake.person2;
    
    // 감염되어 있을 경우 악수 횟수를 증가시킵니다.
    if(infected[target1]) {
        shakeNum[target1] += 1;
    }
    if(infected[target2]) {
        shakeNum[target2] += 1;
    }
    
    // target1이 감염되어 있고 아직 K번 이하로 악수했다면 target2를 전염시킵니다.
    if(shakeNum[target1] <= k && infected[target1]) {
        infected[target2] = true;
    }
    
    // target2가 감염되어 있고 아직 K번 이하로 악수했다면 target1을 전염시킵니다.
    if(shakeNum[target2] <= k && infected[target2]) {
        infected[target1] = true;
    }
}

// 결과 출력
let output = "";
for(let i = 1; i <= n; i++) {
    output += infected[i] ? '1' : '0';
}
console.log(output);