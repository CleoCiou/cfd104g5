<?php
    // 資料庫連線檔
    // 記得去改帳號
    include('connectdb.php');

    // header 格式
    header('Content-Type: application/json; charset=utf-8');
    
    // 如果 ajax 使用 POST 傳送才處理
    if($_SERVER['REQUEST_METHOD'] === 'POST') {

    // 記得用session去拿到會員的memNo
    // $memNo = $_SESSION['userNo']

    $sql = "SELECT artno, article.topicNo, topicName, article.memNo, members.memName, title, artTime, content, likes, artFavs FROM `article` 
    join members on members.memNo = article.memNo
    join article_topic on article.topicNo = article_topic.topicNo
    where(members.memNo = 1)"; //where(members.memNo = $memNo)"


    $fav = $pdo->query($sql);
    $favRows = $fav->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($favRows);
        

    }
    
?>