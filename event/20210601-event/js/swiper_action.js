'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(function () {
	var _ref;

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
	// var container_g = new Swiper('.swiper-container_g', (_ref = {
	// 	slidesPerView: "auto",
	// 	loop: true
	// }, _defineProperty(_ref, 'slidesPerView', 'auto'), _defineProperty(_ref, 'loopedSlides', 15), _defineProperty(_ref, 'centeredSlides', true), _defineProperty(_ref, 'observer', true), _defineProperty(_ref, 'observeParents', true), _defineProperty(_ref, 'spaceBetween', 10), _defineProperty(_ref, 'paginationClickable', true), _defineProperty(_ref, 'nextButton', '.swiper-button-next'), _defineProperty(_ref, 'prevButton', '.swiper-button-prev'), _defineProperty(_ref, 'breakpoints', {
	// 	768: {
	// 		slidesPerView: "auto",
	// 		spaceBetween: 10
	// 	}
	// }), _ref));
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
});