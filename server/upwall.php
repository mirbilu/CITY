<?php 
	header("Content-type:application/json;charset=utf-8");
	$link = mysqli_connect('mysql.rdsm2ntalmdzv5t.rds.gz.baidubce.com','mirbilu','chenlin123','strategyplat',3306);
	if ($link) {
		$sql='SELECT * FROM testimonials';
		mysqli_query($link,"SET NAMES utf8");
		$result=mysqli_query($link,$sql);
		$senddata=array();
		while($row=mysqli_fetch_assoc($result)){
			array_push($senddata, array(
				'id'=>$row['id'],
				'message'=>$row['message']
			));
		}
		echo json_encode($senddata);
	}
 ?>