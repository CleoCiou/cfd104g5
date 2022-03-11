<?php
    // 資料庫連線檔
    // 記得去改帳號
    include('connectdb.php');
    // header 格式
    header('Content-Type: application/json; charset=utf-8');
    // 只有用post才要加這段 get不用

    try{
        /*CONNECT WITH DATABASE*/
        $sql = "SELECT memNo, artTime, title, content FROM `article` ";
        // 先去資料庫執行看有沒有拿到資料 才知道這段是不是對的

        $mems =  $pdo -> query($sql);

        $memsRows = $mems->fetchAll(PDO::FETCH_ASSOC);
    
        if($mems -> rowCount()>0){
          
            echo json_encode($memsRows);
            // 把這的二維陣列的檔案 轉成JSIN檔看得懂的字串
        }   
 
    }catch(PDOException $e){
        echo $e->getMessage();
    }
?>