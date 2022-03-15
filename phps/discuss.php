<?php 
try{
	//連線
	require_once("connectdb.php"); 
	$sql = "
	select a.artNo, a.artTime, a.title, a.content, a.likes, a.artFavs, a.activeIndex, a.favIndex, a.msgs,
	t.topicName, m.memId, m.memImage
	from article a 
	join article_topic t 
		on (a.topicNo = t.topicNo) 
	join members m 
		on (a.memNo = m.memNo)
	
	"; 
	$article = $pdo->query($sql);
	$articleRow = $article->fetchAll(PDO::FETCH_ASSOC);

	if($article -> rowCount()>0){
		echo json_encode($articleRow);
		// 把這的二維陣列的檔案 轉成JSIN檔看得懂的字串
	}


}catch(PDOException $e){
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";

}

 ?>  