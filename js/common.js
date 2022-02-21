// 網頁載入前置設定 by PIN
function init() {
    // 取得<head>
    let head = document.querySelectorAll('head')[0];
    
    // 插入goole fonts連結
    let link  = document.createElement('link');
    link.rel  = 'preconnect';
    link.href = 'https://fonts.googleapis.com';
    head.appendChild(link);

    link  = document.createElement('link');
    link.rel  = 'preconnect';
    link.href = 'https://fonts.gstatic.com';
    head.appendChild(link);

    link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600&family=Shippori+Mincho:wght@400;500;600;700;800&display=swap';
    head.appendChild(link);

    // 插入css連結
    // reset.css
    link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/reset.css';
    head.appendChild(link);
    // style.css
    link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/style.css';
    // link.href = 'css/common.css';
    head.appendChild(link);

    // 網頁瀏覽器頁籤圖示
    link  = document.createElement('link');
    link.rel  = 'shortcut icon';
    link.href = 'images/logo_ico_square.ico';
    head.appendChild(link);

    // 插入js連結
    // jquery
    link  = document.createElement('script');
    link.src = 'js/jquery.js';
    head.appendChild(link);
}
window.addEventListener('load', init);