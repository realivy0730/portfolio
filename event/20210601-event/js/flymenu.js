'use strict';

$(document).ready(function () {
		$('.FlyNav a[href^="#"],.FootOpenNav a[href^="#"]').on('click', function (e) {
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
		if (top_position > 550) {
				if ($(window).width() > 767) {
						// Let the item move with scrolling.
						$(".FlyMenu").fadeIn();
				}
		} else {
				// Reset the position to default.
				$(".FlyMenu").hide();
		}
});