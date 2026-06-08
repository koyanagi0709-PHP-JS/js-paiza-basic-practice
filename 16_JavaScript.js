// 文字の一致（paiza ランク D 相当）に挑戦！
const fs = require("fs");
const input = fs.readFileSync("./text/11_input.txt","utf-8").trim();
const lines = input.split("\n");

const a = lines[0].trim();
const b = lines[1].trim();

if (a === b) {
    console.log("OK");
} else {
    console.log("NG");
}