$(document).ready(function(){
	var $root = $('html, body');
	$('a[href^="#"]:not(.dropdown-toggle)').click(function(){
		if(this.href.indexOf("#") < this.href.length-1){
			scrollTarget = $( $.attr(this, 'href') ).offset().top;
		} else {
			scrollTarget = 0;
		}
		$root.animate({
			scrollTop: scrollTarget
		}, 500);
	});
});