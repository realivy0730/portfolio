"use strict";

$(document).ready(function () {

	var tl = new TimelineMax({
		repeat: -1
	});

	tl.staggerFromTo($(".line"), 5, {
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
});

$(document).ready(function () {

	var t2 = new TimelineMax({
		repeat: -1
	});

	t2.staggerFromTo($(".line2"), 5, {
		transformOrigin: "50% 50%",
		yPercent: -10,
		// duration:  .5//時間
		opacity: 0 //透明度

	}, {
		transformOrigin: "50% 50%",
		yPercent: 1,
		ease: Elastic.easeOut,
		opacity: 1 //透明度

	}, .2);
});

// $(document).ready(function () {

// 	var t3 = new TimelineMax({
// 		repeat: -1
// 	});

// 	t3.staggerFromTo($(".ill"), 3, {
// 		transformOrigin: "50% 50%",
// 		yPercent: -3,
// 		// duration:  .5//時間

// 	},{
// 		transformOrigin: "50% 50%",
// 		yPercent: 1,
// 		ease: Elastic.easeOut,


// 	}, .2);
// });
