// function imgChange(){

//    當滑鼠移到上面就執行 function onmouseOver
//    當滑鼠移到外面就執行 function onmouseOut

// 執行 function onmouseOver 就先抓選項star的值 

// 移到選項上面就會換圖 
// 所以移到上面就是發生onmouseOver的事件 
// 當發生onmouseOver的事件 就換圖片 

// function onmouseOver{
//     document.getElementById("star") = 
// }

// function onmouseout{

// }
 function doFirst(){

    let star = document.getElementById("star")
    // console.log(star);
    let moon = document.getElementById("moon")
    console.log(moon);
    let starimg = document.querySelector("#star input").value
    // console.log(starimg); 

    let moonimg = document.querySelector("#moon input").value
    
     
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
