function init(){

        
        let articleContent = document.querySelectorAll(".line_middle");

        for(let i = 0; i<articleContent.length; i++){
            articleContent[i].onclick = show;
        }

        // 開文章燈箱
        let articleView = document.getElementById("articleView");

        function show(){
            // alert('hi');
            if(articleView.classList.contains("articleHidden") == true){
                articleView.classList.remove("articleHidden");
                articleView.classList.add("articleShow");
            }
        }

        // 關文章燈箱
        let iconClose = document.getElementById("close");
        function close(){
            if(articleView.classList.contains("articleShow") == true){
            articleView.classList.add("articleHidden");
            }
        }
        iconClose.addEventListener('click', close);

        // 開檢舉燈箱
        let noticeBtn = document.getElementById('notice_btn');
        let noticeBoard = document.getElementById('notice_board');
        noticeBtn.addEventListener('click', function(){
            if(noticeBoard.classList.contains("articleHidden") == true){
                noticeBoard.classList.remove("articleHidden");
                noticeBoard.classList.add("noticeShow");
            }
        })

        // 關檢舉燈箱
        let closeNotice = document.getElementById('close_notice');
        function closeN(){
            if(noticeBoard.classList.contains("noticeShow") == true){
                noticeBoard.classList.remove("noticeShow");
                noticeBoard.classList.add("articleHidden");
            }
        }
        closeNotice.addEventListener('click', closeN);
}

window.addEventListener("load", init);