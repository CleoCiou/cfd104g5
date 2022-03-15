<?php 
try{
	//連線
	require_once("connectdb.php"); 
	$sql = "select a.artTime, a.title, a.content, a.likes, a.artFavs, a.activeIndex, a.favIndex, t.topicName, m.memId from article a join article_topic t on (a.topicNo = t.topicNo) join members m on (a.memNo = m.memNo)"; 
	$article = $pdo->query($sql);
	$articleRow = $article->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($articleRow);

}catch(PDOException $e){
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";

}

 ?>  