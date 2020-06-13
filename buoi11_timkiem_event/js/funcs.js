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