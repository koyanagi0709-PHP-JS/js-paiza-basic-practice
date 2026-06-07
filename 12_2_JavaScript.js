const fs = require("fs");
const input = fs.readFileSync("./text/07_input.txt","utf-8").trim();

// キー入力（input）に応じて条件分岐
if (input === "A") {
    console.log("上に進む");
} else if (input === "B") {
    console.log("下に進む");
} else if (input === "C") {
    console.log("右に進む");
} else if (input === "D") {
    console.log("左に進む");
} else {
    console.log(input);
}