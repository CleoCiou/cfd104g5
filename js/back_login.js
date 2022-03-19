// 使用套件 jquery、gsap
function checkBackLogin() {
    let id = $("#backLoginAccount")[0].value;
    let pwd = $("#backLoginPsw")[0].value;
    if (!id || !pwd) {
        alert('帳號及密碼皆為必填欄位');
        return;
    }
    // console.log(id)
    $.ajax({
        type: 'POST',
        url: 'phps/back_check_login.php',
        data: {
            // 查詢的資料表
            id,
            pwd
        },
        async: false, //非同步請求
        success: function(data) {
            data = JSON.parse(data); //字串轉物件
            if (data.msg === true) {
                alert('登入成功');
                location.reload();
            }
            else {
                alert(data.msg);
            }
        },
        error: function() {
            console.log('ajax error');
        }
    });
}

// === 按鈕監控 === //
// 註冊 | 登入

function doFirst() {
    if (document.querySelector('.back_login_btn')) { 
    //要寫判斷有沒有.back_login_btn
        document.querySelector('.back_login_btn').addEventListener('click', function(e) {
            if (e.target.innerText === '登入') {
                checkBackLogin();
            }
        })
    }
}
window.addEventListener('load', doFirst);