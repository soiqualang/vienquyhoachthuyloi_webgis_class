<?php
	//Khai bao DB
	include('config.php');
	
	//xuly.php?shbando=14&shthua=5
	if(isset($_GET['shbando']) and isset($_GET['shthua'])){
		$shbando=$_GET['shbando'];
		$shthua=$_GET['shthua'];
		
		if($shbando!='' and $shthua!=''){
			//Noi dung xu ly
			//Khi co du shbando,shthua
			$truyvan='SELECT * FROM "duynghia_quangnam" WHERE "shbando" = \''.$shbando.'\' AND "shthua" = \''.$shthua.'\' LIMIT 50';
			
			$thucthi=pg_query($dbcon,$truyvan);
			//check co ket qua hay khong
			if(pg_num_rows($thucthi)>0){
				//Lay du lieu ra
				while($kq=pg_fetch_assoc($thucthi)){
					echo 'Tên '.$kq['tenchusdd'].', địa chỉ là '.$kq['diachi'];
					echo '<br>';
				}
			}else{
				echo 'Không tìm thấy kết quả phù hợp.';
			}
			
			
			
		}else{
			echo 'Forbiden!!!';
		}
		
		
	}else{
		echo 'Forbiden!!!';
		//header("Location: index.html");
	}
	
?>