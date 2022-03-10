<?php
    include('connectdb.php');
    header('Content-Type: application/json; charset=utf-8');
    
    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (!isset($_POST['table']) || !isset($_POST['updateValue'])) {
            $msg['msg'] = '資料表或資料未設定';
            echo json_encode($msg);
            return;
        }
        
        // 資料表
        $table = $_POST['table'];
        $value = $_POST['updateValue'];
        $sql = "update $table set $value";
        $msg['sql'] = $sql;

        // 如果有更新條件
        if (isset($_POST['where'])) {
            $where = $_POST['where'];
            $sql = "$sql where $where";
            $msg['sql'] = $sql;
        }
        
        try {
            $result = $pdo -> query($sql);
            $count = $result->rowCount();
            
            if ($count > 0) {
                $msg['msg'] = true;
            }
            else {
                $msg['msg'] = '更新失敗';
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