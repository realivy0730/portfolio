$(document).ready(function () {
  swiperIndexportfolio();

  // 根據設備螢幕寬度設定不同的延遲時間
  // 假設以 768px 作為手機和桌面的分界點
  var delayTime = window.innerWidth <= 768 ? 8000 : 19000;
  // addClassAfterDelay('.person.work', 'stop', delayTime);
});

/**
 * 作品輪播
 */
function swiperIndexportfolio() {
  let swiperProjects = new Swiper(".section_projects .swiper", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
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
