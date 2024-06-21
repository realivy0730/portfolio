$(function() {
	var swiper_e = new Swiper('.swiper-container_e', {

		slidesPerView: 1,
		spaceBetween: 10,
		slidesPerGroup: 1,
		loopedSlides: 1,
		loop: true,
		autoplay: 3000,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		// breakpoints: {
		// 	768: {
		// 		slidesPerView: 1,
		// 		spaceBetween: 10,

		// 		loopedSlides: 1,
		// 	}
		// }
	});

})