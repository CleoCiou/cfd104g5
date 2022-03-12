var carousel = $(".item_box"),
  currdeg = 0;

$(".next_teller").on("click", { d: "n" }, rotate);
$(".prev_teller").on("click", { d: "p" }, rotate);

function rotate(e) {
  if (e.data.d == "n") {
    currdeg = currdeg - 60;
  }
  if (e.data.d == "p") {
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateY(" + currdeg + "deg)",
    "-moz-transform": "rotateY(" + currdeg + "deg)",
    "-o-transform": "rotateY(" + currdeg + "deg)",
    transform: "rotateY(" + currdeg + "deg)"
  });
}

function getTeller() {
    $.ajax({
        type: 'POST',
        url: 'phps/select.php',
        data: {

            table: 'members',

            queryCol: 'memName ,identity,memImage',

            condition: "identity = '占卜師'",

        },
        success: function(data) {
            if (data.msg !== false){
                let tellerImg = "images/teller_mem/"
                let tellerMems = `<div class="row">`;
                for (let i = 0; i < data.msg.length; i++) {
                    tellerMems +=   `
                                    <div class="item">                                                
                                        <div class="img_box">
                                            <a href="teller_reservation.html">
                                                <img src="${tellerImg}${data.msg[i].memImage}">
                                            </a>
                                        </div>
                                        <div class="txt_box">
                                            ${data.msg[i].memName}
                                        </div>
                                    </div>
                                    `;
                }
                tellerMems += `</div>`
                $('#tellerMem').append(tellerMems)
            }
        },
        error: function() {
            console.log('ajax error');
        }
    });
}

window.addEventListener('load', getTeller);
