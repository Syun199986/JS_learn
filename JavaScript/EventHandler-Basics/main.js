'use strict';

// イベントとイベントハンドラの関連付け

// イベントとは：ブラウザ上でユーザーが行う様々な動作
// マウスクリック、ダブルクリック、ポインタ移動、マウスボタンを押す・離す など

// イベントハンドラとは：イベントの発生をきっかけとして何らかの処理を実行する

// "on"プロパティ
// (オブジェクト名).on(イベント名) = () => {
// 	(イベントハンドラ)
// };

const e = document.getElementById('button');
e.onclick = () => {
	console.log('clicked');
};

// loadイベントとは：関連づけられた要素を読み終わった時に発生するイベント
// 何らかの処理を、"ページが完全に読み込み終わったこと"を検知して実行する時に使用(画像読み込みも含む)

window.onload = () => {
	console.log('load event');
};

// addEventListener
// (要素オブジェクト).addEventListener((イベントの種類), () => {
// 	(イベントハンドラ)
// }, false);
// ※最後のfalse → イベントの伝搬形式を指定(利用頻度は低いため、通常はfalseでOK)

const e2 = document.getElementById('button2');
e2.addEventListener('click', () => {
	console.log('clicked2');
}, false);