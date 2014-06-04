$(document).ready(function(){
	var $root = $('html, body');
	$('a[href^="#"]').click(function(){
		$root.animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
		return false;
	});
	$('a[href="#"]').click(function(){
		$root.animate({
			scrollTop: 0
		}, 500);
		return false
	});
});