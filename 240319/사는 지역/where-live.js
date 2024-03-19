class Address {
    constructor(name, address, region) {
        this.name = name;
        this.address = address;
        this.region = region;
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = parseInt(input[0]);
const arr = input.slice(1, n + 1).map(line => line.split(' '));
const people = arr.map(([name, address, region]) => new Address(name, address, region));

// 사전순으로 이름이 가장 느린 사람 찾기
let targetIdx = 0;
for (let i = 0; i < n; i++) {
    if (people[i].name > people[targetIdx].name) {
        targetIdx = i;
    }
}

// 결과 출력
console.log(`name ${people[targetIdx].name}`);
console.log(`addr ${people[targetIdx].address}`);
console.log(`city ${people[targetIdx].region}`);