function init(){
    // 開始推算按鈕
    let startBtn = document.getElementById('startBtn');
    startBtn.addEventListener("click", showForm);

    //底圖 轉轉
    let tween =  gsap.to('#canvas',{
        rotation: 360,
        duration: 25,
        repeat: -1,
        ease: "none",
    });


    //滑鼠控制 移入表單的時候底圖不要轉
    let formItem = document.getElementById('form_box');
    let bg = document.getElementById('canvas');
    formItem.addEventListener('mouseenter', function(){
        // console.log('enter:移入');
        tween.pause();
    });
    formItem.addEventListener('mouseleave', function(){
        // console.log('leave:移出');
        tween.play();
    });
}

//顯示表單
function showForm(){
    let formItem = document.getElementById('formItem');
    if(formItem.classList.contains('start_hidden') == true){
        formItem.classList.remove('start_hidden');
        startBtn.classList.add('start_hidden');
        
        let tl = gsap.fromTo('#form_box',{
            opacity: 0,
        },{
            opacity: 1,
            duration: 0.8,
        });
    }    
}



window.addEventListener("load", init);