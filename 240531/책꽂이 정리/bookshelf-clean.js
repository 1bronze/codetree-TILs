class Node {
    // 번호가 data인 단일 노드를 만드는 생성자
    constructor(data) {
        // 책의 번호
        this.data = data;

        // 이전 노드와 다음 노드
        this.prev = null;
        this.next = null;
    }
}

// i번 연결 리스트가 비어있는지 여부
function empty(i) {
    return heads[i] === 0;
}

// 노드 u와 v를 서로 연결
function connect(u, v) {
    u.next = v;
	v.prev = u;
}

// i번 연결 리스트의 head를 삭제한 후 반환
function pop_front(i) {
    const ret = heads[i];

    if (null !== ret) {
			// head를 뒤로 하나 이동
			heads[i] = ret.next;

			// 노드 ret를 단일 노드로 만듦
			ret.next = null;

			if (null != heads[i])
				// 연결 리스트가 비어있지 않다면, head의 이전 노드를 Null로 설정
				heads[i].prev = null;
			else
				// 연결 리스트가 비어있다면, tail도 Null로 설정
				tails[i] = null;
		}

		return ret;
}

// i번 연결 리스트의 tail을 삭제한 후 반환
function pop_back(i) {
    const ret = tails[i];

    if (null !== ret) {
			// tail을 앞으로 하나 이동
			tails[i] = ret.prev;

			// 노드 ret를 단일 노드로 만듦
			ret.prev = null;

			if (null != tails[i])
				// 연결 리스트가 비어있지 않다면, tail의 다음 노드를 Null로 설정
				tails[i].next = null;
			else
				// 연결 리스트가 비어있다면, head도 Null로 설정
				heads[i] = null;
		}

		return ret;
}

// i번 연결 리스트의 맨 앞에 단일 노드 singleton을 삽입
function push_front(i, singleton) {
    if (null === heads[i]) {
		// 연결 리스트가 비어있다면, head와 tail은 모두 singleton
		heads[i] = tails[i] = singleton;
	} else {
		// 연결 리스트가 비어있지 않다면, 기존의 head 앞에 singleton을 삽입
		connect(singleton, heads[i]);
		heads[i] = singleton;
	}
}

// i번 연결 리스트의 맨 뒤에 단일 노드 singleton을 삽입
function push_back(i, singleton) {
	if (null === tails[i]) {
		// 연결 리스트가 비어있다면, head와 tail은 모두 singleton
		heads[i] = tails[i] = singleton;
	} else {
		// 연결 리스트가 비어있지 않다면, 기존의 tail 뒤에 singleton을 삽입
		connect(tails[i], singleton);
		tails[i] = singleton;
	}
}

// i번 연결 리스트를 j번 연결 리스트 앞에 삽입
function move_all_front(i, j) {
    // 무의미한 연산에 대한 예외처리
	if (i === j || empty(i))
		return;

	if (empty(j)) {
		// j번 연결 리스트가 비어있다면, head와 tail은 i번의 것과 동일
		heads[j] = heads[i];
		tails[j] = tails[i];
	} else {
		// j번 연결 리스트가 비어있지 않다면
		// i번의 tail과 j번의 head를 연결하고
		// j번의 head는 i번의 head가 됨
		connect(tails[i], heads[j]);
		heads[j] = heads[i];
	}

	// 이제, i번 연결 리스트는 비어있음
	heads[i] = tails[i] = null;
}

// i번 연결 리스트를 j번 연결 리스트 뒤에 삽입
function move_all_back(i, j) {
    // 무의미한 연산에 대한 예외처리
	if (i === j || empty(i))
		return;

	if (empty(j)) {
		// j번 연결 리스트가 비어있다면, head와 tail은 i번의 것과 동일
		heads[j] = heads[i];
		tails[j] = tails[i];
	} else {
		// j번 연결 리스트가 비어있지 않다면
		// j번의 tail과 i번의 head를 연결하고
		// j번의 tail는 i번의 tail이 됨
		connect(tails[j], heads[i]);
		tails[j] = tails[i];
	}

	// 이제, i번 연결 리스트는 비어있음
	heads[i] = tails[i] = null;
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 입력 및 변수 선언
const [n, k] = input[0].split(' ').map(Number);
const q = Number(input[1]);
const queries = input.slice(2, 2 + q).map(line => line.split(" ").map(Number));

// 노드를 번호순으로 배열로 관리
const nodes = new Array(k + 1).fill(0);

// 각 연결 리스트의 head와 tail을 배열로 관리
const heads = new Array(k + 1).fill(0);
const tails = new Array(k + 1).fill(0);

// n 개의 단일 노드 생성
for (let i = 1; i <= n; i++)
    nodes[i] = new Node(i);

// n 개의 노드를 일렬로 연결
for (let i = 1; i < n; i++)
	connect(nodes[i], nodes[i + 1]);

// k 개의 연결 리스트 초기화
for (let i = 1; i <= k; i++)
	heads[i] = tails[i] = null;

heads[1] = nodes[1];
tails[1] = nodes[n];

queries.forEach(([type, i, j]) => {
    if (1 === type) {
		// i번 연결 리스트에서 맨 앞 노드를 가져옴
		const node = pop_front(i);

	    // 그 노드를 j번 연결 리스트 맨 뒤에 삽입
		if (null !== node)
			push_back(j, node);
	} else if (2 === type) {
		// i번 연결 리스트에서 맨 뒤 노드를 가져옴
		const node = pop_back(i);

		// 그 노드를 j번 연결 리스트 맨 앞에 삽입
		if (null !== node)
			push_front(j, node);
	} else if (3 === type) {
		// i번 연결 리스트를 j번 연결 리스트의 맨 앞에 삽입
		move_all_front(i, j);
	} else if (4 === type) {
		// i번 연결 리스트를 j번 연결 리스트의 맨 뒤에 삽입
		move_all_back(i, j);
	}
});

// 각 연결 리스트를 순회
for (let i = 1; i <= k; i++) {
    const result = [];
    let cnt = 0;

    // i번 연결 리스트를 순회하여 노드의 수를 셈
    let cur = heads[i];
    while (null !== cur) {
        cnt++;
        cur = cur.next;
    }

    result.push(cnt);

    // i번 연결 리스트를 순회하면서 각 노드의 값을 출력
    cur = heads[i];
    while (null !== cur) {
        result.push(cur.data);
        cur = cur.next;
    }
    console.log(result.join(" "));
}