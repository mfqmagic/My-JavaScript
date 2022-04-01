// ボタンタグを取得
let btn = document.getElementsByTagName("button")[0];

// クリックListenerを追加
btn.addEventListener("click", function () {
    let inputTxt = document.getElementById("input");
    inputTxt.value = parseInt(inputTxt.value) + parseInt(this.value);
});