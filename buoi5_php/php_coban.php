<?php
	//Khai báo biến
	/*
	Tên biến tốt nhất:
		Viết thường
		Không dấu
		Không khoảng trắng
		Không ký tự đặc biệt
	*/
	$ten='Nguyen Van A';
	$num1=12;
	
	/*
	Comment khối lệnh, multi line
	*/
	//Nối chuỗi
	echo $ten;
	echo 'Xin chao '.$ten;
	echo '<br>';
	echo "Day la nhay doi";
	echo '<hr>';
	echo "Hoc sinh ".$ten.", ".$num1." tuoi";
	echo '<hr>';
	
	//Cấu trúc điều khiển
	//Điều kiện
	/*
	==, !=, >, <, <=, >=
	*/
	$num1=20;
	if($num1>20){
		echo $num1.' lon hon 20';
	}elseif($num1==20){
		echo $num1.' bang 20';
	}else{
		echo $num1.' be hon 20';
	}
	
	//Vòng lặp
	echo '<h3>Vòng lặp</h3>';
	
	$traicay=['Cam','Quyt','Buoi','Xoai'];
	
	for($i=0;$i<count($traicay);$i++){
		echo $traicay[$i];
		echo '<br>';
	}
	
	echo '<hr>';
	//Hàm - function
	echo '<h3>Hàm - funtion</h3>';
	
	function tinh_tong($num1,$num2){
		echo $num1+$num2;
	}
	
	function tinh_tong_v2($num1,$num2){
		return $num1+$num2;
	}
	
	$a=12;
	//tinh_tong($a,6);
	
	echo tinh_tong_v2($a,6)/9;
	
	
?>