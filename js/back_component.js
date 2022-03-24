// === 側邊站內連結
Vue.component('my-nav',{
    template: `
        <!-- 管理選項bar -->
        <nav id="back_nav" class="link_panel">
            <!-- logo -->
            <div class="logo">
                <div class="img_box">
                    <img src="images/logo_ico_square.ico" alt="logo">
                </div>
                <div class="txt_box">
                    <h2>Mistro</h2>
                </div>
            </div>

            <!-- 左側邊欄 管理選項 -->
            <ul class="link_list">
                <li v-for="(url, name) in manageItem">
                    <a :href="url" class="unselected_btn">{{ name }}</a>
                </li>
            </ul>
        </nav>
    `,
    
    data() {
        return {
            // 管理欄位
            manageItem: {
                '帳號管理': './back_account.html',
                '會員管理': './back_member.html',
                '商品管理': './back_products.html',
                '文章審核': './back_article.html',
                '占卜師審核': './back_astrologist.html'
            }
        }
    }
});

// === 表格上方操作列
Vue.component('top-action-bar', {
    template: `
        <!-- 表格上方操作列 -->
        <div class="action_box top">
            <button class="secondary_btn" v-for="btn in actionBtn" @click="updateDb">{{ btn }}</button>
            <div>
                顯示
                <select class="row_limit">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="all">all</option>
                </select>
                筆
            </div>
        </div>
    `,
    props: ['actionBtn'],
    methods: {
        updateDb(e) {
            this.$emit('update-db', e.target);
            // 這邊this是找data裡的資料 this.$emit('自訂事件',)    如果要接受裡面的資料 就用 e.target自己定義的事件給別人    $emit是下往上丟
        }
    }
})

// === 表格
Vue.component('my-table', {
    template: `
        <!-- 資料內容 -->
        <div class="table_wrapper">
            <table>
                <tr>
                    <th scope="col" v-for="col in colName">{{ col }}</th>
                </tr>
                <tr v-for="(row, index) in queryResult">
                    <td v-for="(col, colName) in deconstructRow(row, index)">
                        <label v-if=" colName !== 'detail' && colName !== 'status' " :class="colName">{{ col }}</label>
                        <button v-else-if=" colName === 'detail' " class="detail_btn" @click="getDetail(index)">查看/編輯</button>
                        <span v-else-if=" colName === 'status' " :class="active(col)" @click="changeStatus($event, index)"></span>
                    </td>
                </tr>
                <tr v-if="!queryResult">
                    <td><input type="checkbox"></td>
                    <td :colspan="Object.keys(colName).length">查無資料</td>
                </tr>
            </table>
        </div>
    `,
    props: ['queryResult', 'colName', 'deconstructResult'],
    
    methods: {
        // 資料解構
        deconstructRow(row, index) {
            
            this.$emit('deconstruct-row', row, index);
            return deconstructResult;
        },
        // 取得收在按鈕中的詳細資料，開啟popup視窗
        getDetail(index) {
            this.$emit('get-detail', index);
    
        },
        // 一鍵全選
        checkAll(e) {
            if (e.target.classList.contains('check_all')) {
                $('.check_col').prop("checked", e.target.checked);
            }
        },
        // 若狀態為 '一般',加上 active 的 class
        active(col) {
            let status = true
            let active = true;
            if (col !== '一般') active = false;
            return { status, active }
        },
        // 點擊更新狀態欄
        changeStatus(e, idx) {
            e.target.classList.toggle('active');
            let status = e.target.classList.contains('active');

            this.$emit('change-status', this.queryResult[idx], status);
        }
    }
})

// === popup視窗驗證
