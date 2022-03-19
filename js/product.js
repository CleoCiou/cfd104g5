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




// 撈資料哩 part1 
// 下面還有part2哦
function getProduct() {
    $.ajax({
        type: 'POST',
        url: 'phps/select.php',
        
        data: {

            table: 'product',
            joinTable: 'product_category',
            queryCol: "product.prodImage1 , product.prodImage2, product.prodImage3,product_category.cateType, product_category.cateName, product.prodName, FORMAT(price, 'C') price , product.prodspec, product.prodIntro, product.prodNo",
            joinOn: 'prodCateNo',
            condition: `product.prodNo=${localStorage.getItem('prodNumber')}`,
        },

        success: function(data) {
            if (data.msg !== false){
                console.log(data.msg);
                // 照片路徑變數 手鍊  
                let productImg = "images/shop/tarot/";
                
                // -要包最外層的div-
                // 左邊點小圖秀大圖
                let productRow =  `
                    <div class="product_inner_img_large">
                        <img id="large" src="${productImg}${data.msg[0].prodImage1}">
                    </div>

                    <div class="product_inner_img_small">
                        <a href="#" class="prodImage1">
                            <img src="${productImg}${data.msg[0].prodImage1}" class="small"/>
                        </a>
                        <a href="#" class="prodImage2">
                            <img src="${productImg}${data.msg[0].prodImage2}" class="small"/>
                        </a>
                        <a href="#" class="prodImage3">
                            <img src="${productImg}${data.msg[0].prodImage3}" class="small"/>
                        </a>
                    </div>
                     `;   

                // 右邊商品敘述
                let productTxt = `
                    <div>
                        <h2>
                            ${data.msg[0].cateType}${data.msg[0].cateName} - ${data.msg[0].prodName}
                        </h2>
                    </div>
                    
                    <h3>NT$${data.msg[0].price}元</h3>

                    <p>
                        ${data.msg[0].prodspec}
                    </p>
                    `;

                // 下面商品詳情
                let productDetail = `
                    <div>
                        <h3>商品詳情</h3>
                    </div>
                    <p>${data.msg[0].prodIntro}</p> 
                    `;

                // 貓頭鷹推薦商品
                
                // let owlTheme = `<div class="owl-carousel owl-theme ">`;
                // for (let i = 0; i < data.msg.length; i++) {

                //     owlTheme +=   `
                //         <a href="#">
                //             <img src="${productImg}${data.msg[i].prodImage1}" alt="推薦商品" ">
                //             <p>${data.msg[i].cateType}${data.msg[i].cateName} - ${data.msg[i].prodName}</p>
                //         </a>
                //     `;
                // }
                // owlTheme += `</div>`;

                $('.product_inner_img_left').append(productRow);
                $('.product_txt').append(productTxt);
                $('.product_detail_txt').append(productDetail);
                // $('.recommended_products_img').append(owlTheme);

                // $(".owl-carousel").owlCarousel({
                //     loop: true, // 循環播放
                //     margin: 10, // 外距 10px
                //     dots: true,
                //     nav: false, // 顯示點點
                //     responsive: {
                //         0: {
                //             items: 2 // 螢幕大小為 0~600 顯示 1 個項目
                //         },
                //         980: {
                //             items: 5 // 螢幕大小為 1000 以上 顯示 5 個項目
                //         }
                //     }
                // });

                // 小圖換大圖
                let smalls = document.getElementsByClassName("small");
                for(let i=0; i<smalls.length; i++){
                    smalls[i].onclick = showLarge;
                }
                
            }
        },
        error: function() {
            console.log('ajax error');
        }
    });
}
window.addEventListener('load', getProduct);


// 撈推薦商品哩 part2 
// 因為上面part1商品變數已設定為單筆localStorage 
// 所以要重新再設一個變數給推薦商品

function getRecommended() {
    $.ajax({
        type: 'POST',
        url: 'phps/select.php',
        
        data: {
            table: 'product',
            joinTable: 'product_category',
            queryCol: 'product.prodImage1 , product_category.cateType, product_category.cateName, product.prodName,  product.prodNo',
            joinOn: 'prodCateNo',
            condition:"product_category.prodCateNo = 1001",
        },

        success: function(data) {
            if (data.msg !== false){
                console.log(data.msg);
                let recProductImg = "images/shop/tarot/";
                let owlTheme = `<div class="owl-carousel owl-theme ">`;
                for (let i = 0; i < data.msg.length; i++) {

                    owlTheme +=   `
                        <a class="item">
                            <div class="prod_No">${data.msg[i].prodNo}</div>
                            <img src="${recProductImg}${data.msg[i].prodImage1}" alt="推薦商品" ">
                            <p>${data.msg[i].cateType}${data.msg[i].cateName} - ${data.msg[i].prodName}</p>
                        </a>
                    `;
                }
                owlTheme += `</div>`;

                $('.recommended_products_img').append(owlTheme);

                $(".owl-carousel").owlCarousel({
                    loop: true, // 循環播放
                    margin: 10, // 外距 10px
                    dots: true,
                    nav: false, // 顯示點點
                    responsive: {
                        0: {
                            items: 2 // 螢幕大小為 0~600 顯示 1 個項目
                        },
                        980: {
                            items: 5 // 螢幕大小為 1000 以上 顯示 5 個項目
                        }
                    }
                });

                

            }
        },
        error: function() {
            console.log('ajax error');
        }
    });

}
// 商城切換到商品頁面使用click事件
$(document).on('click','.item',function(){
    // alert($(this).find('.prod_No').text());
    localStorage.setItem('prodNumber',$(this).find('.prod_No').text());
    window.location.href = "product.html";
});
window.addEventListener('load', getRecommended);

