// 配列
const shoppingList = [
    "apple",
    "orange",
    "banana",
    "lemon"
];
console.log(shoppingList);

//配列の長さを取得する
console.log(shoppingList.length);
// 配列の先頭の要素を表示する
console.log(shoppingList[0]);
console.log(shoppingList[1]);
console.log(shoppingList[2]);
console.log(shoppingList[3]);

// 配列の要素を変更する 変数がconstで定義されていても要素は変更することができる。
shoppingList[0] = "strawberry";
console.log(shoppingList);