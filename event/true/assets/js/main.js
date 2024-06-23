// wow;
// new WOW().init();

/**
 * 註冊 GSAP 相關套件
 */
gsap.registerPlugin(ScrollTrigger);


$(document).ready(includeHTML(function () {
  SetNavToggleClick();
  setCloseButtonClick();
  // pageFadeIn();
  // AnimationButtonToTop();
  // AnimationLeftToRight();
  // AnimationRightToLeft();
  // clickGotoTop();
  // toggleLinkToTop();

}));


/**
 * includeHTML
 * @param callback
 * @returns
 */
function includeHTML(callback) {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          elmnt.removeAttribute("w3-include-html");
          includeHTML(callback);
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
  if (callback) callback();
}


/**
 * 由於 Safari 有個 Bug 或是它故意設定 ，只要行動裝置正常的往下滑動視窗，就會觸發 Resize Event
 * 因此這邊判斷 當上個視窗沒有異動視窗寬度時，那麼就不會去去執行想要定義的行為
 */
let windowWidth = $(window).width();
let stageW;
$(window).on("resize", function () {

  // 當上個視窗與目前的視窗寬度不同就強制重新整理畫面
  if ($(window).width() != windowWidth) {
    // Update the window width for next time
    windowWidth = $(window).width();
    stageW = windowWidth;
    location.reload();
  }
});


/**
 * 處理導航觸發按鈕的點擊事件
 */
function SetNavToggleClick() {
  $(".hamburgerbox").click(function (e) {
    // 阻止事件冒泡，以避免立即觸發下面的 document 點擊事件
    e.stopPropagation();

    $(".nav_item").removeClass('active');
    var $fixedBar = $(this).parents(".fixed_bar");
    $fixedBar.toggleClass("nav_open");
    
    toggleBodyScroll();


    
  });
}

function toggleBodyScroll() {
  var $fixedBar = $(".fixed_bar");
  if ($fixedBar.hasClass("nav_open")) {
    $("body").css("overflow", "hidden");
  } else {
    $("body").css("overflow", "");
  }
}

/**
 * 點了close 關閉nav
 */
function setCloseButtonClick() {
  $(".nav_open .hamburgerbox").click(function () {
    $(this).parents(".fixed_bar").removeClass("nav_open");
    toggleBodyScroll();
  });
}


// /**
//  * menu動態效果
//  */
// function menuAnimation() {
//   var tl = gsap.timeline();

//   tl.set(".logo_animation .logo0", { rotation: 0 })
//     .to({}, { duration: 0.5 }) // 添加 0.2 秒的延迟

//   tl.fromTo(".logo_animation .logo0", 
//     { rotation: 0 },
//     { rotation: -90, autoAlpha: 1, duration: 1, ease: "Quart.easeOut" }
//   )
//   .fromTo(".logo_animation .logo0", 
//   { autoAlpha: 1 },
//   { autoAlpha: 0 , duration: .5, ease: "Quart.easeOut" }, "-=0.4"
//   )
//   .fromTo(".logo_animation .logo1", 
//     { autoAlpha: 1 },
//     { autoAlpha: 1 , duration: .5, ease: "Quart.easeOut" }, "-=0.5"
//   )
//   .fromTo(".logo_animation .logo2", 
//     { autoAlpha: 0 ,width: "30px" },
//     { autoAlpha: 1 ,width: "100%", duration: .8, ease: "Quart.easeOut" }, "-=0.5"
//   )

  
//   .fromTo(".logo_animation .logo2", 
//     { top: "17px" },
//     { top: "calc(100vh - 5vw - 60px)", duration: 1.5 , ease: "Quart.easeOut" }, "-=0.6"
//   )

//   .fromTo(".nav_primary_wrap .nav_primary .nav_item", 
//     { autoAlpha: 0 },
//     { autoAlpha: 1, duration: 1.5, ease: "Quart.easeOut", stagger: 0.2 }, "1.5"
//   )
//   .fromTo(".logo_animation .animation_logo", 
//     { autoAlpha: 0 },
//     { autoAlpha: 1, duration: .5, ease: "Quart.easeOut"}, "-=1.1"
//   )
//   // .fromTo(".logo_animation .animation_logo", 
//   //   { autoAlpha: 1, },
//   //   { autoAlpha: 0, duration: 1, ease: "Quart.easeOut" } ,"-=2.5"
//   // )
//   .fromTo(".logo_animation .logo1", 
//     { autoAlpha: 0, },
//     { autoAlpha: 0, duration: .5, ease: "Quart.easeOut" } ,"-=2.1"
//   )
//   .fromTo(".btn_close", 
//     { autoAlpha: 0, },
//     { autoAlpha: 1, duration: 1, ease: "Quart.easeOut" } ,"-=2"
//   )
  
//   ;
// }

/**
 * chart
 */
function charAtAnimation() {
  gsap.utils.toArray(['.nav .nav_item .nav_item-name','.nav .nav_item .nav_item-line','.nav .nav_item .nav_item-eng']).forEach((section) => {
  // let target1 = gsap.utils.toArray(['.nav .nav_item .nav_item-name','.nav .nav_item .nav_item-line','.nav .nav_item .nav_item-eng']).forEach( ( section ) => {
      const splitText = new SplitText( section, { type: 'chars' } );
      const chars = splitText.chars;

      gsap.fromTo(
          chars,
          { 
            x: -10,
            y: -1,
            opacity: 0,
            
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 2,
            delay: .5,
            ease: 'power4.out',
            
          }
        )
  });

  // navLineAnimation();

}

/**
 * 背景
 */
function addActiveToBackgroundBlack() {
  gsap.utils.toArray(".section_background").forEach((section) => {
    gsap.to(section, {
    scrollTrigger: {
      trigger: ".section_background",
      start: "top 80%",
      end: "bottom 20%",
      toggleClass: { targets: ".section_background", className: "active" },
      // markers: true,
    },
  });
});
}

// function charAtSubNavAnimation() {
//   gsap.utils.toArray(['.nav_subnav_wrap .nav_subnav li']).forEach((section) => {
//       const splitText = new SplitText( section, { type: 'chars' } );
//       const chars = splitText.chars;

//       gsap.fromTo(
//           chars,
//           { 
//             x: -30,
//             y: -5,
//             opacity: 0
//           },
//           {
//             x: 0,
//             y: 0,
//             opacity: 1,
//             stagger: 0.05,
//             duration: 2,
//             ease: 'power4.out',
//           }
//         )
//   });



//}





/**
 * 宣告一個名為init_facebook_chat的函數
 */
function init_facebook_chat() {

  var chatbox = document.getElementById('fb-customer-chat'); // 找到ID為fb-customer-chat的HTML元素，並把它指派給chatbox變數
  chatbox.setAttribute("page_id", "610569965620518"); // 設置chatbox的page_id屬性為610569965620518，這是Facebook頁面的ID
  chatbox.setAttribute("attribution", "biz_inbox"); // 設置chatbox的attribution屬性為biz_inbox，這是用來區分聊天來源的標記

  window.fbAsyncInit = function () { // 當Facebook SDK被載入後，執行下列函數
    FB.init({ // 初始化Facebook SDK
      xfbml: true, // 這個設置會使Facebook SDK解析頁面上的XFBML標籤
      version: 'v16.0' // 設置使用Facebook SDK的版本
    });
  };

  (function (d, s, id) { // 創建一個匿名函數，它將在下列內容被載入後被立即執行
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return; // 如果已經載入了id為facebook-jssdk的元素，則結束函數
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/zh_TW/sdk/xfbml.customerchat.js'; // 設置要載入的Facebook SDK的網址
    fjs.parentNode.insertBefore(js, fjs); // 在第一個指定的元素之前插入新的元素
  }(document, 'script', 'facebook-jssdk')); // 呼叫匿名函數，並傳入三個參數，分別是document物件、字串'script'和字串'facebook-jssdk'

}


/**
 * 整頁 FadeIn
 */
function pageFadeIn() {
  const tl = gsap.timeline();
  tl.from('body', { opacity: 0, ease: 'linear', duration: 1 });
  return tl;
}

function AnimationButtonToTop() {
  gsap.set(".animationbottomtotop", { opacity: 0, y: 40,ease: 'ease-in', duration: 1  });
  ScrollTrigger.batch(".animationbottomtotop", {
    onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.2}),
    // onLeave: batch => gsap.to(batch, {opacity: 0, y: 0}),
    // onEnterBack: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
    // onLeaveBack: batch => gsap.to(batch, {opacity: 0, y: 40, stagger: 0.2}),
    //  toggleActions: 'play none none play',
    scrub: true, // 啟用滾動平滑效果
    // start: '-20px 75%',
    // end: '60% 30%',
    // markers: true,
  });
}

/**
 * 首頁 - 從左往右彈出的效果
 */
function AnimationLeftToRight() {

  gsap.set(".animationlefttoright", { opacity: 0, x: -40,ease: 'ease-in', duration: 1 });
  ScrollTrigger.batch(".animationlefttoright", {
    onEnter: batch => gsap.to(batch, {opacity: 1, x: 0, stagger: 0.15}),
    // onLeave: batch => gsap.to(batch, {opacity: 0, y: 0}),
    // onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15}),
    // onLeaveBack: batch => gsap.to(batch, {opacity: 0, x: -40 , stagger: 0.5}),

    // start: "top 80%",
    // end: "bottom 20%",
    // pin: true, // 當動畫執行中的時候，讓觸發選擇器置頂
    scrub: 0.4, // 是否根據捲動程度決定動畫完成程度，
    // toggleActions: 'play none none play',
    // markers: true,


  
});
}


function AnimationRightToLeft() {

  gsap.set(".animationrighttoleft", { opacity: 0, x: 40,ease: 'ease-in', duration: 1 });
  ScrollTrigger.batch(".animationrighttoleft", {
    onEnter: batch => gsap.to(batch, {opacity: 1, x: 0, stagger: 0.15}),
    // onLeave: batch => gsap.to(batch, {opacity: 0, y: 0}),
    // onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15}),
    // onLeaveBack: batch => gsap.to(batch, {opacity: 0, x: 40, stagger: 0.5}),

    // start: "top 80%",
    // end: "bottom 20%",
    // pin: true, // 當動畫執行中的時候，讓觸發選擇器置頂
    scrub: 0.4, // 是否根據捲動程度決定動畫完成程度，
    // toggleActions: 'play none none play',
    // markers: true,


  
});
}

function clickGotoTop() {
  $('.linktotop a').click(function() {
    $('html, body').animate({scrollTop : 0}, 800);
  });
}


// 定義滾動
function toggleLinkToTop() {
  $(window).scroll(function() {
    // 檢查滾動位置
    if ($(this).scrollTop() > 500) {
        $('.linktotop').fadeIn();
    } else {
        $('.linktotop').fadeOut();
    }
});
}