//https://www.google.com/maps/@16.2033834,107.138095,5.75z
	
	geo_service='http://localhost:8080/geoserver/class1/wms?';
	geo_thuadat_service='http://localhost:8080/geoserver/geo1/wms?';
	geo_tiff_srv='http://localhost:8080/geoserver/vinagit/wms?';
	
	
	//Khai bao ban do nen
	mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
	
	var mbAttr='hahahah';
	
	var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
	
	var streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
	
	
	
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
	
	var nd_2010 = L.tileLayer.wms(geo_tiff_srv, {
		layers: 'vinagit:nd_2010',
		format: 'image/png',
		transparent: true,
		tiled: true
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
		"Bản đồ Streets": streets
	};
	
	//Ban do chuyen de
	var overlays = {		
		"Bản đồ Topo": topo,
		"Tỉnh thành": vn_tinh,
		"Thửa đất": duynghia_quangnam,
		"nd_2010": nd_2010
	};
	
	L.control.layers(baseLayers, overlays).addTo(map);