gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

$(document).ready(function () {
  projectGalleryMain();
  changeScrollPosition();
  getAsideWrapWidth();
});

/**
 * projectGalleryMain輪播
 */
function projectGalleryMain() {
  var GalleryThumbs = new Swiper(".gallery_thumbs", {
    spaceBetween: 8,
    // centeredSlides: true,
    slidesPerView: 4,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 4,
  });

  var GalleryMain = new Swiper(".gallery_main", {
    loop: true,
    loopedSlides: 4,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      stopOnLastSlide: false,
    },
    navigation: {
      nextEl: ".slider_button-next",
      prevEl: ".slider_button-prev",
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });

  GalleryMain.controller.control = GalleryThumbs;
  GalleryThumbs.controller.control = GalleryMain;
}


/**
 * scroll  至 section_projects 變換 css
 */

function changeScrollPosition() {
  ScrollTrigger.matchMedia({
    "(min-width: 1200px)": function () {
      let animation = gsap.to(".cta", {
        scrollTrigger: {
          trigger: ".cta",
          start: "10% bottom",
          endTrigger: ".footer",
          end: "bottom 0",
          // toggleClass: { targets: ".position", className: "active" }, 滑動的效果先拿掉 到時候資料搜集齊全後 再加上去 記得打開css position
          // markers: true,
        },
      });

      // 返回一個函數，用於清理動畫
      return function () {
        animation.kill(); // 停止特定的動畫
        // 如果有需要清理的ScrollTrigger實例，也可以在這裡調用.kill()方法
      };
    },


  });
}


/**
 * 取得 aside_wrap 寫在  position
 */
function getAsideWrapWidth(){
  var asideWrapHeight = $('.aside_wrap').width();
  $('.position').css('width' , asideWrapHeight);

}