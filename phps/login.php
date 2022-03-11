<?php
    include('../php/connectdb.php');
    header('Content-Type: application/json; charset=utf-8');

    $msg['login'] = false;
    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        $id = $_POST['memId'];
        $pwd = $_POST['memPwd'];

        if ($id !== '' && $pwd !== '') {
            // insert login info
            // $time = date('YmdHis');
            // $msg['loginTime'] = $time;

            // $sql = "update member set sex=? where memId=? and memPwd=?";
            $sql = "select * from members where memId = ? and memPwd = ?";
            $data = [$id, $pwd];
            // $data = [$time, $id, $pwd];
            $result = $pdo -> prepare($sql);

            try {
                $result -> execute($data);
                $count = $result->rowCount();
                if ($count === 1) {
                    // login success
                    // $msg['boo'] = true;
                    $msg['msg'] = '登入成功';
                    $msg['login'] = true;
                }
                else {
                    $msg['msg'] = '帳號或密碼錯誤';
                }
            }
            catch (PDOException $e){
                $msg['msg'] = $e -> getMessage();
            }
        }
        else {
            $msg['msg'] = '輸入資訊不完整';
        }
    }
    else {
        $msg['msg'] = '請使用POST';
    }

    echo json_encode($msg);

?>