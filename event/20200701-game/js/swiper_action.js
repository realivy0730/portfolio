'use strict';

$(function () {
	var swiper_f = new Swiper('.swiper-container_f', {
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
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev'
	});
});