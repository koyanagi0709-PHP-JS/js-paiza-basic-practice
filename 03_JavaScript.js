// 足し算
console.log(1 + 1);
// 引き算
console.log(3 - 5);
// 掛け算
console.log(4 + 7);
// 割り算
console.log(10 / 6);
// ゼロで割る
console.log(1 / 0); // Infinity (無限大)

// 計算の優先順位
// カッコ > 掛け算・割り算 > 足し算・引き算
console.log((1 - 2) * (3 + 7));

// 文字列同士の足し算
const former = "10";
const latter = "2";

console.log(former + latter); // "102"となる

// 文字列同士の足し算
const former = "10";
const latter = 2;

console.log(former + latter); // 同様に"102"となる
console.log(`${former}${latter}`); // 数値と文字列の結合はこちら推奨
console.log(Number(former) + latter); //数値型に型変換してから足し算

// テンプレートリテラル中の計算
const a = 3;
const b = 4;

// 足し算
console.log(`${a} + ${b} = ${a + b}`);
// 以下に引き算、掛け算、割り算の場合を追加

// 引き算
console.log(`${a} - ${b} = ${a - b}`);

// 掛け算
console.log(`${a} * ${b} = ${a * b}`);

// 割り算
console.log(`${a} / ${b} = ${a / b}`);