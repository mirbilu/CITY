<?php 
	header("Content-type:application/json;charset=utf-8");
	$link = mysqli_connect('mysql.rdsm2ntalmdzv5t.rds.gz.baidubce.com','mirbilu','chenlin123','strategyPlat',3306);
	if ($link) {
		$title=$_POST['newtitle'];
		$img=$_POST['newfirstpage'];
		$type=$_POST['newtype'];
		$contant=$_POST['newcontant'];
		$date=$_POST['newdate'];
		$auther=$_POST['newauther'];
		$sql="INSERT INTO `strategy`( `time`, `introduce`, `img`, `type`, `title`,`auther`) VALUES ('{$date}','{$contant}','{$img}','{$type}','{$title}','{$auther}')";
		mysqli_query($link,"SET NAMES utf8");
		$result=mysqli_query($link,$sql);		
		echo json_encode($troduce);
	}
 ?>