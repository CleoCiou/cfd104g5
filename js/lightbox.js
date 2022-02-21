function init(){

        
        let articleContent = document.querySelectorAll(".article_cards");

        for(let i = 0; i<articleContent.length; i++){
            articleContent[i].onclick = show;
        }

        let articleView = document.getElementById("articleView");

        function show(){
            // alert('hi');
            if(articleView.classList.contains("hidden") == true){
                articleView.classList.remove("hidden");
                articleView.classList.add("show");
            }
        }

        let iconClose = document.getElementById("close");
        function close(){
            if(articleView.classList.contains("show") == true){
            articleView.classList.add("hidden");
            }
        }

        iconClose.onclick = close;
}

window.addEventListener("load", init);