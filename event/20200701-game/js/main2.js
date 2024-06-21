$(function () {
	$('.BtnGo a').click(function () {
		$(this).parent('.GameBlock').toggleClass('active');
	});
	$('.BtnClose a').click(function () {
		$(this).parents('.Lightbox').hide();
	});
});