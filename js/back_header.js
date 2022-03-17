// 點擊登入打開燈箱
// 點擊登出刪除session資訊
function showLoginPanel() {
    logout();
    $('section.back_login').removeClass('display_none');
}

function back_doFirst() {
    // 確認是否已登入
    // 若已登入，抓取session值
    // if (getSessionDataBack() !== false) {
    //     $('.back_logout').text('登出');
    // }
    // else {
    //     showLoginPanel();
    // }
    if (getSessionDataBack() === false) {
        $('section.back main').css({opacity: 0});
        alert('請先登入');
        $('section.back_login').removeClass('display_none');
        // document.body.classList.add('login_hidden');
    }
    else {
        // getMemberData();
    }
    document.querySelector('.back_logout').addEventListener('click', function() {
        // back_logout();
        showLoginPanel();
    });
    // console.log(1);
}
window.addEventListener('load', back_doFirst);