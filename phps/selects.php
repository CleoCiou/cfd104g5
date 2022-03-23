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
    $mem_no = $_POST['mem_no'];

    $sql = "SELECT artno, article.topicNo, topicName, article.memNo, members.memName, title, artTime, content, likes, artFavs FROM `article` 
    join members on members.memNo = article.memNo
    join article_topic on article.topicNo = article_topic.topicNo
    where(members.memNo = $mem_no)";


    $sql1 = "SELECT article_favorite.artNo, article.memNo, article.artTime, article_topic.topicName, article.title, article.content, likes, artFavs FROM `article_favorite` 
    left join article on article.artNo = article_favorite.artNo
    left join article_topic on article_topic.topicNo = article.topicNo
    WHERE article_favorite.memNo = $mem_no";


    $post = $pdo->query($sql);
    $postRows = $post->fetchAll(PDO::FETCH_ASSOC);


    $fav = $pdo->query($sql1);
    $favRows = $fav->fetchAll(PDO::FETCH_ASSOC);

    $php_array = array('post' => $postRows, 'fav' => $favRows);
    echo json_encode($php_array);
        

    }
    
?>