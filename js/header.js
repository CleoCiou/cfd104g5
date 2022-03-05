$(function() {
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
s
})