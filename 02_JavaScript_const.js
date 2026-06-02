const name = "霧島京子"; // 変数
console.log(name); // 出力方法
console.log(name + "です。よろしくね！"); // 文字列結合
console.log(`みなさんこんにちは、${name}です。`); // 文字列の埋め込み テンプレートリテラル

/**
    MDN web docs
    https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/template_strings
    バッククォート（`）で囲まれた文字列の中では、${変数名} という形で変数の値を文字列に埋め込むことができます。
 */

// テンプレートリテラムの使用
const magic = "ファイア";
console.log(`${name}はモンスターの群れに遭遇した！`);
console.log(`${name}は魔法${magic}を使った。`);
console.log(`魔法${magic}でモンスター全滅した`);
console.log(`${name}はモンスターの群れに勝利した`);

/**
 * const 変数は再代入不可
 * letで宣言される再代入可能な変数もある
 */