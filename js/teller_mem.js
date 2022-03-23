new Vue({
    el: '#app',
    data: { //變數放這
        urls: {
            '體驗占卜師': 'be_tellers.html',
            '線上占卜': 'online_divination.html',
            '預約占卜師': 'teller_mem.html',
            '塔羅討論區': 'discuss.html',
        },
        navs: ['體驗占卜師','線上占卜','占卜師總覽','塔羅討論區'],
        tellers: [],
        selectIdx: -1,
        ang: 0
    },
    mounted() {
        this.getTeller();
    },
    methods: {
        getTeller() {
            $.ajax({
                type: 'POST',
                url: 'phps/select.php',
                data: {
                    table: 'members',
                    joinTable: 'astrologist',
                    joinOn: 'memNo',
                    queryCol: 'astNo, members.memName, members.memImage, astrologist.introduction, (totalScore / people)  avgScore',
                    condition: "members.identity = '占卜師' AND astrologist.status = '一般'",
                    others: 'order by avgScore'
                },
                success: data => {
                    if (data.msg !== false){
                        this.tellers = data.msg;
                        this.selectIdx = 0;
                    }
                },
                error: err => {
                    console.log(err);
                }
            });
        },
        imgUrl(img) {
            return `images/member/${img}`;
        },
        getName(idx) {
            return this.tellers[idx].memName;
        },
        getScore(idx) {
            return this.tellers[idx].avgScore;
        }
    },
    computed: {
        rotate() {
            return `transform: rotateY(${this.ang}deg)`;
        },
        getHref() {
            return `teller_reservation.html?type=${ this.tellers[this.selectIdx].astNo-1 }`;
        }
    }
 });




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

//資料庫連結
window.onload = function getTeller() {
    
};

