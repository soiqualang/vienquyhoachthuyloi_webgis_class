function getObj(divid){
	return document.getElementById(divid);
}

function timkiem() {
  var shbando=getObj('shbando').value;
  var shthua=getObj('shthua').value;
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      getObj("kq").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "xuly.php?shbando="+shbando+"&shthua="+shthua, true);
  xhttp.send();
}

function zoom_highlight(id){
	//alert(id);
	
	//service trả về geojson
	//url='geo1.json';
	url='getgeojson.php?id='+id;
	highlight.refresh(url);
	
	//Zoom vô thửa đất
	highlight.on('data:loaded', function () {
      map.fitBounds(highlight.getBounds());
    });
}