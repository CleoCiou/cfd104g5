Vue.component('calendar',{
    template: `
        <div id="schedule">
            <div id="calendarHeader" class="calendarHeader"  @dragover="dragOverHandler($event)" @drop="dropHandler($event)">
                <div id="lastmonth" class="lastmonth" @click="prevMonth">
                    {{ (month === 0) ? monthShort[monthShort.length-1] : monthShort[month-1] }}
                </div>
                <div class="month">
                    {{ year }}
                    {{ monthShort[month] }}
                </div>
                <div id="nextmonth" class="nextmonth" @click="nextMonth">
                    {{ (month === monthShort.length-1) ? monthShort[0] : monthShort[month+1] }}
                </div>
            </div>
            <div id="calendarContain">
                <div class="container">
                    <div v-for="weekTitle in week" class="day weekTitle">{{ weekTitle }}</div>
                    <div class="day" v-for="i in (firstWeekDay)"></div>
                    <div class="day" v-for="(date, idx) in dateInfo" @dragover="dragOverHandler($event)" @drop="dropHandler($event)">
                        {{ date.date }}
                        <p class="morning" :class="timeClass(date.workTime[0])" draggable='true' @dragstart="dragStartHandler" v-if="date.workTime[0] !== '0'">上午</p>
                        <p class="afternoon" :class="timeClass(date.workTime[1])" draggable='true' @dragstart="dragStartHandler" v-if="date.workTime[1] !== '0'">下午</p>
                        <p class="night" :class="timeClass(date.workTime[2])" draggable='true' @dragstart="dragStartHandler" v-if="date.workTime[2] !== '0'">晚上</p>
                    </div>
                    <div class="day" v-for="i in ((lastWeekDay === 6) ? 0 : (6 - lastWeekDay))"></div>
                </div>
            </div>
            <div id="calendarFooter" class="calendarFooter" @dragover="dragOverHandler($event)" @drop="dropHandler($event)">
                <div id="timePeriod" class="timePeriod">
                    拖曳至指定排休日:
                    <span class="drag_rest" draggable='true' @dragstart="dragStartHandler">整日</span>
                    <span class="drag_rest" draggable='true' @dragstart="dragStartHandler">上午</span>
                    <span class="drag_rest" draggable='true' @dragstart="dragStartHandler">下午</span>
                    <span class="drag_rest" draggable='true' @dragstart="dragStartHandler">晚上</span>
                </div>
                <button class="primary_btn save" @click="updateDb">儲存</button>
            </div>
        </div>
    `,
    data() {
        return {
            // 會員資訊
            userData: getSessionData(),
            astNo: null,
            week: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
            monthName: ["January","February","March","April","May","June","July","August","September","October","November","December"],
            monthShort: ["Jan.","Feb.","Mar.","Apr.","May.","June.","July.","Aug.","Sep.","Oct.","Nov.","Dec."],
            // today: new Date(),
            year: new Date().getFullYear(),
            // 0-11
            month: new Date().getMonth(),
            // 當月第一天星期幾
            firstWeekDay: '',
            // 當月最後一天星期幾
            lastWeekDay: '',
            // 當月天數
            allDays: '',
            // 排班資訊
            dateInfo: {},
            // 資料庫中的排班資訊
            workInfo: {},
            // 使用者後來更新尚未儲存的排班資訊
            updateInfo: {},
            // 拖曳中的休假
            dragEl: null
        }
    },
    beforeMount() {
        this.dateHandler();
    },
    methods: {
        dateHandler(ifChangeMonth) {
            
            $.ajax({
                type: 'POST',
                url: 'phps/back_getCol.php',
                data: {
                    no: this.userData.userNo,
                    table: 'schedule',
                },
                success: data => {
                    data = JSON.parse(data);
                    if (data.msg !== false) {
                        // 取得資料排班資訊
                        for (let i = 0; i < data.msg.length; i++) {
                            let date = data.msg[i].workDate; 
                            let work = data.msg[i].workTime;
                            this.workInfo[date] = work;
                        }
                        // 取得占卜師編號
                        if (this.astNo === null) this.astNo = data.msg[0].astNo;
                    }

                    // 更新日曆
                    // 清空原資訊
                    if (ifChangeMonth) this.dateInfo = {};
                    
                    // 取得當月第一天日期是星期幾
                    this.firstWeekDay = new Date(this.year, this.month, 1).getDay();
                    // 取得當月總天數
                    // 這裡的月份從 1 起算
                    this.allDays = new Date(this.year, this.month + 1, 0).getDate();

                    for (let i = 1; i <= this.allDays; i++) {
                        let info = {};
                        let infoDate = `${this.year}-${((this.month+1) < 10) ? '0'+(this.month+1) : this.month + 1}-${(i < 10) ? '0'+i : i}`;
                        // 幾號
                        info.date = i;
                        // 星期幾
                        info.weekDay =  new Date(this.year, this.month, i).getDay();
                        // 資料庫排班時段 0-可排班 | 1-已預約 | 2-排休
                        info.workTime = (this.workInfo[infoDate] === undefined) ? '000' : this.workInfo[infoDate];
                        // 使用者更新排休時段
                        info.workTime = (this.updateInfo[infoDate] === undefined) ? info.workTime : this.updateInfo[infoDate];
                        // 取得當月最後一天星期幾
                        if (i === this.allDays) this.lastWeekDay = info.weekDay;
                        // 更新排班清單
                        this.dateInfo[`${infoDate}`] = info;
                    }
                },
                error: err => {
                    console.log(err);
                }
            });
        },
        // 上個月
        prevMonth() {
            this.month--;
            if (this.month === -1) {
                this.year--;
                this.month = 11;
            }
            this.dateHandler(true);
        },
        // 下個月
        nextMonth() {
            this.month++;
            if (this.month === 12) {
                this.year++;
                this.month = 0;
            }
            this.dateHandler(true);
        },
        // 休假套class顏色
        timeClass(status) {
            status = (status === '1') ? false : true;
            return {
                time: true,
                rest: status
            }
        },
        dragStartHandler(e) {
            if (e.target.classList.contains('rest') || e.target.classList.contains('drag_rest')) {
                e.dataTransfer.setData('text/plain', e.target.innerText);
                if (e.target.classList.contains('time')) {
                    this.dragEl = e.target;
                }
            }
            else {
                e.dataTransfer.setData('work', true);
            }
        },
        dragOverHandler(e) {
            e.preventDefault();
        },
        dropHandler(e) {
            e.preventDefault();

            if (e.dataTransfer.getData('work')) return;

            let removeOnly = ( !e.target.classList.contains('day') ) ? true : false;
            
            let el = (e.target.tagName === 'DIV') ? e.target : e.target.parentNode;
            let timeTxt = e.dataTransfer.getData('text/plain');
            let time = '';
            let mark = -1;
            switch (timeTxt) {
                case '上午':
                    time = 'morning';
                    mark = 0;
                    break;
                case '下午':
                    time = 'afternoon';
                    mark = 1;
                    break;
                case '晚上':
                    time = 'night';
                    mark = 2;
                    break;
                case '整日':
                    time = 'all',
                    mark = 3
                    break;
            }

            if (el.querySelector(`.${time}`) === null && !removeOnly) {
                // 取得日期
                let date = el.childNodes[0].nodeValue.trim();
                // yyyy-mm-dd
                let infoDate = `${this.year}-${((this.month+1) < 10) ? '0'+(this.month+1) : this.month + 1}-${(date < 10) ? '0'+date : date}`;
                // <--不能排休-- |明天| --可以排休-->
                if (Date.parse(infoDate) < Date.parse(new Date())) return;
                
                // 整日休假
                if (mark === 3) {
                    // 更新排班資訊
                    this.updateInfo[infoDate] = '222';
                    // 動態插入休假時段
                    let times = {
                        morning: '上午',
                        afternoon: '下午',
                        night: '晚上'
                    };
                }
                else {
                    // 更新排班資訊
                    let workTime = this.dateInfo[infoDate].workTime;
                    let work = workTime[mark];
                    work = [workTime[0], workTime[1], workTime[2]];
                    work[mark] = '2';
                    // 新增至更新清單
                    // 若按儲存將更新清單更新至資料庫
                    this.updateInfo[infoDate] = work.join('');
                }
            }
            
            // 移動休假後刪除原日期上的
            if (this.dragEl !== null || removeOnly) {
                // 取得原日期
                let oriDate = this.dragEl.parentNode.childNodes[0].nodeValue.trim();
                oriDate = `${this.year}-${((this.month+1) < 10) ? '0'+(this.month+1) : this.month + 1}-${(oriDate < 10) ? '0'+oriDate : oriDate}`;
                workTime = this.dateInfo[oriDate].workTime;
                let work = workTime[mark];
                work = [workTime[0], workTime[1], workTime[2]];
                work[mark] = '0';
                this.updateInfo[oriDate] = work.join('');
                this.dragEl.remove();
                this.dragEl = null;
            }

            this.dateHandler(true);
        },
        // 點擊儲存更新資料庫
        updateDb() {
            let no = this.astNo;
            let insertData = [];
            let updateData = [];
            let checkInsert = true;
            let checkUpdate = true;
            for (update in this.updateInfo) {

                // 原資料庫內無當日排班資訊，新增至資料庫
                if (this.workInfo[update] === undefined) {
                    insertData.push(`${no}, '${update}', '${this.updateInfo[update]}'`);
                }
                // 若資料庫已存在排班日期，更新資料庫
                else {
                    // 更新
                    $.ajax({
                        type: 'POST',
                        url: 'phps/update.php',
                        data: {
                            table: 'schedule',
                            updateValue: `workTime = '${this.updateInfo[update]}'`,
                            where: `astNo = '${no}' and workDate = '${update}'`
                        },
                        error: err => {
                            checkUpdate = false;
                        }
                    });
                }
            }

            if (insertData.length > 0) {
                // 新增
                $.ajax({
                    type: 'POST',
                    url: 'phps/insert.php',
                    data: {
                        table: 'schedule',
                        insertValue: insertData.join('),(')
                    },
                    error: err => {
                        checkInsert = false;
                    }
                });
            }
            
            // 清除updateInfo資訊
            if (checkInsert && checkUpdate) {
                alert('資料更新成功!');
                this.updateInfo = {};
                this.dateHandler();
            }
        }
    }
})