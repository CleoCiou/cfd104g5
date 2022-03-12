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
    // 單純的查詢(最多一個join)
    $general = true;

    switch ($table) {
        // === 前台 === //
        // 會員專區: 最新留言文章
        // 1. 最多四筆
        // 2. 文章編號、文章主旨、新留言數
        // 3. 照留言時間順序
        case 'newMessages':
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

        // 線上占卜紀錄
        // 1. 最多四筆
        // 2. 類別名稱、測驗題目名稱、塔羅牌編號、解析、塔羅牌名稱
        // 3. 照測驗時間順序
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
            break;

        // 我的預約
        // 1. 先顯示1筆，最多抓4筆
        // 2. 預約狀態、占卜師名稱、預約日期、預約時段、占卜師照片
        // 3. 照預約時間排序
        case 'myAppointment':
            $no = $_REQUEST['no'];
            $sql =
                "select APP.appointNo, APP.status, memName, memImage, APP.astNo, appointDate, appointTime, content, star
                from appointment APP
                join astrologist AST on (APP.astNo = AST.astNo)
                join members M on (AST.memNo = M.memNo)
                left join comment C on (APP.appointNo = C.appointNo)
                where APP.memNo = $no
                order by appointDate asc";
                // limit 4";
                $general = false;
            break;

        // 已完成的預約評論
        // 1. 先顯示最新1筆，看更多沒有限制筆數
        // 2. 占卜師照片、占卜師名稱、占卜師編號、預約日期、預約時段、評論內容、平論等級
        // 3. 照評論時間排序
        // case 'myComments':
        //     $no = $_REQUEST['no'];
        //     $sql =
        //         "select memImage, memName, APP.astNo, appointDate, appointTime, content, star
        //         from comment C
        //         join appointment APP on (C.appointNo = APP.appointNo)
        //         join astrologist AST on (APP.astNo = AST.astNo)
        //         join members M on (AST.memNo = M.memNo)
        //         where APP.memNo = $no
        //         order by commTime asc";
        //         $general = false;
        //     break;

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

        case 'astrologist':
            $col = "memName, memId, introduction, certificate, $table.status";
            $joinTable = 'members';
            $joinOn = 'memNo';
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