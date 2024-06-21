$(function() {
	'use strict';

	var HOSTNAME = 'https://shopping-api.friday.tw';
	var thousandComma = function(number) {
		var num = number.toString();
		var pattern = /(-?\d+)(\d{3})/;

		while (pattern.test(num)) {
			num = num.replace(pattern, '$1,$2');
		}
		return num;
	};

	// fill html by res
	var fillHtmlByRes = function(data) {

		$.each(data, function(index, value) {

			var saleNo = (typeof value.saleNo !== 'undefined');
			var image = (typeof value.image !== 'undefined');
			var saleName = (typeof value.saleName !== 'undefined');
			var proposePrice = (typeof value.proposePrice !== 'undefined');
			var salePrice = (typeof value.salePrice !== 'undefined');

			if(saleNo && image && saleName && proposePrice && salePrice) {

				var $targetDom = $('.product-item[data-sale-no=' + value.saleNo + ']');

				$targetDom.find('.product-img img').attr('src', value.image).addClass('show');

				// fill soldout jpg
				$targetDom.parents('.row-products').find('.product-img img').not('.show').attr('src', 'images/soldout.jpg');

				$targetDom.find('.topic-main').text(value.saleName);
				$targetDom.find('.price-cost').text(thousandComma(value.proposePrice));
				$targetDom.find('.currency').text('$');
				$targetDom.find('.price').text(thousandComma(value.salePrice));
				// $targetDom.parent('.product-link').attr('href', value.link);

				// add discount automatically
				var hasPercent = $targetDom.find('div').hasClass('hot-box-text');

				if(hasPercent) {

					var percentValue = 1 - (value.salePrice / value.proposePrice);
					percentValue = Math.round(percentValue * 100);

					$targetDom.find('.hot-box-text').html('降' + percentValue + '%');
				}
			}

		});
	};

	// if element is in viewport (visible on screen)
	$.fn.isOnScreen = function(){

		var win = $(window);

		var viewport = {
			top : win.scrollTop(),
			left : win.scrollLeft()
		};
		viewport.right = viewport.left + win.width();
		viewport.bottom = viewport.top + win.height();

		var bounds = this.offset();
		bounds.right = bounds.left + this.outerWidth();
		bounds.bottom = bounds.top + this.outerHeight();

		return (!(viewport.right < bounds.left ||
			viewport.left > bounds.right ||
			(viewport.bottom + 200) < bounds.top ||
			(viewport.top - 200) > bounds.bottom));
	};

	var sectionAjaxEvent = function() {

		var $rowProducts = $('.row-products');

		$.each($rowProducts, function(index, value) {

			var isRowOnView = $(value).isOnScreen();
			var ajaxSt = $(value).data('request-st');

			if(isRowOnView && (ajaxSt === 0)) {

				// 3. saleNo params to string
				var dataSaleNo = function() {

					var saleNoAry = [];
					var saleNoStr = '';
					var $productItems = $(value).find('.product-item');

					$.each($productItems, function(index, value) {

						var hasData = $(value).data('sale-no');

						if (hasData) {
							saleNoAry[index] = hasData;
						}
					});

					saleNoStr = saleNoAry.toString();

					return saleNoStr;
				};

				// 2. ajax request function
				var request = $.ajax({
					url: HOSTNAME + '/api/lifestyle/v1/sale/',
					method: 'GET',
					data: {
						saleNo: dataSaleNo()
					},
					dataType: 'JSON'
				});

				// 1. ajax row products's items info
				var ajaxRowOnView = function() {

					request.done(function(res) {

						fillHtmlByRes(res);
					});

					request.fail(function() {

					});
				};

				// ajax row products on view
				ajaxRowOnView();

				ajaxSt = $(value).data('request-st', 1);
			}
		});
	};



	// init section ajax
	sectionAjaxEvent();

	// scroll to element and trigger ajax
	$(window).scroll(function() {
		sectionAjaxEvent();
	});


	var sliderGo = null;
	var tabs = $('.normal');
	var activeIndex = 1,
	maxElementNum = 4;
	var carousel = function() {

		// $('.active').removeClass('active');
		$('.tab' + activeIndex).trigger('click');

		activeIndex += 1;
		if (activeIndex === maxElementNum + 1) {
			activeIndex = 1;
		}

	};

	$('.content1').show();

	$('.tab1').on('click', function() {
		$('.ifocus-piclist-block').hide();
		$('.content1').show();
		tabs.removeClass('active');
		$('.tab1').addClass('active');
	});
	$('.tab2').on('click', function() {
		$('.ifocus-piclist-block').hide();
		$('.content2').show();
		tabs.removeClass('active');
		$('.tab2').addClass('active');
	});
	$('.tab3').on('click', function() {
		$('.ifocus-piclist-block').hide();
		$('.content3').show();
		tabs.removeClass('active');
		$('.tab3').addClass('active');
	});
	$('.tab4').on('click', function() {
		$('.ifocus-piclist-block').hide();
		$('.content4').show();
		tabs.removeClass('active');
		$('.tab4').addClass('active');
	});


	var sliderShow = function() {
		sliderGo = setInterval(carousel, 4000);
	};


	sliderShow();

	// stop slide
	$('.ifocus').on('mouseenter', function() {
		clearInterval(sliderGo);
	});

	// restart slide
	$('.ifocus').on('mouseleave', function() {
		sliderGo = setInterval(carousel, 4000);
	});

	tabs.on('mouseenter', function() {

		if (!$(this).hasClass('active')) {
			$(this).addClass('active');
		}
	});

	tabs.on('mouseleave', function() {

		var focusIndex = $('.ifocus-piclist-block:visible').data('index');

		if (focusIndex !== $(this).data('tab')) {
			$(this).removeClass('active');
		}
	});

});