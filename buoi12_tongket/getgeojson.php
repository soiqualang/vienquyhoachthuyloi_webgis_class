<?php
	include('config.php');
	
	if(isset($_GET['id'])){
		$id=$_GET['id'];
		if($id!=''){
			$truyvan='select ST_AsGeoJSON(geom) as geojson from duynghia_quangnam where id='.$id;
			$thucthi=pg_query($dbcon,$truyvan);
			while($kq=pg_fetch_assoc($thucthi)){
				echo $kq['geojson'];
			}
		}
	}
?>