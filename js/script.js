function gifcha() {
	var c = document.getElementById('c');
	var tn = document.getElementById('tpn');
	if (c.classList.contains('showgif')) {
		c.classList.add('closegif');
		c.classList.remove('showgif');
		c.setAttribute("src","image/c1.gif");
	} else if (c.classList.contains('closegif')){
		c.classList.add('showgif');
		c.classList.remove('closegif');
		c.setAttribute("src","image/c0.gif");
	}
	if (tn.classList.contains('shownav')) {
		tn.classList.remove('shownav');
	} else {
		tn.classList.add('shownav');
	}
}
function gifcha1() {
	var c = document.getElementById('c');
	var tn = document.getElementById('tpn');
	if (c.classList.contains('showgif')) {
		c.classList.add('closegif');
		c.classList.remove('showgif');
		c.setAttribute("src","../image/c1.gif");
	} else if (c.classList.contains('closegif')){
		c.classList.add('showgif');
		c.classList.remove('closegif');
		c.setAttribute("src","../image/c0.gif");
	}
	if (tn.classList.contains('shownav')) {
		tn.classList.remove('shownav');
	} else {
		tn.classList.add('shownav');
	}
}
function date() {
	var d = new Date();
	var wk = new Array('星期日','星期一', '星期二', '星期三', '星期四', '星期五', '星期六');
	var yy = d.getFullYear();
	var MM = d.getMonth()+1;
	var ww = d.getDay();
	
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
setInterval("document.getElementById('date').innerHTML = date();",100);