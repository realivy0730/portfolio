'use strict';

var startDate = new Date();
var endDate = new Date('2020/11/11 23:59');
var spantime = (endDate - startDate) / 1000;
$(document).ready(function () {
	$(this).everyTime('1s', function (i) {
		spantime--;
		var d = Math.floor(spantime / (24 * 3600));
		var h = Math.floor(spantime % (24 * 3600) / 3600);
		var m = Math.floor(spantime % 3600 / 60);
		var s = Math.floor(spantime % 60);

		if (spantime > 0) {
			$("#myday").text(d);
			$("#hour").text(h);
			$("#min").text(m);
			$("#sec").text(s);
		} else {
			// 避免倒數變成負的
			$("#myday").text(0);
			$("#hour").text(0);
			$("#min").text(0);
			$("#sec").text(0);
		}
	});
});