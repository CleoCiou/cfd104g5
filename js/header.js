$(function() {
    // 確認是否已登入
    // 若已登入，抓取session值
    if (getSessionData() !== false) {
        $('header .pc_login p').text('登出');
        $('header .menu_login').text('登出');
    }

    // 點擊登入打開燈箱
    // 點擊登出刪除session資訊
    function showLoginPanel(e) {
        if ($('header .pc_login p').text() === '登出') {
            logout();
        }
        else {
            $('section.login').removeClass('display_none');
        }
    }

    $('header .pc_login').click(showLoginPanel)
    $('header .menu_login').click(showLoginPanel);


    $('header .menu_link').click(function(){
        // $('.sub_menu').slideUp();
        $(this).siblings('header .sub_menu').slideToggle();
    })
    $('header .menu_link').click(function(){
        $(this).toggleClass("click_btn");
    })
    $('.sub_menu li a').click(function(){
        $(this).toggleClass("click_sub_menu");
    })

})

// header縮上去的transition
$(window).scroll(function() {
    if ($(document).scrollTop() > 0) {
        $('#mainHeader').addClass('nav_animation');
    } else {
        $('#mainHeader').removeClass('nav_animation');
    }
});

// 滑鼠滾輪控制header的伸縮
function doFirst(){
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("mainHeader").style.top = "0";
        } else {
            document.getElementById("mainHeader").style.top = "-75px";
        }
        prevScrollpos = currentScrollPos;
    }
}

window.addEventListener('load', doFirst);



