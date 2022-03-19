// 使用套件 jquery、gsap
function checkLogin() {
    let id = $("#login_memId")[0].value;
    let pwd = $("#login_memPwd")[0].value;
    if (!id || !pwd) {
        alert('帳號及密碼皆為必填欄位');
        return;
    }

    $.ajax({
        type: 'POST',
        url: 'phps/check_login.php',
        data: {
            // 查詢的資料表
            id,
            pwd
        },
        async: false,
        success: function(data) {
            data = JSON.parse(data);
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


// ===== 註冊 ===== //
// 驗證輸入欄位
// 驗證(元素, 條件, 正確訊息, 錯誤訊息)
function verify(el, condition, msg, errMsg) {
    if (condition) {
        checkCorrect(el);
        el.text(msg);
    }
    else {
        checkError(el);
        el.text(errMsg);
    }
}

// 驗證正確動畫
function checkCorrect(el) {
    gsap.to(el, {
        color: '#CFB886',
        duration: .5,
        // textShadow: '#fffa 1px 0 10px'
    })
}

// 驗證錯誤動畫
function checkError(el) {
    gsap.to(el, {
        color: '#9999',
        duration: .5,
        // textShadow: 'none'
    })
}

// 開啟驗證框
function openVerify(el) {
    gsap.to(el, {
        height: 'auto',
        duration: .5
    })
}

// 收起驗證框
function closeVerify(el) {
    gsap.to(el, {
            height: 0,
            duration: .5
        })
    }
    
    // 確認再次輸入是否與密碼一致
    function checkPwd() {
        if ($("#confirm_pwd").val() === $("#memPwd").val() && $("#confirm_pwd").val() !== '') {
            gsap.to($(".item.confirm_pwd + .verify ul li:nth-child(1)"), {
                color: '#CFB886',
                duration: .3
            })
            $(".item.confirm_pwd + .verify ul li:nth-child(1)").text('密碼一致');
        }
        else {
            gsap.to($(".item.confirm_pwd + .verify ul li:nth-child(1)"), {
                color: '#9999',
                duration: .3
            })
            errMsg = ($("#memPwd").val() === '') ? '密碼不可為空' : '密碼不符';
            $(".item.confirm_pwd + .verify ul li:nth-child(1)").text(errMsg);
        }
    }
    
    // 切換輸入框範圍
    // 切換(要關閉的, 要開啟的)
    function switchPanel(closeEl, openEl) {
        gsap.to(closeEl, {
            height: 0,
            duration: .1
        })
        gsap.to(openEl, {
            height: 'auto',
            opacity: 1,
            ease: Back.easeOut.config(1.7),
            duration: 1
        })
    }
    
$(function() {
    // === 按鈕監控 === //
    // 註冊 | 登入
    $(".secondary_btn").click( (e) => {
        // e.preventDefault();
        if (e.target.innerText === '登入') {
            checkLogin();
        }
        else if (e.target.innerText === '註冊') {
            alert('註冊成功！');
            window.location.reload();
        }
    })
    // 下一步
    $(".next_step").click( (e) => {
        if ($(".account_info").css('height') !== '0px') {
            switchPanel($(".account_info"), $(".mem_info"));
            $(".last_step").css({display: 'inline-block'});
            $(".next_step").text('註冊');
        }
        else if ($(".mem_info").css('height') !== '0px') {
            switchPanel($(".mem_info"), $(".astrologist_info"));
            $(".next_step").text('註冊');
        }
    })
    // 上一步
    $(".last_step").click( (e) => {
        if ($(".mem_info").css('height') !== '0px') {
            switchPanel($(".mem_info"), $(".account_info"));
            $(".last_step").css({display: 'none'});
            $(".next_step").text('下一步');
        }
        else if ($(".astrologist_info").css('height') !== '0px') {
            switchPanel($(".astrologist_info"), $(".mem_info"));
            $(".next_step").text('下一步');
        }
    })


    // === 輸入框監控 === //
    $("input").focus( (e) => {
        e.target.parentNode.style.boxShadow = "0 0 1em 0 #CFB88665";
    })
    $("input").focusout( (e) => {
        e.target.parentNode.removeAttribute('style');
    })

    // 成為占卜師需多填占卜師資料
    $("input[type=radio][name=identity]").change( (e) => {
        if (e.target.id === 'astrologist') {
            $(".next_step").text('下一步');
        }
        else {
            $(".next_step").text('註冊');
        }
        // 動
        gsap.fromTo($(".next_step"), {
            translateY: '-1em',
            backgroundColor: '#ffe09c'
        },
        {
            translateY: 0,
            duration: .8,
            backgroundColor: '#CFB886',
            repeat: 1,
            ease: Power0.easeNone,
            onComplete: () => {
                $(".next_step").removeAttr('style');
            }
        })
    })


    // === 帳號資訊 === ///
    // === 帳號 === //
    // 開啟驗證框
    $("#memId").focus( () => {
        openVerify($(".item.account + .verify"));
    });
    // 輸入時驗證
    $("#memId").keyup( () => {
        let el = $(".item.account + .verify ul li:nth-child(1)");
        verify(el, $("#memId").val().length > 0, '帳號可使用', '帳號不可為空');
    });
    // 收起驗證框
    $("#memId").focusout( () => {
        closeVerify($(".item.account + .verify"));
    })


    // === 密碼 === //
    // 開啟驗證框
    $("#memPwd").focus( () => {
        openVerify($(".item.password + .verify"));
    });
    // 輸入時驗證密碼
    $("#memPwd").keyup( () => {
        let reg = '';
        let el = '';

        // 長度檢查
        el = $(".item.password + .verify ul li:nth-child(1)");
        verify(el, $("#memPwd").val().length > 5);

        // 大寫檢查
        el = $(".item.password + .verify ul li:nth-child(2)");
        reg = /[A-Z]/;
        verify(el, reg.test($("#memPwd").val()));

        // 小寫檢查
        el = $(".item.password + .verify ul li:nth-child(3)");
        reg = /[a-z]/;
        verify(el, reg.test($("#memPwd").val()));

        // 數字檢查
        el = $(".item.password + .verify ul li:nth-child(4)");
        reg = /[0-9]/;
        verify(el, reg.test($("#memPwd").val()));
        
        // 檢查再次輸入是否一致
        checkPwd();
    });
    // 收起密碼驗證框
    $("#memPwd").focusout( () => {
        closeVerify($(".item.password + .verify"));
    })
    
    // === 確認密碼 === //
    $("#confirm_pwd").focus( () => {
        openVerify($(".item.confirm_pwd + .verify"));
    });
    // 輸入時驗證
    $("#confirm_pwd").keyup(checkPwd);
    
    // 收起驗證框
    $("#confirm_pwd").focusout( () => {
        closeVerify($(".item.confirm_pwd + .verify"));
    })


    // === 基本資訊 === //    
    // === 大頭貼 by JC === //
    document.getElementById("memImage").onchange = fileChange;
    function fileChange(){
        let file = document.getElementById("memImage").files[0];
        let readFile = new FileReader();
        readFile.readAsDataURL(file);
        readFile.addEventListener("load",function(){
            let image = document.getElementById("memImgBox");
            image.src = readFile.result;
        });
    }

    // === 姓名 === //
    // 開啟驗證框
    $("#memName").focus( () => {
        openVerify($(".item.memName + .verify"));
    });
    // 輸入時驗證
    $("#memName").keyup( () => {
        let el = $(".item.memName + .verify ul li:nth-child(1)");
        verify(el, $("#memName").val().length > 0, $("#memName").val()+' 你好!', '姓名為必填欄位');
    });
    // 收起驗證框
    $("#memName").focusout( () => {
        closeVerify($(".item.memName + .verify"));
    })


    // === 信箱 === //
    // 開啟驗證框
    $("#email").focus( () => {
        openVerify($(".item.email + .verify"));
    });
    // 輸入時驗證
    $("#email").keyup( () => {
        let reg = '';
        let el = '';

        // 格式檢查
        el = $(".item.email + .verify ul li:nth-child(1)");
        verify(el, $("#email").val().length > 0, '信箱為必填欄位');

        // 格式檢查
        el = $(".item.email + .verify ul li:nth-child(2)");
        reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
        verify(el, reg.test($("#email").val()),'E-mail信箱格式正確');
    });
    // 收起驗證框
    $("#email").focusout( () => {
        closeVerify($(".item.email + .verify"));
    })


   // === 電話 === //
    // 開啟驗證框
    $("#tel").focus( () => {
        openVerify($(".item.tel + .verify"));
    });
    // 輸入時驗證
    $("#tel").keyup( () => {
        let reg = '';
        let el = '';

        // 格式檢查
        el = $(".item.tel + .verify ul li:nth-child(1)");
        reg = /^(09)+[0-9]{8}/;
        verify(el, reg.test($("#tel").val()),'手機號碼格式正確');
    });
    // 收起驗證框
    $("#tel").focusout( () => {
        closeVerify($(".item.tel + .verify"));
    })


})