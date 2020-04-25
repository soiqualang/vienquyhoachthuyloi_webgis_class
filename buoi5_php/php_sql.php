<?php
	//Tạo connection
	define("PG_DB","quanly_hocsinh");
	define("PG_HOST","localhost");
	define("PG_USER","postgres");
	define("PG_PORT","5433");
	define("PG_PASS","2679191");
	
	$dbcon=pg_connect("dbname=".PG_DB." user=".PG_USER." password=".PG_PASS." host=".PG_HOST." port=".PG_PORT);
	
	//SELECT
	//Tạo câu truy vấn
	$sql='SELECT * FROM ds_hocsinh';
	
	//Thực thi truy vấn
	$query=pg_query($dbcon,$sql);
	
	while($kq=pg_fetch_assoc($query)){
		echo 'Tên: '.$kq['ten'].' - '.$kq['tuoi'].' - '.$kq['diachi'];
		echo '<br>';
	}
	
	//Insert
	//Tạo truy vấn
	$sql="INSERT INTO ds_hocsinh (ten, tuoi, diachi)
VALUES ('Phạm B', '12', 'dsfdsgsg')";
	//thực thi
	//pg_query($dbcon,$sql);
	
	//Update - Cập nhật dữ liệu
	$sql="UPDATE ds_hocsinh SET
ten = 'Phạm Văn B',
tuoi = '17',
diachi = 'Ấp C'
WHERE id = '8'";

	//pg_query($dbcon,$sql);
	
	//Delete - Xóa dữ liệu
	$sql="DELETE FROM ds_hocsinh
WHERE id = '2'";
	//pg_query($dbcon,$sql);
	
	
?>