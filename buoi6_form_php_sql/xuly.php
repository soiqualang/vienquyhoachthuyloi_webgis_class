<?php
	//Tạo connection
	define("PG_DB","quanly_hocsinh");
	define("PG_HOST","localhost");
	define("PG_USER","postgres");
	define("PG_PORT","5433");
	define("PG_PASS","******");
	
	$dbcon=pg_connect("dbname=".PG_DB." user=".PG_USER." password=".PG_PASS." host=".PG_HOST." port=".PG_PORT);
	
	if(isset($_GET['ten'])){
		//$ten='thị b';
		//Nhận thông tin từ method GET
		$ten=$_GET['ten'];
		
		//Nhận thông tin từ method POST
		//$ten=$_POST['ten'];
		
		//SELECT
		//Tạo câu truy vấn
		$sql='SELECT * FROM "ds_hocsinh" WHERE "ten" ILIKE \'%'.$ten.'%\'';
		
		//Thực thi truy vấn
		$query=pg_query($dbcon,$sql);
		
		echo '<h2>Kết quả tìm kiếm</h2>';
		while($kq=pg_fetch_assoc($query)){
			echo 'Tên: '.$kq['ten'].' - '.$kq['tuoi'].' - '.$kq['diachi'];
			echo '<br>';
		}
	}else{
		echo 'Bạn không có quyền truy cập vào đây.';
	}	
	
	echo '<hr>';
	echo '<a href="timkiem.html">Quay lại</a>';
?>