<?php 
	header("Content-type:application/json;charset=utf-8");
	$link = mysqli_connect('mysql.rdsm2ntalmdzv5t.rds.gz.baidubce.com','mirbilu','chenlin123','strategyPlat',3306);
	if ($link) {
		$username = $_POST['username'];
		$sql="SELECT * FROM admin WHERE username='{$username}'";
		mysqli_query($link,"SET NAMES utf8");
		$result=mysqli_query($link,$sql);		
		$senddata=array();	
		while($row=mysqli_fetch_assoc($result)){
			array_push($senddata, array(
					'username'=>$row['username'],
					'passwords'=>$row['passwards'],
				));
		};
		echo json_encode($senddata);
	}else{
		echo json_encode("不存在该用户");
	}
 ?>