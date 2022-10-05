'use strict';

// idをキーにして要素を取得

// getElementById：idによってエレメント(タグなどの要素)を取得
const e = document.getElementById('button');
// クリックした時の処理
e.addEventListener('click', () => {
	const result = document.getElementById('result');
	// innerTextプロパティでテキストだけを取得
	console.log(result.innerText);
}, false);

// タグ名をキーにして要素を取得
const e2 = document.getElementById('button2');
e2.addEventListener('click', () => {
	// 配列として取得する
	const elements = document.getElementsByTagName('div');
	for(let i = 0; i < elements.length; i++) {
		console.log(elements[i].innerText);
	}
}, false);

// name属性をキーにして要素を取得
const e3 = document.getElementById('button3');
e3.addEventListener('click', () => {
	// 配列として取得する
	const elements = document.getElementsByName('result');
	console.log(elements[0].value);
}, false);

// class属性をキーにして要素を取得
const e4 = document.getElementById('button4');
e4.addEventListener('click', () => {
	// 配列として取得する
	const elements = document.getElementsByClassName('foo');
	for(let i = 0; i < elements.length; i++) {
		console.log(elements[i].innerText);
	}
}, false);

// ノードの追加
// createElementメソッド：要素を作成(別途ドキュメントに追加する処理が必要)
// createTextNodeメソッド：テキストノードを作成(別途階層に追加する処理が必要)
// appendChildメソッド：指定された要素を現在の要素の最後の子要素として追加(戻り値は追加した子ノード)

const e5 = document.getElementById('button5');
e5.addEventListener('click', () => {
	const li =document.createElement('li'); // あくまでも作成のみ
	const text = document.createTextNode('test'); // あくまでも作成のみ
	li.appendChild(text); // liタグに「test」という文字列を追加
	list.appendChild(li); // liタグを追加(<li>test</li>が追加される)
}, false);

// ノードの置換
// replaceChildメソッド：指定した子ノードを置き換える(appendChildとremoveChildを同時に行う処理)
// setAttributeメソッド：属性とそのバリューを設定

const e6 = document.getElementById('button6');
e6.addEventListener('click', () => {
	const newList = document.createElement('li'); // liタグ作成
	newList.setAttribute('id', 'newList'); // newListというidをセット
	const newText= document.createTextNode('new element'); // 置換後のテキストを作成
	newList.appendChild(newText); // 作成したテキストを追加
	const oldList = document.getElementById('oldList'); // oldListというidが付いた要素を取得
	const ul = oldList.parentNode; // oldListの親ノード(ulタグ)をulに代入
	ul.replaceChild(newList, oldList); // ulの子要素(liタグ)をoldListからnewListに置換
}, false);

// ノードの削除
// removeChildメソッド：指定した子ノードを取り除く(取り除いたノードは再利用可能)

const e7 = document.getElementById('button7');
e7.addEventListener('click', () => {
	const parentElement = document.getElementById('list2'); // list2というidが付いた要素を取得
	const elements = parentElement.getElementsByTagName('li'); // liというタグが付いた要素を取得(配列)
	const removeIndex = elements.length - 1; // 要素の最後のindex番号を代入(4→3→2→1→0)
	parentElement.removeChild(elements[removeIndex]); // 親要素の子ノードを削除
}, false);

// テキストボックスに入力した内容をリストの最後の項目に追加
const e8 = document.getElementById('button8');
e8.addEventListener('click', () => {
	const textBox = document.getElementById('textBox');
	const li_test =document.createElement('li');
	const text1 = document.createTextNode(textBox.value);
	li_test.appendChild(text1);
	list1.appendChild(li_test);
}, false);
