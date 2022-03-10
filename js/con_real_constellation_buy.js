
function doFirst(){

    let star = document.getElementById("star")
    // console.log(star);
    let moon = document.getElementById("moon")
    console.log(moon);
    
    // let footer = document.getElementById("footer")
    // console.log(footer);

    
    let starimg = document.querySelector("#star input").value
    // console.log(starimg); 

    let moonimg = document.querySelector("#moon input").value

    // let footerimg = document.querySelector("#footer input").value


    
     
    let initimg = document.getElementById("initimg")
    star.onmouseover = function(){  
        // console.log(initimg);
        initimg.src = starimg

    }
    moon.onmouseover = function(){
        // console.log(initimg);
        initimg.src = moonimg
    }
    
  

}


window.addEventListener('load',doFirst);
