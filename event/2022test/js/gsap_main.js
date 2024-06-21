"use strict";

$(document).ready(function () {

	var tl = new TimelineMax({
		repeat: -1
	});

	tl.staggerFromTo($(".Same2"), 5, {
		transformOrigin: "50% 50%",
		yPercent: 10,
		// duration:  .5//時間
		opacity: 0 //透明度

	}, {
		transformOrigin: "50% 50%",
		yPercent: 1,
		ease: Elastic.easeOut,
		opacity: 1 //透明度

	}, .2);

	// var t2 = new TimelineMax({
	// 	repeat: -1,
	// 	scaleY: 0,
	// 	opacity: 1, //透明度
	// 	transformOrigin: '10% 95%', //2D變型對齊 left center right  top center bottom
	// });

	// t2.staggerFromTo($(".idol2"), 1, {
	// 	scaleY: 1,
	// 	ease: Elastic.easeOut.config(1,0.2),

	// }, {
	// 	yoyo: true, //反向
	// 	rotation: -5,
	// 	transformOrigin: '10% 95%', //2D變型對齊 left center right  top center bottom
	// 	ease: Sine.easeIn,

	// }, .1);


	// var t3 = new TimelineMax({
	// 	repeat: -1,
	// 	yPercent: -5, //單位%
	// 	rotation: -10,
	// 	transformOrigin: '50% 0%', //2D變型對齊 left center right  top center bottom
	// });

	// t3.staggerFromTo($(".idol1"), 2, {

	// 	yPercent: 0, //單位%
	// 	rotation: 0,
	// 	opacity: 1, //透明度
	// 	ease: Sine.easeOut,

	// }, {
	// 	yoyo: true, //反向
	// 	rotation: -2,
	// 	transformOrigin: '0 0', //2D變型對齊 left center right  top center bottom
	// 	ease: Sine.easeInOut,

	// }, .1);
});