'use strict';

$(function () {
	$('.BtnGo a').click(function () {
		$(this).closest('.GameBlock').toggleClass('active');
	});
	$('.BtnClose a').click(function () {
		$(this).parents('.Lightbox').hide();
	});
});