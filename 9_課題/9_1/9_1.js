// 画像index
let slideIndex = 0;
showSlides();

function showSlides() {
    // 画像クリア"none"
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // TODO 丸点クリア(active削除)


    // 次の画像へ
    slideIndex++;

    // TODO 画像indexは最後画像の場合、最初に戻る


    // TODO 画像表示"block"

    // TODO 丸点表示(active追加)

    // 切替時間3秒で再実行
    setTimeout(showSlides, 3000); 
}