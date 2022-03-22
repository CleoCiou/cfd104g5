<?php
    include('connectdb.php');

    // header 格式
    header('Content-Type: application/json; charset=utf-8');
    // 如果 ajax 使用 POST 傳送才處理
    if($_SERVER['REQUEST_METHOD'] === 'POST') {

        switch ($_POST["case"]) {

            case "plus":

                //文章編號的變數
                $no = $_POST['no'];

                $sql = "update article set likes = likes + 1 
                where artNo = $no";

                $plus = $pdo->query($sql);
                $plusRows = $plus->fetch(PDO::FETCH_ASSOC);
            
                echo json_encode($plusRows);
                    
                break;
        
            case "reduce":

                //文章編號的變數
                $no = $_POST['no'];

                $sql = "update article set likes = likes - 1 
                where artNo = $no";
        
                $reduce = $pdo->query($sql);
                $reduceRows = $reduce->fetch(PDO::FETCH_ASSOC);
            
                echo json_encode($reduceRows);
                break;
        }
    }
?>