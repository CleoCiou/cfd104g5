<?php
    session_start();
    
    $msg = false;

    // 若尚未登入，回傳false
    if (!isset($_SESSION['userNo'])) {
        $msg = false;
    }
    // 若已登入，回傳資料
    else {
        $msg = [
            'userNo' => $_SESSION['userNo'],
            'userId' => $_SESSION['userId'],
            'userName' => $_SESSION['userName'],
            'identity' => $_SESSION['identity'],
            'sticker' => $_SESSION['sticker'],
            'email' => $_SESSION['email'],
            'creditNum' => $_SESSION['creditNum'],
        ];
    }

    echo json_encode($msg);
?>