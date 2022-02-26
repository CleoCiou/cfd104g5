function init(){
    let startBtn = document.getElementById('startBtn');
    startBtn.addEventListener("click", showForm);
}

function showForm(){
    let formItem = document.getElementById('formItem');
    if(formItem.classList.contains('start_hidden') == true){
        formItem.classList.toggle('start_show');
        startBtn.classList.add('start_hidden');
    }
    
    
}




window.addEventListener("load", init);