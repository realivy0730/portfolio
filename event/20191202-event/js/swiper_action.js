'use strict';

$(function () {
	var container_d = new Swiper('.swiper-container_d', {

		slidesPerView: 2,
		spaceBetween: 10,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev'
		// breakpoints: {
		// 	768: {
		// 		slidesPerView: 1,
		// 		spaceBetween: 10,

		// 		loopedSlides: 1,
		// 	}
		// }
	});

	var swiper_g = new Swiper('.swiper-container_g', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		paginationClickable: true,
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		autoplay: 3000,
		autoplayDisableOnInteraction: false //觸擊後還是會再自動輪播
	});

	// var swiper_g = new Swiper('.swiper-container_f', {
	// 	nextButton: '.swiper-button-next',
	// 	prevButton: '.swiper-button-prev',
	// 	paginationClickable: true,
	// 	slidesPerView: 4,
	// 	spaceBetween: 0,
	// 	loop: true,
	// 	autoplay: 3000,
	// 	autoplayDisableOnInteraction: false //觸擊後還是會再自動輪播
	// });
	var swiper_g = new Swiper('.swiper-container_h', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		paginationClickable: true,
		slidesPerView: 4,
		spaceBetween: 0,
		loop: true,
		autoplay: 3000,
		autoplayDisableOnInteraction: false, //觸擊後還是會再自動輪播
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 10

				// loopedSlides: 1,
			}
		}
	});
});