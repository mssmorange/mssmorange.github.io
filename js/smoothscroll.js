// JavaScript Document



$(function(){
  $('a[href^="#"]').click(function(){
    let speed = 1000;
    let href= $(this).attr("href");
	let target = $("html");
	
	if( (href != "#") && (href != "") ) {
	target = $( href );
	}
	
	let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});



