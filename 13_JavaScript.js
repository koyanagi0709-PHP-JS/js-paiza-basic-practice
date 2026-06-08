const fs = require("fs");
const input = fs.readFileSync("./text/08_input.txt","utf-8").trim();
const [a,b,c] = input.split(" ");

let amount = 0;
console.log(amount);

if (Number(a) === 0) {
    amount = amount + 1;
}

if (Number(b) === 0) {
    amount = amount + 1;
}

if (Number(c) === 0) {
    amount = amount + 1;
}

console.log(amount);