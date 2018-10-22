<?php
	header("Content:text/html;charset=utf-8");
	
	$phoneNum=$_GET["phoneNum"];
	
	$con=mysql_connect("location","root","root");
	if(!$con){
		echo "数据库连接失败！";
	}else{
		mysql_select_db("guazi",$con);
		$mqlstr = "select * from denglu where name='$phoneNum'";
		$result = mysql_query($mqlstr,$con);
		if($result){
			//说明找到了，即可以登陆
			echo "1";
		}
		else{
			//说明没找到，即不可以登陆，让用户去注册
			echo "0";
		}
		mysql_close($con);
	}

?>
