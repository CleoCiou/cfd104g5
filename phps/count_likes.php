<?php
    include('connectdb.php');

    // header 格式
    header('Content-Type: application/json; charset=utf-8');
    // 如果 ajax 使用 POST 傳送才處理
    if($_SERVER['REQUEST_METHOD'] === 'POST') {

        switch ($_POST["case"]) {

            case "plus":

                $sql = "update article set msg = msg + 1 
                where artNo = `${msgIdx.artNo}`";

                $plus = $pdo->query($sql);
                $plusRows = $plus->fetch(PDO::FETCH_ASSOC);
            
                echo json_encode($plusRows);
                    
                break;
        
            case "reduce":
                $sql = "update article set msg = msg - 1 
                where artNo = `${msgIdx.artNo}`";
        
                // 執行
                $reduce = $pdo->query($sql);
                $reduceRows = $reduce->fetch(PDO::FETCH_ASSOC);
            
                echo json_encode($reduceRows);
                break;
        }
    }
?>