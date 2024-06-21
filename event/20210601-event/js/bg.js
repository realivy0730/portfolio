'use strict';

/*背景互動--PC背景-背景00捲動物件*/
$.debounce = function (func, wait, immediate) {
	var timeout;
	return function () {
		var context = this,
		    args = arguments;
		later = function later() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
$.throttle = function (func, wait) {
	var context, args, timeout, throttling, more, result;
	var whenDone = $.debounce(function () {
		more = throttling = false;
	}, wait);
	return function () {
		context = this, args = arguments;
		var later = function later() {
			timeout = null;
			if (more) func.apply(context, args);
			whenDone();
		};
		if (!timeout) timeout = setTimeout(later, wait);

		if (throttling) {
			more = true;
		} else {
			result = func.apply(context, args);
		};
		whenDone();
		throttling = true;
		return result;
	};
};

function bgscroll(val, top, num) {
	//背景互動(物件,起始top位置,速度)
	var $win = $(window);
	var $doc = $(document);
	var $bg = $(val);
	var handler = $.throttle(function (e) {
		var dTop = $doc.scrollTop();
		highLight(dTop);
	}, 100);

	function highLight(docTop) {
		$bg.css('background-position', 'center ' + -1 * (top + docTop * num) + 'px');
	};
	$win.scroll(handler);
};
$(function () {
	bgscroll('.bg_01', 0, 0.3);
	// bgscroll('.js-Area_bgtop_01',-500,0.25);
});