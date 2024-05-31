class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// 두 도시를 연결해줍니다.
function connect(s, e) {
    if (s !== null) s.next = e;
    if (e !== null) e.prev = s;
}

// target 뒤에 s를 삽입합니다.
function insertNext(target, s) {
    connect(s, target.next);
    connect(target, s);
}

// 해당 도시를 삭제합니다.
function pop(u) {
    connect(u.prev, u.next);
    u.prev = null;
    u.next = null;
}

// 입력을 받습니다.
const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, q] = input[0].split(' ').map(Number);
const cities = input[1].split(' ');
const queries = input.slice(2, 2 + q).map(line => line.split(' '));

let pin = null;
let prev = null;

// 원형으로 연결을 해야합니다.
cities.forEach((city, i) => {
	const target = new Node(city);

    // 맨 처음 도시가 핀셋으로 꽂혀 있는 도시입니다.
    if (i === 0) {
        pin = target;
    } else {
        connect(prev, target);
    }

    // 원형이기 때문에 맨 마지막 도시와 핀셋으로 꽂혀 있는 도시를 연결해줍니다.
    if (i === n - 1) {
        connect(target, pin);
    }
    prev = target;
});

// 각 질의를 수행합니다.
queries.forEach(query => {
    const option = Number(query[0]);

    if (option === 1)
        if (pin.next)
            pin = pin.next;

    if (option === 2)
        if (pin.prev)
            pin = pin.prev;
    
    if (option === 3)
        if (pin.next !== pin)
            pop(pin.next);

    if (option === 4) {
        const city = query[1];
        insertNext(pin, new Node(city));
    }

    // 조건에 맞게 출력해줍니다.
    if (pin.next === pin.prev || pin.next === null || pin.prev === null)
        console.log(-1);
    else
        console.log(`${pin.prev.data} ${pin.next.data}`);
});