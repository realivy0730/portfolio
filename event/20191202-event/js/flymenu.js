'use strict';

$(document).ready(function () {
	$('.BottomBar a[href^="#"],.FlyNav a[href^="#"]').on('click', function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			scrollTop: $target.offset().top - 10
		}, 900, 'swing');
	});
});

$(window).scroll(function () {
	var top_position = $(this).scrollTop();
	if (top_position > 1800) {
		if ($(window).width() > 1200) {
			// Let the item move with scrolling.
			$(".FlyNav").fadeIn('slow');
		}
	} else {
		// Reset the position to default.
		$(".FlyNav").hide();
	}
});

$(function () {
	$('.hamburgerBox').click(function () {
		$(this).parents('.DropToggle').toggleClass('DropToggleOpen');
	});
	$('.DropMenu ol li a').click(function () {
		$(this).parents('.DropToggle').toggleClass('DropToggleOpen');
	});
});