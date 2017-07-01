<?php 
	header("Content-type:application/json;charset=utf-8");
	$link = mysqli_connect('mysql.rdsm2ntalmdzv5t.rds.gz.baidubce.com','mirbilu','chenlin123','strategyplat',3306);
	if($link){
		// 插入留言
		$message=$_POST['mcontant'];
		$sql="INSERT INTO testimonials( message) VALUES ('{$message}')";		
		mysqli_query($link,"SET NAMES utf8");
		$result=mysqli_query($link,$sql);		
		echo json_encode($message);
	}
 ?>