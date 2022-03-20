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
    // for(let $i=1; $i<4 ; $i++ ){
    //     $file = uniqid();
    //     $fileInfo = pathinfo($_FILES['prodImage1']['name']); 
    //     $ext = $fileInfo["extension"]; // 副檔名
    //     $fileName.$i = "$file.$ext"; // 9988877766.jpg
    //     $from = $_FILES['prodImage1']['tmp_name']; //暫存區含路徑
    //     $to = "../images/shop/tarot/$fileName.$i";
    //     copy($from, $to);
    // }
    $file = uniqid();
    if($file1){
        $fileInfo = pathinfo($_FILES['prodImage1']['name']); 
        $ext = $fileInfo["extension"]; // 副檔名
        $fileName1 = "$file.$ext"; // 9988877766.jpg
        $from = $_FILES['prodImage1']['tmp_name']; //暫存區含路徑
        $to1 = "../images/shop/tarot/$fileName1";
        copy($from, $to1);
    }

    // 資料庫存$fileName
    if($file2){
        $fileInfo = pathinfo($_FILES['prodImage2']['name']); 
        $ext = $fileInfo["extension"]; // 副檔名
        $fileName2 = "$file.$ext";
        $from = $_FILES['prodImage2']['tmp_name']; //暫存區含路徑
        $to2 = "../images/shop/tarot/$fileName2";
        copy($from, $to2);
    }

    if($file3)
    $fileInfo = pathinfo($_FILES['prodImage3']['name']); 
    $ext = $fileInfo["extension"]; // 副檔名
    $fileName3 = "$file.$ext";
    $from = $_FILES['prodImage3']['tmp_name']; //暫存區含路徑
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

    // VALUES (13, :prodCateNo, :prodName, :prodIntro,:prodImage1,:prodImage2, :prodImage3)' ;
   
    $fav = $pdo->prepare($sql);
    $fav->bindValue(":prodName",$_POST["prodName"]);
    // $fav->bindValue(":prodCateNo",$_POST["prodCateNooN"]);
    $fav->bindValue(":prodCateNo",$prodCateNo);
    $fav->bindValue(":prodIntro",$_POST["prodIntro"]);
    $fav->bindValue(":prodImage1",$path1);
    $fav->bindValue(":prodImage2",$path2);
    $fav->bindValue(":prodImage3",$path3);

   
    
    

    $fav->execute();
    // 如果 ajax 使用 POST 傳送才處理
    if($_SERVER['REQUEST_METHOD'] === 'POST') {

    // $sql = "select product.`prodName`,product_category.cateType,product_category.cateName,product.price,product.`prodImage1`, product.`prodImage2`,product.`prodImage3`,product.`prodIntro`,product.`status` from product join product_category on (product.prodCateNo = product_category.prodCateNo)";

    // // 資料表
    // $table = $_POST['table'];
    // $value = $_POST['insertValue'];
    // $sql = "insert into $table values($value)";
    // $msg['sql'] = $sql;

    // $table = $_POST['product_category'];
    // $value = $_POST['insertValue'];
    // $sql = "insert into $product_category values($value)";
    // $msg['sql'] = $sql;
    

    // $sql = 'select product.`prodName`,product.price,product.`prodImage1`, product.`prodImage2`,product.`prodImage3`,product.`prodIntro`,product.`status`,product_category.cateType,product_category.cateName 
    // from product
    // join product_category 
    // on (product.prodCateNo = product_category.prodCateNo)';


    // 選到彈跳視窗裡面的欄位
    // $sql = 'select product.`prodName`,product_category.cateType,product_category.cateName ,product.`prodIntro`,product.`prodImage1`, product.`prodImage2`,product.`prodImage3`,product.`status`
    // from product
    // join product_category 
    // on (product.prodCateNo = product_category.prodCateNo)';

    // $sql = 'INSERT INTO product (product_category.cateType, product_category.cateName)
    // // VALUES (`'${detail.cateName}'`, `'${detail.cateType}'`)';

        // 資料表
        // $table = $_POST['table'];
        // $value = $_POST['insertValue'];
        // $sql = "insert into $table values($value)";
        // $msg['sql'] = $sql;
    
    // SELECT 取值名稱 FROM 表格名稱 WHERE 值名稱 = "" AND 值名稱 = ""

    // $favRows = $fav->fetchAll(PDO::FETCH_ASSOC);

        
    //  問流水號 是否有 有的話就不用特別填 
    }
    
?>



<!-- INSERT INTO customers (C_Id, Name, City, Address, Phone)
VALUES (3, '李三', '高雄縣', 'ZZ路300號', '07-12345678'); -->

<!-- // $sql = 'INSERT INTO `product`(`prodNo`) VALUES ('11')'; -->