$(document).ready(function(){
	$('.FlyMenuBlock a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
		'scrollTop': $target.offset().top - 10
		}, 900, 'swing');
	});



	$('.FlyMenuBlock .BtnToggle').click(hideHandler);
	function hideHandler(){
		$('.FlyMenu').toggle();
		$('.FlyMenuBlock .BtnToggle').toggleClass('click_me_active');
	}

	$('.FlyAdBlock .BtnToggle2').click(hideHandler2);
	function hideHandler2(){
		$('.FlyAd').toggle();
		$('.FlyAdBlock .BtnToggle2').toggleClass('click_me_active2');
	}

});