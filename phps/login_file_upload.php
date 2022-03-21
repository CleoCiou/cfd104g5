<?php
    include('connectdb.php');

    // header 格式
    header('Content-Type: application/json; charset=utf-8');

    $file = $_FILES["file"];
    if ($file) {
        $file = uniqid();
        $fileInfo = pathinfo($_FILES['file']['name']);
        $ext = $fileInfo["extension"]; // 副檔名
        $fileName = "$file.$ext"; // 9988877766.jpg
        $from = $_FILES['file']['tmp_name']; //暫存區含路徑
        $to1 = "../images/teller_mem/$fileName";
        copy($from, $to1);

        $to2 = "$fileName";
        echo json_encode(array("img"=>$to2));
    }

?>