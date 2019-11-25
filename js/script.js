function topnavChange()
{
	var node = document.getElementsByClassName('nd-animation')[0];
	if (node.classList.contains('is-open')) {
		node.classList.remove('is-open');
	} else {
		node.classList.add('is-open');
	}
	var node1 = document.getElementsByClassName('topnav')[0];
	if (node1.classList.contains('shownav')) {
		node1.classList.remove('shownav');
	} else {
		node1.classList.add('shownav');
	}	
}
function date() {
	var d = new Date();
	var wk = new Array('星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日');
	var yy = d.getFullYear();
	var MM = d.getMonth()+1;
	var ww = d.getDay()-1;
	var dd = d.getDate();
	var hhh = d.getHours();
	var mmm = d.getMinutes();
	var sss = d.getSeconds();
	var hh = checkTime(hhh);
	var mm = checkTime(mmm);
	var ss = checkTime(sss);
	function checkTime(i){
		if(i<10){
			i= "0" + i;
		}
		return i;
	}
	var nowdate = "当前时间为："+yy+"年"+MM+"月"+dd+"日 "+wk[ww]+" "+hh+"时"+mm+"分"+ss+"秒";
	return nowdate;
}
setInterval("document.getElementById('date').innerHTML = date();",500);