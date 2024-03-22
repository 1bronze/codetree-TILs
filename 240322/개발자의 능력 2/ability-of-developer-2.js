const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ');

const members = input.map(Number);

let teamA = 0;
let teamB = 0;
let teamC = 0;

let minDiff = Number.MAX_SAFE_INTEGER;

for (let a1 = 0; a1 < 6; a1++) {
    for (let a2 = a1 + 1; a2 < 6; a2++) {
        teamA = members[a1] + members[a2];

        for (let b1 = 0; b1 < 6; b1++) {
            for (let b2 = b1 + 1; b2 < 6; b2++) {
                teamB = members[b1] + members[b2];

                if (a1 === b1 && a2 === b2) {
                    continue;
                }

                members.forEach(member => {
                    teamC += member;
                })
                teamC -= teamA + teamB;

                let maxTeam = Math.max(teamA, teamB, teamC);
                let minTeam = Math.min(teamA, teamB, teamC);
                minDiff = Math.min(minDiff, Math.abs(maxTeam - minTeam));
                console.log(teamA, teamB, teamC, minDiff);
            }
        }
    }
}

console.log(minDiff);