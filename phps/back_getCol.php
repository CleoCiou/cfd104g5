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
    // 一般查詢
    $general = true;

    switch ($table) {
        // === 前台 === //
        // 會員專區: 最新留言文章
        // 1. 最多四筆
        // 2. 文章編號、文章主旨、新留言數
        case 'newComments':
            $no = $_REQUEST['no'];
            $sql =
                "select A.artNo, count(msgTime) as count, title
                from article_message AM
                join article A on (AM.artNo = A.artNo)
                where AM.artNo IN
                    (select artNo from article_message
                    where memNo = $no 
                    and AM.msgTime >
                        (select msgTime from article_message subAM
                        where memNo = $no
                        and   AM.artNo = subAM.artNo
                        order by subAM.msgTime
                        limit 1)
                    group by artNo)
                group by AM.artNo
                order by AM.msgTime desc
                limit 4";
            $general = false;

            break;

        case 'divinationLog':
            $no = $_REQUEST['no'];
            $sql = 
                "select typeName, title, TD.tarNo, detail, tarName
                from divination_log DL
                join divination D on (DL.divNo = D.divNo)
                join tarot_detail TD on (DL.tarDetNo = TD.tarDetNo)
                join tarot T on (TD.tarNo = T.tarNo)
                join divination_type DT on (TD.typeNo = DT.typeNo)
                where memNo = $no
                order by divTime desc
                limit 4";
            $general = false;

        // === 後台 === //
        case 'admin':
            $col = 'adminId, adminName, status';
            $pk = 'adminId';
            break;

        case 'members':
            $col = 'memId, memName, identity, sex, email, phoneNum, birthday, address, creditNum, memImage, status';
            $pk = 'memId';
            break;

        case 'product':
            $col = 'prodName, cateType, cateName, price, prodImage1, prodImage2, prodImage3, prodIntro, status';
            $joinTable = 'product_category';
            $joinOn = 'prodCateNo';
            break;
    }

    // SQL
    if ($general) $sql = "select $col from $table";
    
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