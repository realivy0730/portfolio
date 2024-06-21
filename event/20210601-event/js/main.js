"use strict";

$(function () {
	var $menu = $("#FootOpenNav");
	var $menu2 = $("#FootOpenNav2");
	var $menu3 = $("#FootOpenNav3");
	$(".MobileNavBar ul li.MobileNav01 a").click(function () {
		$('.MobileNavBar ul li').removeClass('Active');
		if ($menu.css("display") == "none") {
			$menu.show();
			$menu2.hide();
			$menu3.hide();
			$(this).parent().addClass('Active');
		} else {
			$menu.hide();
			$menu2.hide();
			$menu3.hide();
			$(this).parent().removeClass('Active');
		}
	});
	$(".MobileNavBar ul li.MobileNav02 a").click(function () {
		$('.MobileNavBar ul li').removeClass('Active');
		if ($menu2.css("display") == "none") {
			$menu2.show();
			$menu.hide();
			$menu3.hide();
			$(this).parent().addClass('Active');
		} else {
			$menu2.hide();
			$menu.hide();
			$menu3.hide();
			$(this).parent().removeClass('Active');
		}
	});
	$(".MobileNavBar ul li.MobileNav03 a").click(function () {
		$('.MobileNavBar ul li').removeClass('Active');
		if ($menu.css("display") == "none") {
			$menu.hide();
			$menu2.hide();
			$menu3.show();
			$(this).parent().addClass('Active');
		} else {
			$menu.hide();
			$menu2.hide();
			$menu3.hide();
			$(this).parent().removeClass('Active');
		}
	});
	$("#FootOpenNav a").click(function () {
		$('.MobileNavBar ul li').removeClass('Active');
		if ($menu.css("display") == "none") {
			$menu.hide();
			$menu2.hide();
			$menu3.hide();
			$(this).parent().removeClass('Active');
		} else {
			$menu.hide();
			$menu2.hide();
			$menu3.hide();
			$(this).parent().removeClass('Active');
		}
	});
	$("#FootOpenNav2 a").click(function () {
		$('.MobileNavBar ul li').removeClass('Active');
		if ($menu.css("display") == "none") {
			$menu.hide();
			$menu2.hide();
			$menu3.hide();
		} else {
			$menu.hide();
			$menu2.hide();
			$menu3.hide();
		}
	});
	$("#FootOpenNav3 a").click(function () {
		$('.MobileNavBar ul li').removeClass('Active');
		if ($menu.css("display") == "none") {
			$menu.hide();
			$menu2.hide();
			$menu3.hide();
		} else {
			$menu.hide();
			$menu2.hide();
			$menu3.hide();
		}
	});
	// $(".MobileNavBar ul li a").click(function () {
	// 	$(this).parent().toggleClass('Active');
	// 	$('.MobileNavBar ul li').removeClass('Active');

	// });
});