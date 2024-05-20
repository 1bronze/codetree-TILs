const SortedSet = require("collections/sorted-set");
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력:
const [n, t] = input[0].split(' ').map(Number);
const x = [];
const v = [];
for (let i = 1; i <= n; i++) {
    const [inputX, inputV] = input[i].split(' ').map(Number);
    x.push(inputX);
    v.push(inputV);
}

// x 순으로 정렬하여 사람들을 관리합니다.
const peopleX = new SortedSet();
// 인접한 사람끼리 만나는 시간 순으로 정렬하여 사건들을 관리합니다.
const eventT = new SortedSet();

// (x1, v1) 사람이 바로 앞에 있는 (x2, v2)와 마주치는 데 걸리는 시간 정보를 얻어 사건 정보를 추가합니다.
function addEvent(x1, v1, x2, v2) {
    // 절대 따라잡을 수 없는 경우라면 무시합니다.
    if (v1 <= v2) {
        return;
    }
    eventT.add([(x2 - x1) / (v1 - v2), x1, v1]);
}

// (x1, v1) 사람이 바로 앞에 있는 (x2, v2)와 마주치는 데 걸리는 시간 정보를 얻어 해당 사건 정보를 제거합니다.
function removeEvent(x1, v1, x2, v2) {
    // 절대 따라잡을 수 없는 경우라면 무시합니다.
    if (v1 <= v2) {
        return;
    }
    eventT.delete([(x2 - x1) / (v1 - v2), x1, v1]);
}

// 사람들을 set으로 관리합니다.
for (let i = 0; i < n; i++) {
    peopleX.add([x[i], v[i]]);
}

// 인접한 사람끼리 만나는 사건도 set으로 관리합니다.
// (t, x, v) : 
// 현재 x 위치에서 속도 v로 이동하는 사람과
// 바로 앞에 있는 사람이 
// 마주치는 데 거리는 시간 t라는 정보 기입
for (let i = 0; i < n - 1; i++) {
    addEvent(x[i], v[i], x[i + 1], v[i + 1]);
}

// 앞지르는 사건이 존재한다면 반복합니다.
while (eventT.length) {
    const [currT, x, v] = eventT.shift();

    // 이미 t분이 넘었다면 종료합니다.
    if (currT > t) {
        break;
    }

    // 해당 사람과 사건을 삭제합니다.
    peopleX.delete([x, v]);
    
    // 바로 앞 사람 위치를 구합니다.
    const index = peopleX.findLeastGreaterThan([x, v]);
    if (!index) continue;
    
    const [nx, nv] = index.value;

    // 바로 뒤에 사람이 있다면 
    // 이전 사건을 삭제하고
    // 새로운 사건을 추가합니다.
    const prevIndex = peopleX.findGreatestLessThan([nx, nv]);
    if (prevIndex) {
        const [px, pv] = prevIndex.value;
        removeEvent(px, pv, x, v);
        addEvent(px, pv, nx, nv);
    }
}

// 서로 다른 그룹의 수를 출력합니다.
console.log(peopleX.length);