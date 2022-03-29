// 検索入力
let myInput = document.getElementById("myInput");

// 入力イベント
myInput.addEventListener("keyup", function () {
    let filter, ul, li, a;
    filter = this.value.toUpperCase();
    ul = document.getElementById("myList");
    li = ul.getElementsByTagName('li');

    // リスト中で入力項目を繰り返し探す
    for (let i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        // 大小文字を区別しない
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            // 入力項目を含む場合、表示する
            li[i].style.display = "";
        } else {
            // 入力項目を含まれない場合は非表示
            li[i].style.display = "none";
        }
    }
});
