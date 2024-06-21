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
	var container_g = new Swiper('.swiper-container_g', {
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
		initialSlide: 0,
		observer: true, //修改swiper自己或子元素時，自動初始化swiper
		observeParents: true, //修改swiper的父元素時，自動初始化swiper
		slidesPerView: 5,
		spaceBetween: 20,
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		breakpoints: {
			768: {
				slidesPerView: 3,
				spaceBetween: 10
			}
		}
	});
});