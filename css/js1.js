// JavaScript Document
	$(function(){
    //锚点跳转滑动效果  
$("all").click(function () {

    $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top -20+ "px"}, 500);

    return false;//不要这句会有点卡顿

})};