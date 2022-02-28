<?php
    include('../php/connectdb.php');
    header('Content-Type: application/json; charset=utf-8');
    
    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        // 查詢資料表
        $table = $_POST['table'];
        // 查詢欄位
        $queryCol = $_POST['queryCol'];
        
        try {
            // $query="select ? from ?";
            // $data = [$queryCol, $table];
            // $result=$pdo->prepare($query);
            // $result->execute($data);
            $result = $pdo -> query("select $queryCol FROM $table");
            $count = $result->rowCount();
            
            if ($count === 1) {
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