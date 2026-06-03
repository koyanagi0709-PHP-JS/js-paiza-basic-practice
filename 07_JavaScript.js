const fs = require("fs");
const input = fs.readFileSync("./text/02_input.txt", "utf-8").trim();

const array = input.split(" "); // 半角区切りの標準出力を使用 この半角スペースのことをセパレータ・デミリトという

console.log(array);
console.log(array.length);

// 年月日
const input02 = fs.readFileSync("./text/03_input.txt", "utf-8").trim();

const date = input02.split("/");

const year = date[0];
const month = date[1];
const day = date[2];

console.log(`${year}年${month}月${day}日`);

// 改行もセパレート
const input03 = fs.readFileSync("./text/04_input.txt", "utf-8").trim();

const member = input03.split("\n");

console.log(member);
console.log(member.length);