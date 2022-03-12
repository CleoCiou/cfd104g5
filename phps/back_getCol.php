<?php
    include('connectdb.php');

    if (!isset($_REQUEST['table'])) {
        $msg['msg'] = '請傳入資料表';
        return;
    }
    
    // 資料表名稱
    $table = $_REQUEST['table'];
    // 資料表主鍵
    $pk = '';
    // 欲查找欄位
    $col = '';
    // join 資料表
    $joinTable = '';
    // join 條件
    $joinOn = '';
    // 條件
    $where = '';
    // 條件的值
    $data = null;

    switch ($table) {
        case 'admin':
            $col = 'adminId, adminName, status';
            $pk = 'adminId';
            break;

        case 'members':
            $col = 'memId, memName, identity, sex, email, phoneNum, birthday, address, creditNum, memImage, status';
            $pk = 'memId';

            // 登入帳號密碼檢查
            if (isset($_REQUEST['id']) && isset($_REQUEST['pwd'])) {
                $data=[$_REQUEST['id'], $_REQUEST['pwd']];
                $where = "memId = ? and memPwd = ?";
            }
            break;

        case 'product':
            $col = 'prodName, cateType, cateName, price, prodImage1, prodImage2, prodImage3, prodIntro, status';
            $joinTable = 'product_category';
            $joinOn = 'prodCateNo';
            break;
    }

    // SQL
    $sql = "select $col from $table";
    
    // join
    if($joinTable !== '') {
        $sql = "$sql join $joinTable on ($table.$joinOn = $joinTable.$joinOn)";
        $msg['sql'] = $sql;
    }
    
    // where
    if ($where !== '') {
        $sql = "$sql where $where";
        $msg['sql'] = $sql;
    }

    try {
        $result = $pdo -> prepare($sql);
        $result -> execute($data);
        // $msg['data'] = $data;

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

    echo json_encode($msg);
?>