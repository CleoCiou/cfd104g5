<?php
    include('connectdb.php');

    // header 格式
    header('Content-Type: application/json; charset=utf-8');

    $file = $_FILES["file"];
    if ($file) {
        $file = uniqid();
        $fileInfo = pathinfo($_FILES['file']['name']);
        $ext = $fileInfo["extension"]; 
        $fileName = "$file.$ext"; 
        $from = $_FILES['file']['tmp_name']; 
        $to1 = "../images/certificate/$fileName";
        copy($from, $to1);

        $to2 = "$fileName";
        echo json_encode(array("img"=>$to2));
    }

?>