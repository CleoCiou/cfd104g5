<?php
    try {
        // 資料庫設定
        $dbname = "g5";
        $user = "root";
        $password = "00000";
    
        $dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charset=utf8";
    
        $options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE=>PDO::CASE_NATURAL);
    
        // 建立pdo物件
        $pdo = new PDO($dsn, $user, $password, $options);
    }
    catch (Exception $e) {
        echo "錯誤行號 : ", $e->getLine(), "<br>";
        echo "錯誤原因 : ", $e->getMessage(), "<br>";
    }
?>