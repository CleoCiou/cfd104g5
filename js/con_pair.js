function doFirst(){
    let result = document.getElementById("result")
    // console.log(result);
    let pair_btn = document.getElementById("pair_btn")

    pair_btn.onclick = function(){
        result.style.display="block";
    }
    

}




















window.addEventListener('load',doFirst);