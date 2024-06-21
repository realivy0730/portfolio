"use strict";

;

(function () {
  var jsonPath = 'https://event.shopping.friday.tw/event/20210601-event-source/products.json?v=' + new Date().getTime();
  var todayPid = null,
      todayCid = null,
      initialSlide = 0;

  var parseData = function parseData(products) {
    var output = '';

    if (Array.isArray(products) && products.length > 0) {
      var nowTime = new Date().toLocaleDateString();
      var isNoon = new Date().getTime() > new Date(nowTime + ' 12:00:00').getTime() ? true : false;
      products.forEach(function (v, i) {
        var isToday = v.start === nowTime ? true : false;
        var isTodayClass = isToday ? 'TodayPid' : '';
        var isTodayTxt = isToday ? '今日限搶' : v.start.substr(5).replace(/\/(\d+)$/i, '/<em>$1</em>'); //6/<em>2</em>

        var isPast = new Date(v.start + ' 23:59:59').getTime() < new Date().getTime() ? true : false;
        var isPastClass = isPast ? 'Pidfinish' : '';
        var buttonStyle = '<div class="Comesoon">敬請期待></div>';
        var hyperLink = v.link && isToday ? v.link : '';
        if (!v.pid && !v.cid) return;
        if (isPast) buttonStyle = "<div class=\"Cover\">\u6D3B\u52D5<br>\u7D50\u675F</div>\n            <div class=\"Comesoon\">\u656C\u8ACB\u671F\u5F85></div>\n            ";

        if (isToday) {
          todayPid = v.pid;
          todayCid = v.cid;
          initialSlide = i;

          if (isNoon) {
            buttonStyle = '<div class="BuyTodayProductsCurrentItem ButtonStyle ButtonStyle2">立即<br>搶購</div>'; //<div class="ButtonStyle ButtonStyle3">銷售<br>一空</div>
          } else {
            buttonStyle = '<div class="ButtonStyle ButtonStyle1">即將<br>開賣</div>';
          }
        }

        output += "<li class=\"swiper-slide ".concat(isTodayClass, " ").concat(isPastClass, "\">");

        if (hyperLink) {
          output += "<a href=\"".concat(hyperLink, "\" title=\"").concat(v.name, "\" target=\"_blank\">");
        }

        output += "<div class=\"Date\">".concat(isTodayTxt, "</div>\n              <div class=\"Border\">\n                <div class=\"PidImg\"><img src=\"").concat(v.image_url, "\" width=\"220\" height=\"220\" alt=\"").concat(v.name, "\"></div>\n                <div class=\"PidName\">").concat(v.name, "</div>\n                <div class=\"PidPrice\">\u9650\u6436\u50F9$<em>").concat(v.event_price, "</em></div>\n                ").concat(buttonStyle, "\n              </div>");

        if (hyperLink) {
          output += "</a>";
        }

        output += "</li>";
      });
    }

    return output;
  };

  var checkProductSoldout = function checkProductSoldout() {
    $.getJSON("https://m.shopping.friday.tw/mobileapi/api/product/".concat(todayPid, "/detail?cid=").concat(todayCid), function (res) {
      if (res.data[0].soldout) {
        var dom = $('.BuyTodayProductsCurrentItem');
        dom.removeClass('ButtonStyle2');
        dom.addClass('ButtonStyle3').html('銷售<br>一空');
      }
    });
  }; // get json


  $.getJSON(jsonPath, function (data) {
    $('#BuyTodayProducts').html(parseData(data));
    initSwiper();
    checkProductSoldout();
  }); // detect scroll and hidden block for page scroll performance.

  if (location.hash) {
    $('.Section').show();
  } else {
    var winHeight = window.innerHeight;

    if (/iPhone/i.test(navigator.userAgent) && /safari/i.test(navigator.userAgent)) {
      winHeight += 320;
    }

    var watchWindowScroll = function watchWindowScroll() {
      if (this.scrollY > winHeight) {
        $('.Section').show();
        window.removeEventListener('scroll', watchWindowScroll);
      }
    };

    window.addEventListener('scroll', watchWindowScroll);
  } // init swiper


  var initSwiper = function initSwiper() {
    new Swiper('.swiper-container_g', {
      slidesPerView: 'auto',
      loop: true,
      loopedSlides: 15,
      initialSlide: initialSlide,
      centeredSlides: true,
      observer: true,
      observeParents: true,
      spaceBetween: 10,
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      breakpoints: {
        768: {
          slidesPerView: 'auto',
          spaceBetween: 10
        }
      }
    });
  };

  var bak = function bak() {
    $('#BuyTodayProducts').html("\n    <li class=\"swiper-slide TodayPid\">\n      <a href=\"#\" title=\"\u500D\u6F54\u96C5\u8212\u9069\u67D4\u611F\u62BD\u53D6\u5F0F\u885B\u751F\u7D19150\u62BDx72\u5305/\u7BB1\">\n        <div class=\"Date\">\u4ECA\u65E5\u9650\u6436</div>\n        <div class=\"Border\">\n          <div class=\"PidImg\"><img\n              src=\"https://img.shopping.friday.tw/images/product/250/7501764/7501764_3_3.jpg?336929\"\n              width=\"220\" height=\"220\" alt=\"\u8F09\u5165\u4E2D...\"></div>\n          <div class=\"PidName\">\u500D\u6F54\u96C5\u8212\u9069\u67D4\u611F\u62BD\u53D6\u5F0F\u885B\u751F\u7D19150\u62BDx72\u5305/\u7BB1</div>\n          <div class=\"PidPrice\">\u9650\u6436\u50F9$<em>1</em></div>\n          <div class=\"ButtonStyle ButtonStyle1\">\u5373\u5C07<br>\u958B\u8CE3</div>\n          <!-- <div class=\"ButtonStyle ButtonStyle2\">\u7ACB\u5373<br>\u6436\u8CFC</div>\n            <div class=\"ButtonStyle ButtonStyle3\">\u92B7\u552E<br>\u4E00\u7A7A</div> -->\n        </div>\n      </a>\n    </li>\n    <li class=\"swiper-slide Pidfinish\">\n      <a href=\"#\" title=\"\u500D\u6F54\u96C5\u8212\u9069\u67D4\u611F\u62BD\u53D6\u5F0F\u885B\u751F\u7D19150\u62BDx72\u5305/\u7BB1\">\n        <div class=\"Date\">6/<em>2</em></div>\n        <div class=\"Border\">\n          <div class=\"PidImg\"><img\n              src=\"https://img.shopping.friday.tw/images/product/250/7501764/7501764_3_3.jpg?336929\"\n              width=\"150\" height=\"150\" alt=\"\u8F09\u5165\u4E2D...\"></div>\n          <div class=\"PidName\">\u500D\u6F54\u96C5\u8212\u9069\u67D4\u611F\u62BD\u53D6\u5F0F\u885B\u751F\u7D19150\u62BDx72\u5305/\u7BB1</div>\n          <div class=\"PidPrice\">\u9650\u6436\u50F9$<em>1</em></div>\n          <div class=\"Comesoon\">\u656C\u8ACB\u671F\u5F85></div>\n          <div class=\"Cover\">\u6D3B\u52D5<br>\u7D50\u675F</div>\n        </div>\n      </a>\n    </li>\n    <li class=\"swiper-slide\">\n      <a href=\"#\" title=\"\u500D\u6F54\u96C5\u8212\u9069\u67D4\u611F\u62BD\u53D6\u5F0F\u885B\u751F\u7D19150\u62BDx72\u5305/\u7BB1\">\n        <div class=\"Date\">6/<em>3</em></div>\n        <div class=\"Border\">\n          <div class=\"PidImg\"><img\n              src=\"https://img.shopping.friday.tw/images/product/250/7501764/7501764_3_3.jpg?336929\"\n              width=\"150\" height=\"150\" alt=\"\u8F09\u5165\u4E2D...\"></div>\n          <div class=\"PidName\">\u500D\u6F54\u96C5\u8212\u9069\u67D4\u611F\u62BD\u53D6\u5F0F\u885B\u751F\u7D19150\u62BDx72\u5305/\u7BB1</div>\n          <div class=\"PidPrice\">\u9650\u6436\u50F9$<em>1</em></div>\n          <div class=\"Comesoon\">\u656C\u8ACB\u671F\u5F85></div>\n          <div class=\"Cover\">\u6D3B\u52D5<br>\u7D50\u675F</div>\n        </div>\n      </a>\n    </li>\n    <li class=\"swiper-slide\">\n      <a href=\"#\" title=\"\u500D\u6F54\u96C5\u8212\u9069\u67D4\u611F\u62BD\u53D6\u5F0F\u885B\u751F\u7D19150\u62BDx72\u5305/\u7BB1\">\n        <div class=\"Date\">6/<em>4</em></div>\n        <div class=\"Border\">\n          <div class=\"PidImg\"><img\n              src=\"https://img.shopping.friday.tw/images/product/250/7501764/7501764_3_3.jpg?336929\"\n              width=\"150\" height=\"150\" alt=\"\u8F09\u5165\u4E2D...\"></div>\n          <div class=\"PidName\">\u500D\u6F54\u96C5\u8212\u9069\u67D4\u611F\u62BD\u53D6\u5F0F\u885B\u751F\u7D19150\u62BDx72\u5305/\u7BB1</div>\n          <div class=\"PidPrice\">\u9650\u6436\u50F9$<em>1</em></div>\n          <div class=\"Comesoon\">\u656C\u8ACB\u671F\u5F85></div>\n          <div class=\"Cover\">\u6D3B\u52D5<br>\u7D50\u675F</div>\n        </div>\n      </a>\n    </li>");
    initSwiper();
  };
})();