const fs = require("fs");
const input = fs.readFileSync("/dev/stdin","utf-8").trim();
const lines = input.split("\n");

// console.log(lines);

const n1 = lines[0];
const n2 = lines[1];
const n3 = lines[2];
const n4 = lines[3];
const n5 = lines[4];


let min = 101;

for (let i=0; i<5; i++) {
    const num = Number(lines[i]);
    
    if (num < min) {
        min = num;
    }
}

//console.log(Math.min(1,2,3));

// if (n1 < min) {
//     min = n1;
// }

// if (n2 < min) {
//     min = n2;
// }

// if (n3 < min) {
//     min = n3;
// }

// if (n4 < min) {
//     min = n4;
// }

// if (n5 < min) {
//     min = n5;
// }

console.log(min);