// 回傳存在server端的session值
// 在js中的用法範例:
// let sessionData = getSessionData();
// console.log(sessionData.userId);
function getSessionData() {
    let sessionData;
    
    $.ajax({
        type: 'POST',
        url: 'phps/getSessionData.php',
        async: false,
        success: function(data) {
            sessionData = JSON.parse(data);
        },
        error: function() {
            console.log('ajax error');
        }
    });
    
    return sessionData;
}

// 登出，刪除session資料
function logout() {
    $.ajax({
        type: 'POST',
        url: 'phps/check_login.php',
        data: {
            logout: true,
        },
        async: false,
        success: function(data) {
            sessionData = JSON.parse(data);
        },
        error: function() {
            console.log('ajax error');
        }
    });
    
    location.reload();
}