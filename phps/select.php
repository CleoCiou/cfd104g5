<?php
    // 資料庫連線檔
    // 記得去改帳號
    include('connectdb.php');
    // header 格式
    header('Content-Type: application/json; charset=utf-8');
    
    // 如果 ajax 使用 POST 傳送才處理
    if($_SERVER['REQUEST_METHOD'] === 'POST') {

        // ajax 與 php 取值對應範例

        // ajax 傳送值
        // $.ajax({
        //     type: 'POST' (1),
        //     data: {
        //         table (2): 'article'
        //     }
        // })
        
        // php 取值
        // $_type['key']
        // $_(1)['(2)']
        // $_POST['table'] => 'article'

        // 如果沒有傳 資料表 或 需要的資料欄位 回傳錯誤
        // 在 ajax 中 console.log(data.msg)，可看見 '資料表或欄位未設定' 提示字
        // isset是檢測裡面是否有
        if (!isset($_POST['table']) || !isset($_POST['queryCol'])) {
            $msg['msg'] = '資料表或欄位未設定';
            // ['msg']這是物件陣列法抓值的方法
            echo json_encode($msg);
            return;
        }
        
        // 取得欲查詢的資料表
        $table = $_POST['table'];
        // 取得欲查詢的資料欄位
        $queryCol = $_POST['queryCol'];
        // sql 查詢語法
        $sql = "select $queryCol FROM $table";
        $msg['sql'] = $sql;

        // 如果有JOIN
        if (isset($_POST['joinTable']) && isset($_POST['joinOn'])) {
            // 取得 join 資料表
            $joinTable = $_POST['joinTable'];
            // 取得 join 條件
            $joinOn = $_POST['joinOn'];
            // sql join 語法
            $joinSql = "$joinTable on ($table.$joinOn = $joinTable.$joinOn)";
            // 將 join 語法 加入前面的 select 語法中
            $sql = "$sql join $joinSql";
            // js console.log(data.sql) 可以看串完的完整語法
            $msg['sql']="$sql join $joinSql";
        }
        
        // 如果有查詢條件
        if (isset($_POST['condition'])) {
            // 取得查詢條件
            $where = $_POST['condition'];
            // sql where 語法
            // 將 join 語法 加入前面的 select 語法中
            $sql = "$sql where $where";
            // js console.log(data.sql) 可以看串完的完整語法
            $msg['sql'] = $sql;
        }

        // 如果有其他條件
        // 例如: limit, asc/desc, ..
        if (isset($_POST['other'])) {
            // 取得其他條件
            $other = $_POST['other'];
            // 將其他條件加入 sql 指定
            $sql = "$sql $other";
            // js console.log(data.sql) 可以看串完的完整語法
            $msg['sql'] = $sql;
        }

        // 執行sql
        try {
            $result = $pdo -> query($sql);
            $count = $result->rowCount();
            
            if ($count > 0) {
                $msg['msg'] = $result -> fetchAll(PDO::FETCH_ASSOC);
            }
            else {
                $msg['msg'] = false;
            }
        }
        catch (PDOException $e){
            $msg['msg'] = $e -> getMessage();
        }
    }
    else {
        $msg['msg'] = '請使用POST';
    }
    echo json_encode($msg);
?>