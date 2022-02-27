function init(){

        
        let articleContent = document.querySelectorAll(".line_middle");

        for(let i = 0; i<articleContent.length; i++){
            articleContent[i].onclick = show;
        }

        let articleView = document.getElementById("articleView");

        function show(){
            // alert('hi');
            if(articleView.classList.contains("articleHidden") == true){
                articleView.classList.remove("articleHidden");
                articleView.classList.add("articleShow");
            }
        }

        let iconClose = document.getElementById("close");
        function close(){
            if(articleView.classList.contains("articleShow") == true){
            articleView.classList.add("articleHidden");
            }
        }

        iconClose.onclick = close;
}

window.addEventListener("load", init);