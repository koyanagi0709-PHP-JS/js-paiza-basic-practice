// 配列の操作
const shoppingList = ["apple", "orange", "banana", "lemon"];
console.log(shoppingList);

//メロンを追加 pushを使用
shoppingList.push("melon");
//イチゴを追加
shoppingList.push("strawberry");
console.log(shoppingList.length);
console.log(shoppingList);

//メロンとイチゴを追加 pushにカンマ区切りで追加
shoppingList.push("melon","strawberry");
console.log(shoppingList.length);
console.log(shoppingList);

// 末尾の要素を取り除く pop
shoppingList.pop();
console.log(shoppingList.length);
console.log(shoppingList);

// 末尾の要素を取り除く 戻り値を取得
const Item = shoppingList.pop();
console.log(`${Item}が取り除かれました。`)
console.log(shoppingList.length);
console.log(shoppingList);

// 配列のインデックス１から２つ削除する
shoppingList.splice(1,2);
console.log(shoppingList);

// 配列のインデックス１から２つ削除する
const deletedItems = shoppingList.splice(1,2);
console.log(deletedItems);
console.log(shoppingList);