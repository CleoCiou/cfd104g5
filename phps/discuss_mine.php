<?php
    // 資料庫連線檔
    // 記得去改帳號
    include('connectdb.php');
    // header 格式
    header('Content-Type: application/json; charset=utf-8');
   

    try{
        /*CONNECT WITH DATABASE*/
        $sql = "SELECT memNo, artTime, title, content FROM `article` ";
     

        $mems =  $pdo -> query($sql);

        $memsRows = $mems->fetchAll(PDO::FETCH_ASSOC);
    
        if($mems -> rowCount()>0){
          
            echo json_encode($memsRows);
        
        }   
 
    }catch(PDOException $e){
        echo $e->getMessage();
    }
?>