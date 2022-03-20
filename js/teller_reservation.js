// [] 會員=占卜師 防呆
// [] 日期雙向

let calendar = document.querySelector('.calendar')

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0)
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}

generateCalendar = (month, year) => {

    let calendar_days = calendar.querySelector('.calendar-days')
    let calendar_header_year = calendar.querySelector('#year')

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    calendar_days.innerHTML = ''

    let currDate = new Date()
    if (!month) month = currDate.getMonth()
    if (!year) year = currDate.getFullYear()

    let curr_month = `${month_names[month]}`
    month_picker.innerHTML = curr_month
    calendar_header_year.innerHTML = year

    // get first day of month
    let first_day = new Date(year, month, 1)


    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div')
        if (i >= first_day.getDay()) {
            day.classList.add('calendar-day-hover')
            day.innerHTML = i - first_day.getDay() + 1
            day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`
            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date')
            }
        }
        calendar_days.appendChild(day)
    }

    // 監聽行事曆日期點擊事件
    $('.calendar-day-hover').on('click', changeDate);
}

let month_list = calendar.querySelector('.month-list')

month_names.forEach((e, index) => {
    let month = document.createElement('div')
    month.innerHTML = `<div data-month="${index}">${e}</div>`
    month.querySelector('div').onclick = () => {
        month_list.classList.remove('show')
        curr_month.value = index
        generateCalendar(index, curr_year.value)
    }
    month_list.appendChild(month)
})

let month_picker = calendar.querySelector('#month-picker')

month_picker.onclick = () => {
    month_list.classList.add('show')
}

let currDate = new Date()

let curr_month = { value: currDate.getMonth() }
let curr_year = { value: currDate.getFullYear() }


document.querySelector('#prev-year').onclick = () => {
    --curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

document.querySelector('#next-year').onclick = () => {
    ++curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

let dark_mode_toggle = document.querySelector('.dark-mode-switch')

dark_mode_toggle.onclick = () => {
    document.querySelector('body').classList.toggle('light')
    document.querySelector('body').classList.toggle('dark')
};

// === 新增預約資料
let schedule;
let reservationDate = null;
let update = -1;
function changeDate() {
    if ($(this).has('select').length > 0) {
        return;
    }
    else {
        $('select.popup').remove();
    }

    // 取得選擇的預約日期
    let year = $('#year').text();
    let month = $('.month-picker').text();
    month = month_names.indexOf(month) + 1;
    let date = $(this).text().trim()
    reservationDate = `${year}-${(month<10) ? '0'+month : month}-${(date<10) ? '0'+date : date}`;
    // 可預約時間 以當日起算的 隔天到下個月同日
    // e.g. 今天3/20, 可預約時間3/21-4/20
    let nextM = new Date();
    nextM.setMonth(nextM.getMonth() + 1);
    let now = new Date();
    now.setDate(now.getDate());
    if (Date.parse(reservationDate) > Date.parse(now) && Date.parse(reservationDate) < Date.parse(nextM)) {
        $('.teller_btn button.send')[0].disabled = false;
        $('.teller_btn button.send')[0].classList.remove('disabled');
    }
    else {
        $('.teller_btn button.send')[0].disabled = true;
        $('.teller_btn button.send')[0].classList.add('disabled');
    }
    $('#appointDate').val(reservationDate);

    // 查詢當日是否已有排班或排休
    let dates;
    let idx = -1;
    if (schedule) {
        dates = schedule.map(date => Object.values(date)[0]);
        idx = dates.indexOf(reservationDate);
    }
    let el = '';
    if (idx !== -1) {
        let works = schedule.map(work => Object.values(work)[1]);
        el = `<select class="popup">`;
        el += (works[idx][0] === '0') ? `<option>上午</option>` : '';
        el += (works[idx][1] === '0') ? `<option>下午</option>` : '';
        el += (works[idx][2] === '0') ? `<option>晚上</option>` : '';
        update = idx;
    }
    else {
        el = `
            <select class="popup">
                <option>上午</option>
                <option>下午</option>
                <option>晚上</option>
            </select>
        `;
    }
    $(this).append(el);
    $('.appointTime').append(el);
    $('select.popup').on('change', syncInfo);
}

// 選擇日期更新資訊
function syncInfo(e) {
    if (e.target.parentNode.classList.contains('appointTime')) {
        $('.calendar-day-hover > select.popup').val(e.target.value);
    }
    else {
        $('.appointTime select').val(e.target.value);
    }
}

function insertData() {
    let user = getSessionData();
    if (!user) {
        alert('請先登入!');
        return;
    }
    if ($('#appointDate').val() === '') {
        alert('請選擇日期');
        return;
    }
    if ($('#name').val() === '') {
        alert('請填寫姓名');
        return;
    }
    if ($('#phone').val() === '') {
        alert('請填寫手機');
        return;
    }

    // 存進資料庫
    $.ajax({
        type: 'POST',
        url: 'phps/insert.php',
        data: {
            table: 'appointment',
            insertValue: `default, '${ user.userNo }', '${ parseInt(Counts) + 1 }', '${ $('#appointDate').val() }', '${ $('.popup').val() }', default`
        },
        success: data => {
            updateAppointment = true;
        },
        error: err => {
            console.log(err);
        }
    });

    // 更新 排班表
    if (update !== -1) {
        let time = schedule[update].workTime;
        switch ( $('.popup').val() ) {
            case '上午':
                time = '1' + time[1] + time[2];
                break;
            case '下午':
                time = time[0] + '1' + time[2];
                break;
            case '晚上':
                time = time[0] + time[1] + '1';
                break;
        }

        $.ajax({
            type: 'POST',
            url: 'phps/update.php',
            data: {
                table: 'schedule',
                updateValue: `workTime = '${time}'`,
                where: `astNo = '${ parseInt(Counts) + 1 }' and workDate = '${$('#appointDate').val()}'`
            },
            success: data => {
                updateSchedule = true;
                alert('預約成功!');
                location.reload();
            },
            error: err => {
                console.log(err);
            }
        });
        update = -1;
    }
    // 新增至排班表
    else {
        // 取得預約時段
        let time;
        switch ( $('.popup').val() ) {
            case '上午':
                time = '100';
                break;
            case '下午':
                time = '010';
                break;
            case '晚上':
                time = '001';
                break;
        }

        $.ajax({
            type: 'POST',
            url: 'phps/insert.php',
            data: {
                table: 'schedule',
                insertValue: `${ parseInt(Counts) + 1 }, '${ $('#appointDate').val() }', '${time}'`
            },
            success: function(data) {
                updateSchedule = true;
                alert('預約成功!');
                location.reload();
            },
            error: err => {
                console.log(err);
            }
        });
    }
}

//資料庫連結
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const Counts = urlParams.get('type');
window.onload = function Teller() {

    // 監聽送出按鈕
    $('button.send').on('click', insertData);

    // 取得使用者資訊
    let userData = getSessionData();
    if (userData) {
        $('#name').val(userData.userName);
        $('#phone').val(userData.phoneNum);
    }

    $.ajax({
        type: 'POST',
        url: 'phps/teller_reservation.php',
        data: {
            astNo: `${Counts}+1`,
        },
        success: function (data) {
            // console.log(data.msg);
            if (data.msg !== false) {
                let tellerImg = "images/teller_mem/"
                let tellerComments =`<h3>評論區</h3>`;
                for (let i = 0; i < data.msg.length; i++) {
                    if (data.msg[i].content === null) continue;
                    tellerComments +=   `
                                        <div class="txt_box">
                                            <h4>${data.msg[i].memId}</h4>
                                            <p>${data.msg[i].content}</p>
                                        </div>
                                        `;
                }
                tellerComments += (tellerComments === '<h3>評論區</h3>') ? `<div class="txt_box"><h4>尚無評論</h4></div>` : '';
                let tellerInfo = `
                                    <div class="teller_profile">
                                        <div class="img_box">
                                            <img src="${tellerImg}${data.msg[0].memImage}">
                                        </div>
                                        <div class="txt_box">
                                            <h3>
                                                ${data.msg[0].memName}
                                            </h3>
                                            <p>
                                                ${data.msg[0].introduction}
                                            </p>
                                        </div>
                                    </div>
                                `;
                $('#tellerRes').prepend(tellerInfo)
                $('#tellerComment').prepend(tellerComments)
            }
        },
        error: function () {
            console.log('ajax error');
        }
    });

    $.ajax({
        type: 'POST',
        url: 'phps/select.php',
        data: {
            table: 'schedule',
            queryCol: 'workDate, workTime',
            condition: `astNo = '${ parseInt(Counts) + 1 }'`
        },
        success: data => {
            schedule = data.msg;
        },
        error: err => {
            console.log(err);
        }
    });
    
    generateCalendar(curr_month.value, curr_year.value)
};
