let current = 0;
let items = document.querySelectorAll(".slider_item");

let handleNext = () => {
  items[current].style.animation = "hideRight 1.5s forwards";
  items[current >= items.length - 1 ? 0 : current + 1].style.animation =
    "showRight 1.5s forwards";
  if (current < items.length - 1) {
    current++;
  } else {
    current = 0;
  }
};

let handlePrev = () => {
  items[current].style.animation = "hideLeft 1.5s forwards";
  items[current > 0 ? current - 1 : 2].style.animation =
    "showLeft 1.5s forwards";
  if (current > 0) {
    current--;
  } else {
    current = items.length - 1;
  }
};

window.onload = function () {
  setInterval("handleNext()", 3000);
};

// 撈資料哩
function getProduct() {
  

  $.ajax({
      type: 'POST',
      url: 'phps/select.php',
      
      data: {

          table: 'product',
          joinTable: 'product_category',
          queryCol: "product.prodImage1 , product.prodImage2, product.prodImage3,product_category.cateType, product_category.cateName, product.prodName, FORMAT(price, 'C') price , product.prodspec, product.prodIntro,product.prodNo",
          joinOn: 'prodCateNo',
          // condition: "product_category.prodCateNo = 1001",
          
      },

      success: function(data) {
          if (data.msg !== false){
              console.log(data.msg);
              // 照片路徑變數  
              let productImg = "images/shop/tarot/";
              // -要包最外層的div-
              // 商城
              let shopRow = ` <div class="row shopRow">`;
              for (let i = 0; i < data.msg.length; i++) {
                shopRow +=   `
                  <a class="item">
                    <div class="img_box">
                      <div class="prod_No">${data.msg[i].prodNo}</div>
                      <span >
                        <img src="${productImg}${data.msg[i].prodImage1}" />
                        <div class="txt_box">
                          <h4>${data.msg[i].cateType}${data.msg[i].cateName} - ${data.msg[i].prodName}</h4>
                          <p>NT$ ${data.msg[i].price}</p>
                        </div>
                      </span>
                    </div>
                    <div class="icon_box">
                      <span><img src="images/icon/icon_shop_eye.svg"></span>
                    </div>
                  </a>
                  `;
              }
              shopRow += `</div>`;

              
              $('.product_box').append(shopRow);
              
              

              
          }
      },
      error: function() {
          console.log('ajax error');
      }
  });
}
//全部btn
$('#product_all').on('click',function(){
  $('.item').remove();
  $.ajax({
    type: 'POST',
    url: 'phps/select.php',
    
    data: {

        table: 'product',
        joinTable: 'product_category',
        queryCol: "product.prodImage1 , product.prodImage2, product.prodImage3,product_category.cateType, product_category.cateName, product.prodName,FORMAT(price, 'C') price, product.prodspec, product.prodIntro,product.prodNo",
        joinOn: 'prodCateNo',
        
    },

    success: function(data) {
        if (data.msg !== false){
            console.log(data.msg);
            // 照片路徑變數  
            let productImg = "images/shop/tarot/";
            // -要包最外層的div-
            // 商城
            let shopRow = ` <div class="row">`;
            for (let i = 0; i < data.msg.length; i++) {
              shopRow +=   `
                <a class="item">
                  <div class="img_box">
                    <div class="prod_No">${data.msg[i].prodNo}</div>
                    <span >
                      <img src="${productImg}${data.msg[i].prodImage1}" />
                      <div class="txt_box">
                        <h4>${data.msg[i].cateType}${data.msg[i].cateName} - ${data.msg[i].prodName}</h4>
                        <p>NT$ ${data.msg[i].price}</p>
                      </div>
                    </span>
                  </div>
                  <div class="icon_box">
                    <span><img src="images/icon/icon_shop_eye.svg"></span>
                  </div>
                </a>
                `;
            }
            shopRow += `</div>`;

            
            $('.product_box').append(shopRow);
            
            

            
        }
    },
    error: function() {
        console.log('ajax error');
    }
});
});
//手鍊btn
$('#product_wristband').on('click',function(){
    $('.item').remove();
    $.ajax({
      type: 'POST',
      url: 'phps/select.php',
      
      data: {

          table: 'product',
          joinTable: 'product_category',
          queryCol: "product.prodImage1 , product.prodImage2, product.prodImage3,product_category.cateType, product_category.cateName, product.prodName,FORMAT(price, 'C') price, product.prodspec, product.prodIntro,product.prodNo",
          joinOn: 'prodCateNo',
          condition: "product_category.prodCateNo = 1001",
          
      },

      success: function(data) {
          if (data.msg !== false){
              console.log(data.msg);
              // 照片路徑變數  
              let productImg = "images/shop/tarot/";
              // -要包最外層的div-
              // 商城
              let shopRow = ` <div class="row">`;
              for (let i = 0; i < data.msg.length; i++) {
                shopRow +=   `
                  <a class="item">
                    <div class="img_box">
                      <div class="prod_No">${data.msg[i].prodNo}</div>
                      <span >
                        <img src="${productImg}${data.msg[i].prodImage1}" />
                        <div class="txt_box">
                          <h4>${data.msg[i].cateType}${data.msg[i].cateName} - ${data.msg[i].prodName}</h4>
                          <p>NT$ ${data.msg[i].price}</p>
                        </div>
                      </span>
                    </div>
                    <div class="icon_box">
                      <span><img src="images/icon/icon_shop_eye.svg"></span>
                    </div>
                  </a>
                  `;
              }
              shopRow += `</div>`;

              
              $('.product_box').append(shopRow);
              
              

              
          }
      },
      error: function() {
          console.log('ajax error');
      }
  });
});
//項鍊btn
$('#product_necklace').on('click',function(){
  $('.item').remove();
  $.ajax({
    type: 'POST',
    url: 'phps/select.php',
    
    data: {

        table: 'product',
        joinTable: 'product_category',
        queryCol: "product.prodImage1 , product.prodImage2, product.prodImage3,product_category.cateType, product_category.cateName, product.prodName, FORMAT(price, 'C') price , product.prodspec, product.prodIntro,product.prodNo",
        joinOn: 'prodCateNo',
        condition: "product_category.prodCateNo = 1002",
        
    },

    success: function(data) {
        if (data.msg !== false){
            console.log(data.msg);
            // 照片路徑變數  
            let productImg = "images/shop/tarot/";
            // -要包最外層的div-
            // 商城
            let shopRow = ` <div class="row">`;
            for (let i = 0; i < data.msg.length; i++) {
              shopRow +=   `
                <a class="item">
                  <div class="img_box">
                    <div class="prod_No">${data.msg[i].prodNo}</div>
                    <span >
                      <img src="${productImg}${data.msg[i].prodImage1}" />
                      <div class="txt_box">
                        <h4>${data.msg[i].cateType}${data.msg[i].cateName} - ${data.msg[i].prodName}</h4>
                        <p>NT$ ${data.msg[i].price}</p>
                      </div>
                    </span>
                  </div>
                  <div class="icon_box">
                    <span><img src="images/icon/icon_shop_eye.svg"></span>
                  </div>
                </a>
                `;
            }
            shopRow += `</div>`;

            
            $('.product_box').append(shopRow);
            
            

            
        }
    },
    error: function() {
        console.log('ajax error');
    }
});
});
//幸運石btn
$('#product_lucky_stone').on('click',function(){
  $('.item').remove();
  $.ajax({
    type: 'POST',
    url: 'phps/select.php',
    
    data: {

        table: 'product',
        joinTable: 'product_category',
        queryCol: "product.prodImage1 , product.prodImage2, product.prodImage3,product_category.cateType, product_category.cateName, product.prodName, FORMAT(price, 'C') price , product.prodspec, product.prodIntro,product.prodNo",
        joinOn: 'prodCateNo',
        condition: "product_category.prodCateNo = 1003",
        
    },

    success: function(data) {
        if (data.msg !== false){
            console.log(data.msg);
            // 照片路徑變數  
            let productImg = "images/shop/tarot/";
            // -要包最外層的div-
            // 商城
            let shopRow = ` <div class="row">`;
            for (let i = 0; i < data.msg.length; i++) {
              shopRow +=   `
                <a class="item">
                  <div class="img_box">
                    <div class="prod_No">${data.msg[i].prodNo}</div>
                    <span >
                      <img src="${productImg}${data.msg[i].prodImage1}" />
                      <div class="txt_box">
                        <h4>${data.msg[i].cateType}${data.msg[i].cateName} - ${data.msg[i].prodName}</h4>
                        <p>NT$ ${data.msg[i].price}</p>
                      </div>
                    </span>
                  </div>
                  <div class="icon_box">
                    <span><img src="images/icon/icon_shop_eye.svg"></span>
                  </div>
                </a>
                `;
            }
            shopRow += `</div>`;

            
            $('.product_box').append(shopRow);
            
            

            
        }
    },
    error: function() {
        console.log('ajax error');
    }
});
});


// 商城切換到商品頁面使用click事件
$(document).on('click','.item',function(){
  // alert($(this).find('.prod_No').text());
  localStorage.setItem('prodNumber',$(this).find('.prod_No').text());
  window.location.href = "product.html";
});
window.addEventListener('load', getProduct);

