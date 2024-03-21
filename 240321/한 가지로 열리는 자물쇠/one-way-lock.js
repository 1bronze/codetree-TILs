let cnt = 0;
for (let i = 1; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        for (let k = 0; k < 10; k++) {
            if (i !== j && j !== k && i !== k && (i + j + k) % 2 === 1) {
                cnt += 1;
            }
        }
    }
}

console.log(cnt);