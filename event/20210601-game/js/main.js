'use strict';

$('.LinkGo a').click(function () {
	$('.GameBlock .GameSlot').addClass('PlayOn');
	// setTimeout(function() {
	// 	$('.GameBlock').removeClass('PlayOn').addClass('Hit');
	// }, 400); // delay 100 ms
});
$('.LinkGo a').click(function () {
	$('.GameBlock .GamePlay').addClass('PlayOn');
	setTimeout(function () {
		$('.GameBlock .GamePlay').removeClass('PlayOn').addClass('Hit');
	}, 400); // delay 100 ms
	setTimeout(function () {
		$('.GameBlock .GamePlay').removeClass('Hit');
	}, 800);
});