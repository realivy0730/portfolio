$(document).ready(function () {
	toggleHeaderFixedBar();
	toggleNavigationMenu();
	smoothScrollToSection();
    initSwipers();
});

function toggleHeaderFixedBar() {
    $(window).scroll(function () {
        var top_position = $(this).scrollTop();
        if (top_position > 200) {
            if ($(window).width() > 820) {
                // 讓 Header 隨著滾動固定在頂部。
                $(".Header").addClass('fixedBar');
            }
        } else {
            // 重設 Header 的位置到預設狀態。
            $(".Header").removeClass('fixedBar');
        }
    });
}

function toggleNavigationMenu() {
    $('.hamburgerBox').click(function () {
        $(this).parents('.DropToggle').toggleClass('DropToggleOpen');
        $(".Nav").toggleClass('Activity');
    });

    $('.Nav ul li a').click(function () {
        $(this).parents('.Nav').toggleClass('Activity');
        $('.DropToggle').toggleClass('DropToggleOpen');
    });
}



function smoothScrollToSection() {
    $('.TabStraight a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            scrollTop: $target.offset().top - 100
        }, 900, 'swing');
    });
}



// function initSwipers() {

//     var swiperService = new Swiper(".tool-slider", {
//         slidesPerView: 4,
//         spaceBetween: 64,
//         freeMode: true,
//         centeredSlides: true,
//         mousewheel: {
//             releaseOnEdges: true,
//         },
//         breakpoints: {
//             // 當視窗寬度小於 1200px
//             1920: {
//                 slidesPerView: 5,
//             },
//             1100: {
//                 slidesPerView: 4,
//             },
//             800: {
//                 slidesPerView: 2,
//             },
//             300: {
//                 slidesPerView: 1.5,
//             }
//         }
//         // scrollbar: {
//         //     el: ".swiper-scrollbar",
//         //     hide: false,
//         // },
//     });

//  }



 function initSwipers() {
    let swiper = new Swiper(".tool-slider", {
        speed: 900,
        loop: true,
        slidesPerView: 5,
        spaceBetween: 50,
    
        // simulateTouch: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        },
    
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    
        breakpoints: {
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1100: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 5,
          },
          1920: {
            slidesPerView: 7,
          },
          
        },
    });
  }