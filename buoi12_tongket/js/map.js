//https://www.google.com/maps/@16.2033834,107.138095,5.75z
	
	geo_service='http://localhost:8080/geoserver/class1/wms?';
	geo_thuadat_service='http://localhost:8080/geoserver/geo1/wms?';
	
	
	
	//Khai bao ban do nen
	mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
	
	var mbAttr='hahahah';
	
	var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
	
	var streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
	
	//Google Satellite Hybrid: https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}
	
	var ghyrid  = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {attribution: 'Google Satellite Hybrid'});
	
	
	
	var topo = L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
		layers: 'TOPO-OSM-WMS'
	});
	
	
	//Them ban do vn_tinh
	var vn_tinh = L.tileLayer.wms(geo_service, {
		layers: 'class1:vn_tinh',
		format: 'image/png',
		transparent: true,
		tiled: true,
	});
	
	//Them ban do thua dat
	var duynghia_quangnam = L.tileLayer.betterWms(geo_thuadat_service, {
		layers: 'geo1:duynghia_quangnam',
		format: 'image/png',
		transparent: true,
		tiled: true,
	});
	
	//Lớp điểm - test_diem
	var test_diem = L.tileLayer.betterWms(geo_thuadat_service, {
		layers: 'geo1:test_diem',
		format: 'image/png',
		transparent: true,
		tiled: true,
	});
	
	var highlight_style = {
		"color": "#f6ff29",
		"weight": 5,
		"opacity": 0.5
	};
	highlight = new L.GeoJSON.AJAX(null, {
		style: highlight_style
	});
	
	
	var diem_wfs_cluster = L.markerClusterGroup();
	
	function marker2cluster(feature, layer){
		diem_wfs_cluster.addLayer(layer);
	}
	
	diem_wfs_url='http://localhost:8080/geoserver/geo1/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geo1%3Atest_diem&maxFeatures=200&outputFormat=application%2Fjson';
	
	diem_wfs_url='proxy.php?url='+encodeURIComponent(diem_wfs_url);
	
	diem_wfs = new L.GeoJSON.AJAX(diem_wfs_url,{
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng);
		},
		onEachFeature: marker2cluster
	});
	
	
	//https://www.google.com/maps/@15.841183,108.3778039,14z
	var map = L.map('map', {
		center: [15.841183, 108.3778039],
		zoom: 14,
		layers: [grayscale, duynghia_quangnam]
	});
	
	//Khai bao control layer
	//Ban do nen
	var baseLayers = {
		"Bản đồ Grayscale": grayscale,
		"Bản đồ Streets": streets,
		"Google Satellite Hybrid": ghyrid
	};
	
	//Ban do chuyen de
	var overlays = {		
		"Bản đồ Topo": topo,
		"Tỉnh thành": vn_tinh,
		"Thửa đất": duynghia_quangnam,
		"Lớp điểm": test_diem,
		"Lớp điểm wfs": diem_wfs,
		"Lớp điểm wfs cluster": diem_wfs_cluster
	};
	
	//Add control, highlight to map
	
	highlight.addTo(map);
	
	tmp_info={};
	
	L.control.layers(baseLayers, overlays).addTo(map);