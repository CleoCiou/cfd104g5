
function doFirst(){

    let star = document.getElementById("star")

    let moon = document.getElementById("moon")

    
  

    
    let starimg = document.querySelector("#star input").value
 

    let moonimg = document.querySelector("#moon input").value


    
     
    let initimg = document.getElementById("initimg")
    star.onmouseover = function(){  
     
        initimg.src = starimg

    }
    moon.onmouseover = function(){
  
        initimg.src = moonimg
    }
    
  

}


window.addEventListener('load',doFirst);
