/**
 * 註冊 GSAP 相關套件
 */
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

$(document).ready(function () {
    AddClassToHeader();
    // headerAddClass();
});



/**
 * header 效果到第二卡加背景
 */


function AddClassToHeader() {
  // let startValue;

  // if (window.innerWidth < 600) {
  //   startValue = "500px 50px";
  // }else if (window.innerWidth < 1400) {
  //   startValue = "15% 50px";
  // } else {
  //   startValue = "12% 50px";  // 或者其他你希望的默認值
  // }

  gsap.to(".container", {
    scrollTrigger: {
      trigger: ".container",
      start: "200px 50px",
      end: "bottom 50px",
      //toggleClass: { targets: ".fixed_bar", className: "active" },
      // markers: true,
      onEnter: () => {
        $(".fixed_bar").addClass("active");
      },
      onLeave: () => {
        $(".fixed_bar").removeClass("active");
      },
      onEnterBack: () => {
        $(".fixed_bar").addClass("active");
      },
      onLeaveBack: () => {
        $(".fixed_bar").removeClass("active");
      },
    },
  });
}


/**
 * header 效果到第二卡
 */
// function headerAddClass() {
//   gsap.to(".header", {
//     scrollTrigger: {
//       trigger: ".section_same",
//       start: "top bottom",
//       end: "150% bottom",
//       toggleClass: { targets: ".header", className: "active" },
//       // markers: true,
//     },
//   });
// }
