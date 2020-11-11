// 国家公祭日，黑白显示
var date = new Date();
var month = date.getMonth();
var day = date.getDate();
if(day === 13 && month === 11) {
	$("html").css({"filter": "grayscale(100%)",  "-webkit-filter": "grayscale(100%)"});
}

function getYear() {
    var d = new Date();
    var yy = d.getFullYear();
    return yy;
}
function cTpn(id) {
    $(".nav-link").removeAttr("style");
    $(".nav-link").removeClass("active");
    $("#"+id).addClass("active");
    $("#"+id).attr("style","color: #2980B9;");
}