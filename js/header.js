$(function() {
    $('header .menu_link').click(function(){
        // $('.sub_menu').slideUp();
        $(this).siblings('header .sub_menu').slideToggle();
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