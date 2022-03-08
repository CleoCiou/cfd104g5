<?php
    include('../php/connectdb.php');
    header('Content-Type: application/json; charset=utf-8');
    
    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        
        $sql = $_POST['sql'];
        
        try {
            $result = $pdo -> query($sql);
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