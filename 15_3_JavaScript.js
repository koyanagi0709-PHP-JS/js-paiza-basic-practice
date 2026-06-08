
// 類題 1
const fs = require("fs");
const input = fs.readFileSync("./text/10_input.txt","utf-8").trim();

const lines = input.split(" ");
// console.log(lines);

const nums = lines.map(s => s.trim()).map(Number);
// console.log(nums);

// console.log(Math.max(...nums));
// console.log(Math.max.apply(null,nums));

let max = 0;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
        max = nums[i];
    }
}

console.log(max);