$(function() {
    $('header .menu_link').click(function(){
        // $('.sub_menu').slideUp();
        $(this).siblings('header .sub_menu').slideToggle();
    })
})