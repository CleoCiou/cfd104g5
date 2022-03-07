<?php
    include('connectdb.php');
    header('Content-Type: application/json; charset=utf-8');
    
    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (!isset($_POST['table']) || !isset($_POST['queryCol'])) {
            $msg['msg'] = '資料表或欄位未設定';
            echo json_encode($msg);
            return;
        }
        
        // 查詢資料表
        $table = $_POST['table'];
        $queryCol = $_POST['queryCol'];
        $sql = "select $queryCol FROM $table";
        $msg['sql'] = $sql;


        // 如果有JOIN
        if (isset($_POST['joinTable']) && isset($_POST['joinOn'])) {
            $joinTable = $_POST['joinTable'];
            $joinOn = $_POST['joinOn'];
            $joinSql = "$joinTable on ($table.$joinOn = $joinTable.$joinOn)";
            $msg['sql']="$sql join $joinSql";
            $sql = "$sql join $joinSql";
        }
        
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