// Paiza D ランク相当練習問題
const fs = require("fs");
const input = fs.readFileSync("./text/05_input.txt", "utf-8").trim();
const lines = input.split("\n");

const a = Number(lines[0]);
const b = Number(lines[1]);

console.log(a * b);