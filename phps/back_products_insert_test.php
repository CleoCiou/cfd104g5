<?php
    // 資料庫連線檔
    // 記得去改帳號
    include('connectdb.php');

    // header 格式
    header('Content-Type: application/json; charset=utf-8');
    switch ($_POST["case"]) {
        case "0":  //for 新增
            if ($_POST["prodCateNo"] == "手鍊") {
                $prodCateNo = 1001;
            } else if ($_POST["prodCateNo"] == "項鍊") {
                $prodCateNo = 1002;
            } else if ($_POST["prodCateNo"] == "幸運石") {
                $prodCateNo = 1003;
            };
    
    
            // 上傳檔案
            $file1 = $_FILES["prodImage1"] ?? null;
            $file2 = $_FILES["prodImage2"] ?? null;
            $file3 = $_FILES["prodImage3"] ?? null;
    
    
            if ($file1) {
                $file = uniqid();
                $fileInfo = pathinfo($_FILES['prodImage1']['name']);
                $ext = $fileInfo["extension"]; 
                $fileName1 = "$file.$ext"; 
                $from = $_FILES['prodImage1']['tmp_name']; 
                $to1 = "../images/shop/tarot/$fileName1";
                copy($from, $to1);
            }
    
            if ($file2) {
                $file = uniqid();
                $fileInfo = pathinfo($_FILES['prodImage2']['name']);
                $ext = $fileInfo["extension"]; 
                $fileName2 = "$file.$ext";
                $from = $_FILES['prodImage2']['tmp_name']; 
                $to2 = "../images/shop/tarot/$fileName2";
                copy($from, $to2);
            }
    
            if ($file3) {
                $file = uniqid();
                $fileInfo = pathinfo($_FILES['prodImage3']['name']);
                $ext = $fileInfo["extension"]; 
                $fileName3 = "$file.$ext";
                $from = $_FILES['prodImage3']['tmp_name']; 
                $to3 = "../images/shop/tarot/$fileName3";
                copy($from, $to3);
            }
    
            $path1 = $file1 ? $fileName1 : null;
            $path2 = $file2 ? $fileName2 : null;
            $path3 = $file3 ? $fileName3 : null;
            $sql = 'INSERT INTO product (prodCateNo, prodName, prodIntro,prodImage1, prodImage2, prodImage3,price)
                VALUES (:prodCateNo, :prodName, :prodIntro,:prodImage1,:prodImage2, :prodImage3,:price)';
    
            $fav = $pdo->prepare($sql);
            $fav->bindValue(":prodName", $_POST["prodName"]);
            $fav->bindValue(":prodCateNo", $prodCateNo);
            $fav->bindValue(":prodIntro", $_POST["prodIntro"]);
            $fav->bindValue(":prodImage1", $path1);
            $fav->bindValue(":prodImage2", $path2);
            $fav->bindValue(":prodImage3", $path3);
            $fav->bindValue(":price",$_POST["price"]);
            $fav->execute();
    
            break;
    
    
        case "1": //for修改
    
            if ($_POST["prodCateNo"] == "手鍊") {
                $prodCateNo = 1001;
            } else if ($_POST["prodCateNo"] == "項鍊") {
                $prodCateNo = 1002;
            } else if ($_POST["prodCateNo"] == "幸運石") {
                $prodCateNo = 1003;
            };
    
            $prodNo = $_POST["prodNo"];
            $proName = $_POST["prodName"];
            $prodCateNooN = $_POST["prodCateNooN"];
            $prodIntro = $_POST["prodIntro"];
            $price = $_POST['price'];
            $status = $_POST['status'];
            
    
            // 上傳檔案
            $file1 = $_FILES["prodImage1"] ?? null;
            $file2 = $_FILES["prodImage2"] ?? null;
            $file3 = $_FILES["prodImage3"] ?? null;
    
    
            if ($file1) {
                $file = uniqid();
                $fileInfo = pathinfo($_FILES['prodImage1']['name']);
                $ext = $fileInfo["extension"]; 
                $fileName1 = "$file.$ext"; 
                $from = $_FILES['prodImage1']['tmp_name']; 
                $to1 = "../images/shop/tarot/$fileName1";
                copy($from, $to1);
            }
    
            if ($file2) {
                $file = uniqid();
                $fileInfo = pathinfo($_FILES['prodImage2']['name']);
                $ext = $fileInfo["extension"]; 
                $fileName2 = "$file.$ext";
                $from = $_FILES['prodImage2']['tmp_name']; 
                $to2 = "../images/shop/tarot/$fileName2";
                copy($from, $to2);
            }
    
            if ($file3) {
                $file = uniqid();
                $fileInfo = pathinfo($_FILES['prodImage3']['name']);
                $ext = $fileInfo["extension"]; 
                $fileName3 = "$file.$ext";
                $from = $_FILES['prodImage3']['tmp_name']; 
                $to3 = "../images/shop/tarot/$fileName3";
                copy($from, $to3);
            }
    
            $path1 = $file1 ? $fileName1 : null;
            $path2 = $file2 ? $fileName2 : null;
            $path3 = $file3 ? $fileName3 : null;
    
            // sql 指令
            $sql = "UPDATE product SET prodName = '{$proName}', prodCateNo ={$prodCateNo},  prodIntro = '{$prodIntro}', price ={$price},status = '{$status}', prodImage1 = '{$fileName1}', prodImage2 = '{$fileName2}', prodImage3 = '{$fileName3}' WHERE prodNo = $prodNo";
    
            // 執行 sql
            $pdo->query($sql);
    
            break;
    }
    
?>


