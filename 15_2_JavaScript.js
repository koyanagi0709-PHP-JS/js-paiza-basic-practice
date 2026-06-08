// 一番小さい値（paiza ランク D 相当）に挑戦！
const fs = require("fs");
const input = fs.readFileSync("./text/09_input.txt","utf-8").trim();
// console.log(input);

const lines = input.split("\n");
const nums = lines.map(s => s.trim()).map(Number);

// console.log(Math.min(...nums));
// console.log(Math.min.apply(null,nums));

let min = 101;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
        min = nums[i];
    }
}

console.log(min);