<?php
    include('connectdb.php');
    header('Content-Type: application/json; charset=utf-8');
    
    if($_SERVER['REQUEST_METHOD'] === 'POST') {

        // 資料表
        $astNo = $_POST['astNo'];
        $sql = "SELECT M.memName , M.memImage, C.memId, comment.content  , introduction
                FROM astrologist
                JOIN members M ON M.memNo = astrologist.memNo
                JOIN appointment ON astrologist.astNo = appointment.astNo
                JOIN comment ON comment.appointNo = appointment.appointNo
                JOIN members C ON C.memNo = appointment.memNo
                WHERE astrologist.astNo = $astNo;";


        try {
            $result = $pdo -> prepare($sql);
            $result -> execute();
            $count = $result->rowCount();
            
            if ($count > 0) {
                $msg['msg'] = $result -> fetchAll(PDO::FETCH_ASSOC);
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