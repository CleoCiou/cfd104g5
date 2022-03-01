$(function() {
    $('.menu_link').click(function(){
        $('.sub_menu').slideUp();
        $(this).siblings('.sub_menu').slideToggle();
    })
})