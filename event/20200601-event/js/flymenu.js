'use strict';

$(document).ready(function () {
	$('.FlyNav a[href^="#"]').on('click', function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			scrollTop: $target.offset().top - 10
		}, 900, 'swing');
	});
});