'use strict';

$(function () {

	var container_f = new Swiper('.swiper-container_f', {
		slidesPerView: 1,
		effect: 'fade',
		fade: {
			crossFade: true
		},
		spaceBetween: 0,
		loop: true,
		autoplay: 3000,
		autoplayDisableOnInteraction: false, //觸擊後還是會再自動輪播
		pagination: '.swiper-pagination',
		paginationClickable: true
	});
	var container_h = new Swiper('.swiper-container_h', {
		slidesPerView: 1,
		effect: 'fade',
		fade: {
			crossFade: true
		},
		spaceBetween: 0,
		loop: true,
		autoplay: 3000,
		autoplayDisableOnInteraction: false, //觸擊後還是會再自動輪播
		pagination: '.swiper-pagination',
		paginationClickable: true

	});
	var container_I = new Swiper('.swiper-container_I', {
		slidesPerView: 1,
		effect: 'fade',
		fade: {
			crossFade: true
		},
		spaceBetween: 0,
		loop: true,
		autoplay: 3000,
		autoplayDisableOnInteraction: false, //觸擊後還是會再自動輪播
		pagination: '.swiper-pagination',
		paginationClickable: true

	});
	var container_J = new Swiper('.swiper-container_J', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		slidesPerView: 1,
		effect: 'fade',
		fade: {
			crossFade: true
		},
		spaceBetween: 0,
		loop: true,
		autoplay: 3000,
		autoplayDisableOnInteraction: false //觸擊後還是會再自動輪播
	});
});