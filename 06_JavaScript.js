// 標準入力からデータを受け取る
const fs = require("fs");
const input = fs.readFileSync("./text/input.txt", "utf-8").trim();

console.log(input);

/**
 * fs変数にrequire関数でfsモジュールを読み込む
 * fs.readFileSyncで標準入力から情報を読み取る fsモジュール内の関数
 * trimは前後の空白を除去する
 */