// strictモードの宣言(エラーを厳格にチェック)
'use strict';

// 変数(let)宣言
// 再代入可能
// 再宣言不可
let x;
console.log(x);
x = 1;
console.log(x);

// 文字列(JSの文字列ではシングルクォート('')を用いるのが一般的)
let str = 'Test';
console.log(str);

// 複数宣言可
let d, e, f;

// const(定数)宣言
// 1.再代入不可
// 2.初期化を同時に行う
const a = 1;

// 文字列のconst宣言
const prefecture = 'Tokyo';

// 変数(var)宣言
// 再代入、再宣言どちらも可能
var b = 1;
var b = 2;

// 命名規則について：(ローワー)キャメルケースが一般的
// 大文字小文字の区別あり
let color;
let colorName;
let myColorName;

// エスケープシーケンスの使用
console.log('Hello! I\'m Shun Sakai.');
console.log('\¥ \t AAA \n BBB');

// インクリメント、デクリメント
// 前置、後置どちらも使用可能
let numInc = 10;
let numDec = 10;
numInc++;
numDec--;
console.log('numInc = ' + numInc + ', numDec = ' + numDec);

// if文
let testNum = 50;

if (testNum >= 100){
	console.log('100以上の値です');
} else if (testNum == 50) {
	console.log('50です');
} else {
	console.log('100未満の値です')
}

// 比較演算子==と===の違い
// ===演算子について、内容も型も同じの場合はtrueを返す
let num = 100;
let str1 = '100';

if (num === str1) {
	console.log('同じ');
} else {
	console.log('同じでない');
}

// switch文
// defaultのbreakは省略可能
const n = 1;

switch (n) {
	case 1:
		console.log('one');
		break;
	case 2:
		console.log('two');
		break;
	case 3:
		console.log('three');
		break;
	default:
		console.log('other');
		break;
}

// for文
for (let i = 1; i <= 3; i++){
	console.log(i);
}

// while文
let j = 1;
while (j <= 3) {
	console.log(j);
	j++;
}

// do while文
let k = 1;
do {
	console.log(k);
	k++;
} while (k <= 3);

// 配列操作
const colors = ['Red', 'Green', 'Blue'];
// lengthプロパティ使用
for(let i = 0; i < colors.length; i++){
	console.log(colors[i]);
}

// 連想配列
const user = {name:'酒井駿', gender:'man', birth:'1999/8/6'}
console.log(user.name);
console.log(user['gender']);

// function命令
function getRectangle_1(height, width) {
	return height * width;
}
console.log('面積は' + getRectangle_1(3, 5));

// 関数リテラル(関数名を持たない)
const getRectangle_2 = function(height, width) {
	return height * width;
}
console.log('面積は' + getRectangle_2(3, 5));

// Functionコンストラクタ(使用頻度低)
const getRectangle_3 
	= new Function('height', 'width', 'return height * width');
console.log('面積は' + getRectangle_3(3, 5));

// アロー関数
const getRectangle_4 = (height, width) => {
	return height * width;
}
console.log('面積は' + getRectangle_4(3, 5));
