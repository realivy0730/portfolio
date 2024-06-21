"use strict";

$(function () {
	var $menu = $("#FootOpenNav");
	var $menu2 = $("#FootOpenNav2");
	$(".MobileNavBar ul li.MobileNav01 a").click(function () {
		$('.MobileNavBar ul li').removeClass('Active');
		if ($menu.css("display") == "none") {
			$menu.show();
			$menu2.hide();
			$(this).parent().addClass('Active');
		} else {
			$menu.hide();
			$menu2.hide();
			$(this).parent().removeClass('Active');
		}
	});
	$(".MobileNavBar ul li.MobileNav02 a").click(function () {
		$('.MobileNavBar ul li').removeClass('Active');
		if ($menu2.css("display") == "none") {
			$menu2.show();
			$menu.hide();
			$(this).parent().addClass('Active');
		} else {
			$menu2.hide();
			$menu.hide();
			$(this).parent().removeClass('Active');
		}
	});
	$(".MobileNavBar ul li.MobileNav03 a").click(function () {
		$('.MobileNavBar ul li').removeClass('Active');
		if ($menu.css("display") == "none") {
			$menu.hide();
			$menu2.hide();
			$(this).parent().removeClass('Active');
			$('.MobileNavBar ul li').removeClass('Active');
		} else {
			$menu.hide();
			$menu2.hide();
			$(this).parent().removeClass('Active');
			$('.MobileNavBar ul li').removeClass('Active');
		}
	});
	$("#FootOpenNav a").click(function () {
		$('.MobileNavBar ul li').removeClass('Active');
		if ($menu.css("display") == "none") {
			$menu.hide();
			$menu2.hide();
			$(this).parent().removeClass('Active');
		} else {
			$menu.hide();
			$menu2.hide();
			$(this).parent().removeClass('Active');
		}
	});
	$("#FootOpenNav2 a").click(function () {
		$('.MobileNavBar ul li').removeClass('Active');
		if ($menu.css("display") == "none") {
			$menu.hide();
			$menu2.hide();
		} else {
			$menu.hide();
			$menu2.hide();
		}
	});
	
  $.ajax({
    // url: 'go.html',
    url: 'https://go.shopping.friday.tw/event/202211/20221111-event/index.html',
    dataType: 'html'
  }).then(html => {
    const dom = $(html).find('.container').clone()
    const productDom = $(dom).remove('.image-map')
    $(dom).appendTo($('#productBlock'))
    $('#productBlock').find('.image-map, .sticky-menu').remove()
  })
});