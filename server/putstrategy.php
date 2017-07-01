<?php 
	header("Content-type:application/json;charset=utf-8");
	$link = mysqli_connect('localhost','root','root','strategyPlat',8889);
	if ($link) {
		$troduce=$_POST['newtitle'];
		$img=$_POST['newfirstpage'];
		$sql="INSERT INTO strategyview (img, troduce) VALUES ('{$img}','{$troduce}')";
		mysqli_query($link,"SET NAMES utf8");
		$result=mysqli_query($link,$sql);		
		echo json_encode($troduce);
	}
 ?>