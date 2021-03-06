L.TileLayer.BetterWMS = L.TileLayer.WMS.extend({
  
  onAdd: function (map) {
    // Triggered when the layer is added to a map.
    //   Register a click listener, then do all the upstream WMS things
    L.TileLayer.WMS.prototype.onAdd.call(this, map);
    map.on('click', this.getFeatureInfo, this);
  },
  
  onRemove: function (map) {
    // Triggered when the layer is removed from a map.
    //   Unregister a click listener, then do all the upstream WMS things
    L.TileLayer.WMS.prototype.onRemove.call(this, map);
    map.off('click', this.getFeatureInfo, this);
  },
  
  getFeatureInfo: function (evt) {
    // Make an AJAX request to the server and hope for the best
    url = this.getFeatureInfoUrl(evt.latlng),
        showResults = L.Util.bind(this.showGetFeatureInfo, this);
		
	url='proxy.php?url='+encodeURIComponent(url);
	
    $.ajax({
		url: url,
      success: function (data, status, xhr) {
        var err = typeof data === 'string' ? null : data;
        showResults(err, evt.latlng, data);
      },
      error: function (xhr, status, error) {
        showResults(error);  
      }
    });
  },
  
  getFeatureInfoUrl: function (latlng) {
    // Construct a GetFeatureInfo request URL given a point
    var point = this._map.latLngToContainerPoint(latlng, this._map.getZoom());
    var size = this._map.getSize();
    var height=size.y;
    var height2=Math.floor(size.y);
    console.table(height,height2)
    var width=size.x;
    var width2=Math.floor(width);
    console.table(width,width2)
	
	/* alert(height);
	alert(width); */
        
	params = {
	  request: 'GetFeatureInfo',
	  service: 'WMS',
	  srs: 'EPSG:4326',
	  styles: this.wmsParams.styles,
	  transparent: this.wmsParams.transparent,
	  version: this.wmsParams.version,      
	  format: this.wmsParams.format,
	  bbox: this._map.getBounds().toBBoxString(),
	  height: height,
	  width: width,
	  layers: this.wmsParams.layers,
	  query_layers: this.wmsParams.layers,
	  //info_format: 'text/html'
	  info_format: 'application/json'
	};
    
    params[params.version === '1.3.0' ? 'i' : 'x'] = Math.floor(point.x);
    params[params.version === '1.3.0' ? 'j' : 'y'] = Math.floor(point.y);

    console.table(Math.floor(point.x),Math.floor(point.y))
    
    return this._url + L.Util.getParamString(params, this._url, true);
  },
  
  showGetFeatureInfo: function (err, latlng, content) {
    if (err) { console.log(err); return; } // do nothing if there's an error
    
    content=JSON.parse(content);
    console.log(content);
    t1=content;
    
    var diachi=t1.features[0].properties.diachi;
    var dientich=t1.features[0].properties.dientich;
    var loaidat=t1.features[0].properties.mdsd;
    var tenchu=t1.features[0].properties.tenchusdd;
    var soto=t1.features[0].properties.shbando;
    var sothua=t1.features[0].properties.shthua;
    var img_path=t1.features[0].properties.img_path;
    
    var noidung='';
    noidung+='<h2>Thông tin thửa đất</h2>';
    noidung+='<hr>';
    noidung+='<b>Số tờ</b>: '+soto+'<br>';
    noidung+='<b>Số thửa</b>: '+sothua+'<br>';
    noidung+='<b>Tên chủ</b>: '+tenchu+'<br>';
    noidung+='<b>Loại đất</b>: '+loaidat+'<br>';
    noidung+='<b>Địa chỉ</b>: '+diachi+'<br>';
	
	/* noidung+='<img src="'+img_path+'" width="200px">'; */
	
	/* noidung+='<img src="https://www.w3schools.com/html/pic_trulli.jpg" width="200px">'; */
    
	//kiem tra co hinh anh hay khong
	if(img_path!=null){
		noidung+='<img src="img/thuadat/'+img_path+'" width="300px">';
	}
	
	highlight.refresh(url);
    
    // Otherwise show the content in a popup, or something.
    L.popup({ maxWidth: 800})
      .setLatLng(latlng)
      .setContent(noidung)
      .openOn(this._map);
  }
});

L.tileLayer.betterWms = function (url, options) {
  return new L.TileLayer.BetterWMS(url, options);  
};
