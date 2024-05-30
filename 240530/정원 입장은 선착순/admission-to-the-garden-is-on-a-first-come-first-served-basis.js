class Person {
    constructor(a, num, t) {
        this.a = a;
        this.num = num;
        this.t = t;
    }
}

const Heap = require('collections/heap');
const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const INT_MAX = Number.MAX_SAFE_INTEGER;
const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(line => line.split(" ").map(Number));

let ans = 0;
const people = [];
const pq = new Heap(null, null, (p1, p2) => {
    if (p1.a !== p2.a) 
        return p2.a - p1.a;
    return p2.num - p1.num;
});

arr.forEach(([a, t], i) => {
    // 이후 정원에 먼저 도달한 사람이
    // 앞에 나올 수 있도록 a, 번호, t 순으로 넣어줍니다.
    // 두 번째 위치에
    // 번호를 넣어주는 이유는
    // 나중에 여러 사람이 기다릴 때
    // 가장 번호가 작은 사람을 뽑기 위해서 입니다.
    people.push(new Person(a, i + 1, t));
})

// 구현 편의상 마지막 사람을 한 명 더 추가해줍니다.
people.push(new Person(INT_MAX, n + 1, 0));

people.sort((p1, p2) => {
    if (p1.a !== p2.a)          // 정원에 먼저 도착한 사람부터 나오도록
        return p1.a - p2.a;     // a 기준으로 오름차순 정렬해줍니다.
    return p1.num - p2.num;     // 도착시간이 동일하다면 번호가 작은 사람이 먼저 나오도록 합니다.
});

// 정원에 도착한 순서대로 사람들을 보며
// 현재 정원에 있는 사람이 언제 나오게 되는지를 계속 계산해줍니다.
// 이때 우선순위 큐를 이용하여 기다리고 있는 사람들의 정보를 관리하여
// 정원에서 사람이 나온 즉시 기다리던 사람 중 
// 번호가 가장 작은 학생이 바로 들어갈 수 있도록 합니다.
let exitTime = 0;

// 각 사람을 순서대로 입장시킵니다.
people.forEach((person) => {
    // 지금 입장한 사람보다
    // 현재 정원에서 빠져나오는 사람의 시간이 더 앞서다면
    // 계속 정원 입장을 진행해줍니다.
    while (person.a > exitTime && pq.length > 0) {
        // 기다리던 사람 중에 가장 우선순위가 높은 사람을 골라줍니다.
        const nextPerson = pq.pop();

        // 해당 사람이 얼마나 기다렸는지를 계산하여
        // 최댓값을 갱신해줍니다.
        ans = Math.max(ans, exitTime - nextPerson.num);
        // 연속하여 일어난 일이므로
        // 그 다음 사람의 정원 퇴장 시간은
        // nextT만큼 더해진 값이 됩니다.
        exitTime += nextPerson.t;
    }

    // 계속 정원 입장을 진행했음에도
    // 지금 입장한 사람이 대기 없이 들어갈 수 있다면
    // 우선순위 큐에 넣지 않고 바로 정원에 입장시킵니다.
    if (person.a > exitTime) {
        exitTime = person.a + person.t;
    } 
    // 그렇지 않다면
    // 대기 리스트에 넣어줍니다.
    else {
        pq.push(new Person(person.num, person.a, person.t));
    }
});

console.log(ans);