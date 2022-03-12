<?php
    session_start();
    $msg = [
        'userId' => $_SESSION['userId'],
        'userName' => $_SESSION['userName'],
        'identity' => $_SESSION['identity'],
        'sticker' => $_SESSION['sticker'],
        'email' => $_SESSION['email'],
        'creditNum' => $_SESSION['creditNum'],
    ];
    echo json_encode($msg);
?>