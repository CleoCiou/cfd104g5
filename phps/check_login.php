<?php
    include('connectdb.php');
    
    session_start();
    
    // 登入帳號密碼檢查
    if (isset($_REQUEST['id']) && isset($_REQUEST['pwd'])) {
        $data=[$_REQUEST['id'], $_REQUEST['pwd']];
        
        $sql = "select * from members where memId = ? and memPwd = ?";

        try {
            $result = $pdo -> prepare($sql);
            $result -> execute($data);
    
            $count = $result->rowCount();
            
            // 帳號密碼正確
            if ($count > 0) {
                $row = $result -> fetch(PDO::FETCH_ASSOC);
                
                if ($row['status'] == '停權') {
                    $msg['msg'] = '您的帳號已被停權';
                    return;
                }

                // 登入成功
                $msg['msg'] = true;
                $_SESSION['userNo'] = $row['memNo'];
                $_SESSION['userId'] = $row['memId'];
                $_SESSION['userName'] = $row['memName'];
                $_SESSION['identity'] = $row['identity'];
                $_SESSION['sticker'] = $row['memImage'];
                $_SESSION['email'] = $row['email'];
                $_SESSION['creditNum'] = $row['creditNum'];
                // ...

            }
            // 登入失敗
            else {
                $msg['msg'] = '帳號或密碼錯誤';
            }
        }
        catch (PDOException $e){
            $msg['msg'] = $e -> getMessage();
        }    
    }

    echo json_encode($msg);
?>