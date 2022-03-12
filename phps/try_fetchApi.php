<?php 
try{
	//連線
	require_once("connectdb.php"); 
	$sql = "select memId from members"; 
	$members = $pdo->query($sql);
	$membersRow = $members->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($membersRow);

}catch(PDOException $e){
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	// echo "系統暫時不能正常運行，請稍後再試<br>";	
	// exit("end---"); //php停止執行, 並輸出訊息
}

 ?>  