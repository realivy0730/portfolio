'use strict';

(function (window, document, $, undefined) {
	"use strict";

	var tsg = $('.tsg');
	var ball = $('.tsg-ball');
	var character = $('.tsg-character');
	var prevent = $('.prevent');
	var defaultBallSize = ball.width(); // default ball size
	var currentBallSize; // current ball size
	var minBallSize = defaultBallSize - 30; // snow ball min size

	var lx = 0,
	    ly = 0,
	    cx = 0,
	    cy = 0; // last x y, current x y

	var diffX, diffY, down; // throw diff x y, is down
	var maxHeight = 200; // 雪球最後的落點高度，改聖誕老人位置時，也要改這個
	var maxDiffY = -20; // throw max y diff
	var dragging = false; // is dragging
	var gravity = .73;

	function init() {
		tsg.on('mousedown', tsg, dragBall).on('mousemove', tsg, moveBall).on('mouseup', tsg, dropBall);
		tsg[0].addEventListener('touchstart', dragBall);
		tsg[0].addEventListener('touchmove', moveBall);
		tsg[0].addEventListener('touchend', dropBall);
	}

	function dragBall(e) {
		var px = e.pageX ? e.pageX : e.touches[0].pageX;
		var py = e.pageY ? e.pageY : e.touches[0].pageY;
		dragging = $(e.target).is(ball) ? true : false;

		//[lx, ly, cx, cy, down] = [px, py, px, py, false]; //es6 error on ios9
		lx = px;
		ly = py;
		cx = px;
		cy = py;
		down = false;
		ball.addClass('hold'); // 移除漂浮動態
		e.preventDefault();
	}

	function moveBall(e) {
		var _ref = [tsg.offset().left, tsg.offset().top],
		    tx = _ref[0],
		    ty = _ref[1];

		var px = e.pageX ? e.pageX : e.touches[0].pageX;
		var py = e.pageY ? e.pageY : e.touches[0].pageY;
		// set ball pos while dragging
		if (dragging) {
			ball.css({
				left: px - tx - defaultBallSize / 2 + 'px',
				top: py - ty - defaultBallSize / 2 + 'px'
			});

			//[lx, ly, cx, cy] = [cx, cy, px, py]; //es6 error on ios9
			lx = cx;
			ly = cy;
			cx = px;
			cy = py;
		}
		e.preventDefault();
	}

	function dropBall(e) {
		//
		if (dragging) {
			dragging = false;
			// reset ball pos
			if (ly - cy < 8) {
				resetBall(true);
				return;
			}

			// calc values for throw ball animation
			//if (e.pageX) [cx, cy] = [e.pageX, e.pageY]; //es6 error on ios9
			if (e.pageX) {
				cx = e.pageX;
				cy = e.pageY;
			}
			diffX = (cx - lx) / 2.5;
			diffY = cy - ly < maxDiffY ? maxDiffY : cy - ly;
			draw();
		}
		e.preventDefault();
	}

	function draw() {
		ball.css({
			left: '+=' + diffX,
			top: '+=' + diffY,
			width: currentBallSize + 'px',
			height: currentBallSize + 'px'
		});
		currentBallSize = currentBallSize > minBallSize ? currentBallSize - 1 : minBallSize;
		// up
		if (!down) {
			diffY *= gravity;

			if (diffY > -1) {
				down = true;
				diffY = Math.abs(diffY);
			}
		}
		// down
		else diffY /= gravity;

		// request next frame while not reaching maxHeight pos
		if (!down || ball.position().top < maxHeight) requestAnimationFrame(draw);
		// reached
		else {
				ball.css({ top: maxHeight + 'px' });
				checkResult();
			}
	}

	//function resetBall(ani = false) { //es6 error on ios9
	function resetBall(ani) {
		ball.removeClass('broke').removeClass('hold').animate({
			left: tsg.width() / 2 - defaultBallSize / 2 + 'px',
			top: tsg.height() - defaultBallSize - 150 + 'px',
			width: defaultBallSize + 'px',
			height: defaultBallSize + 'px'
		}, ani ? 500 : 0);
	}

	function checkResult() {
		// check win or not
		if (hitTest(character[0], ball[0], prevent[0])) {
			ball.fadeOut('fast');
			character.addClass('hit');
			setTimeout(getPrize, 1000);
			setTimeout(getConfetti, 50);
		} else {
			ball.addClass('broke');
			setTimeout(resetBall, 1000);
		}
	}

	function hitTest(ele1, ele2, ele3) {
		var character = ele1.getBoundingClientRect();
		var ball = ele2.getBoundingClientRect();
		var prevent = ele3.getBoundingClientRect();

		return character.top < ball.top && character.left < ball.left && character.right > ball.right && (prevent.left > ball.left || prevent.right < ball.right);
	}

	function getPrize() {
		$('#GameLightbox').css('display', 'block');
	}
	function getConfetti() {
		$('#confetti').addClass('gameshow');
	}

	init();
})(window, document, jQuery);