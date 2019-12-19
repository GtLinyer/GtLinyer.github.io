function gifcha() {
	var c = document.getElementById('c');
	var tn = document.getElementById('tpn');
	if (c.classList.contains('showgif')) {
		c.classList.add('closegif');
		c.classList.remove('showgif');
		c.setAttribute("src","https://cloud.linyer.cn:19999/image/c1.gif");
	} else if (c.classList.contains('closegif')){
		c.classList.add('showgif');
		c.classList.remove('closegif');
		c.setAttribute("src","https://cloud.linyer.cn:19999/image/c0.gif");
	}
	if (tn.classList.contains('shownav')) {
		tn.classList.remove('shownav');
	} else {
		tn.classList.add('shownav');
	}
}
var i = 0;
function ch() {
	i ++;
	if(i === 3) {
		document.getElementById("wel").innerHTML = "<p>憋点啦！</p><p>再点也炸不鸟！</p>";
	}else if(i === 4) {
		document.getElementById("wel").innerHTML = "<p>哇！</p><p>你还点！</p>";
	}else if(i === 5) {
		document.getElementById("wel").innerHTML = "<p>行了行了！</p><p>服了你了！</p>";
	}else if(i === 6) {
		document.getElementById("wel").innerHTML = "<p>算了！</p><p>不理你了！你自己玩吧！</p>";
	}else{
		document.getElementById("wel").innerHTML = "<p>Hi</p><p>Welocome</p><p>TO</p><p>My</p><p>World</p>";
	}
}
function gifcha1() {
	var c = document.getElementById('c');
	var tn = document.getElementById('tpn');
	if (c.classList.contains('showgif')) {
		c.classList.add('closegif');
		c.classList.remove('showgif');
		c.setAttribute("src","https://cloud.linyer.cn:19999/image/c1.gif");
	} else if (c.classList.contains('closegif')){
		c.classList.add('showgif');
		c.classList.remove('closegif');
		c.setAttribute("src","https://cloud.linyer.cn:19999/image/c0.gif");
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
	var nowdate = "当前时间为："+yy+"年"+MM+"月"+dd+"日 "+wk[ww]+"<br>"+hh+"时"+mm+"分"+ss+"秒";
	return nowdate;
}
setInterval("document.getElementById('date').innerHTML = date();",100);