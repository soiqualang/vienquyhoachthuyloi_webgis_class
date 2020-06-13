<?php
	//Khai bao DB
	include('config.php');
	
	//xuly.php?shbando=14&shthua=5
	if(isset($_GET['shbando']) and isset($_GET['shthua'])){
		$shbando=$_GET['shbando'];
		$shthua=$_GET['shthua'];
		
		//Noi dung xu ly
		if($shbando!='' and $shthua!=''){
			//Khi co du shbando,shthua
			$truyvan='SELECT * FROM "duynghia_quangnam" WHERE "shbando" = \''.$shbando.'\' AND "shthua" = \''.$shthua.'\' LIMIT 50';
		}else if($shbando!='' and $shthua==''){
			//Có số tờ, không có số thửa
			$truyvan='SELECT * FROM "duynghia_quangnam" WHERE "shbando" = \''.$shbando.'\' LIMIT 50';
		}else if($shbando!='' and $shthua==''){
			//Không có số tờ, Có số thửa
			$truyvan='SELECT * FROM "duynghia_quangnam" WHERE "shthua" = \''.$shthua.'\' LIMIT 50';
		}else{
			//Không có số tờ, không có số thửa
			$truyvan='SELECT * FROM "duynghia_quangnam" LIMIT 50';
		}
		
		
		//echo $truyvan;
		
		$thucthi=pg_query($dbcon,$truyvan);
		//check co ket qua hay khong
		if(pg_num_rows($thucthi)>0){
			//Lay du lieu ra
			echo '<table border="1">';
			echo '<tr>
					<td><b>Tên</b></td>
					<td><b>Địa chỉ</b></td>
				</tr>';
			while($kq=pg_fetch_assoc($thucthi)){
				/* echo 'Tên '.$kq['tenchusdd'].', địa chỉ là '.$kq['diachi'];
				echo '<br>'; */
				
				echo '<tr>
						<td>'.$kq['tenchusdd'].'</td>
						<td>'.$kq['diachi'].'</td>
					</tr>';
			}
			echo '</table>';
		}else{
			echo 'Không tìm thấy kết quả phù hợp.';
		}
		
		
		
	}else{
		echo 'Forbiden!!!';
		//header("Location: index.html");
	}
	
?>