const fs = require("fs");
const input = fs.readFileSync("./text/06_input.txt","utf-8").trim();
const [a,b] = input.split(" "); //配列の分割代入

console.log(Number(a) + Number(b));

/**
 *
    MDN web docs
    https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

    JavaScript には「分割代入」と呼ばれる構文が存在しています。
    const [a, b] = [1, 2, 3, 4];
    のように書くことで、a と b にそれぞれ 1 と 2 を代入することができます。それ以降の要素はこの場合無視されます。
 */