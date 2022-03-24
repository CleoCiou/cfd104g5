<?php
    // 資料庫連線檔
    // 記得去改帳號
    include('connectdb.php');

    // header 格式
    header('Content-Type: application/json; charset=utf-8');
    
    // 如果 ajax 使用 POST 傳送才處理
    if($_SERVER['REQUEST_METHOD'] === 'POST') {


    $sql = "select product.`prodName`,product_category.cateType,product_category.cateName,product.price,product.`prodImage1`, product.`prodImage2`,product.`prodImage3`,product.`prodIntro`,product.`status` from product join product_category on (product.prodCateNo = product_category.prodCateNo);"


    $fav = $pdo->query($sql);
    $favRows = $fav->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($favRows);
        

    }
    
?>