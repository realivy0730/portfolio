gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

$(document).ready(function() {
  // 初始化滑動功能
  initSwipers();
  // 設置並維護滑塊文本高度
  setSlideTextHeight();

  // 當視窗大小改變時，更新滑塊文本高度
  $(window).resize(setSlideTextHeight);
  // addClassAfterDelay('.person', 'stop', 14000);
});

/**
* 初始化所有 Swiper 滑動功能
*/
function initSwipers() {
  // 服務滑塊設定
  var swiperService = new Swiper(".service-slider", {
      slidesPerView: "auto",
      spaceBetween: 64,
      freeMode: true,
      mousewheel: {
          releaseOnEdges: true,
      },
      scrollbar: {
          el: ".swiper-scrollbar",
          hide: false,
      },
  });

  // 移動端滑塊設定
  var swiperMobile = new Swiper(".mobile-slider", {
      slidesPerView: "auto",
      spaceBetween: 8,
      freeMode: true,
      mousewheel: {
          releaseOnEdges: true,
      },
      scrollbar: {
          el: ".swiper-scrollbar",
          hide: false,
      },
  });
}

/**
* 設置滑塊文本高度為當前高度，並在窗口大小變化時維持此設定
*/
function setSlideTextHeight() {
  var hh = $('.mobile-slider .slide-txt').height();  // 獲取當前高度
  $(".mobile-slider .slide-txt").css("height", hh);  // 設置高度
}

/**
 * 在指定的延遲後為選定的元素添加指定的類
 */
function addClassAfterDelay(selector, className, delay) {
  setTimeout(function() {
      var $elements = $(selector);
      if ($elements.length) {
          $elements.addClass(className);
          // 若需要，可以在這裡取消註解來查看日誌輸出
          // console.log(`Class '${className}' added to the element(s) with selector '${selector}' after ${delay / 1000} seconds.`);
      }
  }, delay);
}
