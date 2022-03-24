<?php
    include('connectdb.php');
    header('Content-Type: application/json; charset=utf-8');
    
    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (!isset($_POST['table']) || !isset($_POST['insertValue'])) {
            $msg['msg'] = '資料表或資料未設定';
            echo json_encode($msg);
            return;
        }

        $table = $_POST['table'];
        $column = $_POST['getColumn'];
        $value = $_POST['insertValue'];
        $content = nl2br($_POST['contentValue']);
        $str = str_replace("<br />"," ", $content);
        $content = $str;
        
        $sql = "insert into $table($column) values($value, $content)";
        $msg['sql'] = $sql;
        
        try {
            $result = $pdo -> query($sql);
            $count = $result->rowCount();
            
            if ($count > 0) {
                $msg['msg'] = '新增成功';
            }
            else {
                $msg['msg'] = '新增失敗';
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