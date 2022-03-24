<?php
    // 資料庫連線檔
    // 記得去改帳號
    include('connectdb.php');

    // header 格式
    header('Content-Type: application/json; charset=utf-8');
    if($_POST["prodCateNo"] == "手鍊"){
        $prodCateNo = 1001;
    }else if($_POST["prodCateNo"] == "項鍊") {
        $prodCateNo = 1002;
    }else if($_POST["prodCateNo"] == "幸運石")
    {
        $prodCateNo = 1003;
    };
  

    // 上傳檔案
    $file1 = $_FILES["prodImage1"] ?? null; 
    $file2 = $_FILES["prodImage2"] ?? null;
    $file3 = $_FILES["prodImage3"] ?? null;
  
    $file = uniqid();
    if($file1){
        $fileInfo = pathinfo($_FILES['prodImage1']['name']); 
        $ext = $fileInfo["extension"]; 
        $fileName1 = "$file.$ext"; 
        $from = $_FILES['prodImage1']['tmp_name']; 
        $to1 = "../images/shop/tarot/$fileName1";
        copy($from, $to1);
    }

    // 資料庫存$fileName
    if($file2){
        $fileInfo = pathinfo($_FILES['prodImage2']['name']); 
        $ext = $fileInfo["extension"]; 
        $fileName2 = "$file.$ext";
        $from = $_FILES['prodImage2']['tmp_name']; 
        $to2 = "../images/shop/tarot/$fileName2";
        copy($from, $to2);
    }

    if($file3)
    $fileInfo = pathinfo($_FILES['prodImage3']['name']); 
    $ext = $fileInfo["extension"]; 
    $fileName3 = "$file.$ext";
    $from = $_FILES['prodImage3']['tmp_name']; 
    $to3 = "../images/shop/tarot/$fileName3";
    copy($from, $to3);
    
    $path1 = $file1 ? $fileName1 : null;
    $path2 = $file2 ? $fileName2 : null;
    $path3 = $file3 ? $fileName3 : null;
    $sql = 
    "UPDATE `product` set 
    `prodName` ='{$_POST["prodName"]}',
    `prodCateNo`='{$_POST["prodCateNo"]}',
    `prodIntro`='{$_POST["prodIntro"]}',
	`prodImage1`='{$_POST["prodImage1"]}',
	`prodImage2`='{$_POST["prodImage2"]}',
    `prodImage3`='{$_POST["prodImage3"]}'"
   
    $fav = $pdo->prepare($sql);
    $fav->bindValue(":prodName",$_POST["prodName"]);
    $fav->bindValue(":prodCateNo",$prodCateNo);
    $fav->bindValue(":prodIntro",$_POST["prodIntro"]);
    $fav->bindValue(":prodImage1",$path1);
    $fav->bindValue(":prodImage2",$path2);
    $fav->bindValue(":prodImage3",$path3);

   
    
    

    $fav->execute();
    // 如果 ajax 使用 POST 傳送才處理
    if($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    }
    
?>



