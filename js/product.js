// 點小圖秀大圖
function showLarge(e){
  let small = e.target;
  document.getElementById("large").src = small.src ;
}

function init(){
	let smalls = document.getElementsByClassName("small");
	for(let i=0; i<smalls.length; i++){
		smalls[i].onclick = showLarge;
	}
}

window.addEventListener("load", init, false);

// 推薦商品 貓頭鷹套件

$(".owl-carousel").owlCarousel({
    loop: true, // 循環播放
    margin: 10, // 外距 10px
    dots: false,
    nav: true, // 顯示點點
    responsive: {
        0: {
            items: 1 // 螢幕大小為 0~600 顯示 1 個項目
        },
        980: {
            items: 3 // 螢幕大小為 1000 以上 顯示 5 個項目
        }
    }
});
