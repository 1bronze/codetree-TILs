const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// const rec1First = input[0].split(" ").slice(0, 2).map(Number);
// const rec1Second = input[0].split(" ").slice(2, 4).map(Number);
// const rec2First = input[1].split(" ").slice(0, 2).map(Number);
// const rec2Second = input[1].split(" ").slice(2, 4).map(Number);

// const leftPoint = [Math.min(rec1First[0], rec2First[0]), Math.min(rec1First[1], rec2First[1])];
// const rightPoint = [Math.min(rec1Second[0], rec2Second[0]), Math.min(rec1Second[1], rec2Second[1])];

// const area = Math.abs(rightPoint[0] - leftPoint[0]) * Math.abs(rightPoint[1] - leftPoint[1]);

const rec1Info = input[0].split(" ").map(Number);
const rec2Info = input[1].split(" ").map(Number);

const minX = Math.min(rec1Info[0], rec1Info[2], rec2Info[0], rec2Info[2]);
const maxX = Math.max(rec1Info[0], rec1Info[2], rec2Info[0], rec2Info[2]);

const minY = Math.min(rec1Info[1], rec1Info[3], rec2Info[1], rec2Info[3]);
const maxY = Math.max(rec1Info[1], rec1Info[3], rec2Info[1], rec2Info[3]);

const area = Math.abs(maxX - minX) * Math.abs(maxY - minY);

console.log(area);