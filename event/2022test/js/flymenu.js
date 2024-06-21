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

// $(window).scroll(function () {
// 		var top_position = $(this).scrollTop();
// 		if (top_position > 10) {
// 				if ($(window).width() > 1025) {
// 						// Let the item move with scrolling.
// 					$(".FlyNav1").animate({right:0, opacity:1},50);
// 					$(".FlyNav2").animate({left:0, opacity:1},50);
// 				}
// 		} else {
// 				// Reset the position to default.
// 				$(".FlyNav1").animate({right:-200, opacity:0},50);
// 				$(".FlyNav2").animate({left:-200, opacity:0},50);
// 		}
// });