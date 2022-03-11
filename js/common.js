// 回傳存在server端的session值
// 在js中的用法範例:
// let sessionData = getSessionData();
// console.log(sessionData.userId);
function getSessionData() {
    let sessionData;
    
    $.ajax({
        type: 'POST',
        url: 'php/getSessionData.php',
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