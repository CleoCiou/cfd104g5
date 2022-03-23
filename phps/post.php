<?php
    include('connectdb.php');

    // header 格式
    header('Content-Type: application/json; charset=utf-8');
    // 如果 ajax 使用 POST 傳送才處理
    if($_SERVER['REQUEST_METHOD'] === 'POST') {

        switch ($_POST["case"]) {

            case "hotPost":

                $sql = "SELECT artNo, article.topicNo, topicName, article.memNo, members.memName, memImage, title, artTime, content, likes, artFavs, msgs, favIndex FROM `article` 
                join members on members.memNo = article.memNo
                join article_topic on article.topicNo = article_topic.topicNo
                order by likes desc";

                $hot = $pdo->query($sql);
                $hotRows = $hot->fetchAll(PDO::FETCH_ASSOC);
            
                echo json_encode($hotRows);
                    
                break;
        
            case "newPost":
                $sql = "SELECT artNo, article.topicNo, topicName, article.memNo, members.memName, memImage, title, artTime, content, likes, artFavs, msgs, favIndex FROM `article` 
                join members on members.memNo = article.memNo
                join article_topic on article.topicNo = article_topic.topicNo
                order by artTime desc";
        
                // 執行
                $new = $pdo->query($sql);
                $newRows = $new->fetchAll(PDO::FETCH_ASSOC);
            
                echo json_encode($newRows);
                break;
        }
    }
?>