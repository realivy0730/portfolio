document.addEventListener('DOMContentLoaded', function() {

    var rendererSettings = {
        preserveAspectRatio: window.innerWidth <= 550 ? 'xMidYMid meet' : 'xMidYMid slice'
    };
  
    
    // console.log("Renderer Settings: ", rendererSettings);

    //loading的動態
    var loadingAnim = lottie.loadAnimation({
        container: document.getElementById('loading-lottie'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/jason/loading.json',
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    });
    // console.log("Loading Animation Aspect Ratio: xMidYMid slice");
  
    var path;
    if (window.innerWidth <= 800) {
        path = 'assets/jason/true_mobile.json';
    } else {
        path = 'assets/jason/true.json';
    }
    var mainAnim = lottie.loadAnimation({
        container: document.getElementById('lottie-main'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: path,
        rendererSettings: rendererSettings
    });
  
    // console.log("Main Animation Aspect Ratio: xMidYMid slice");

    //左方scroll
    var fixedLottieAnim = lottie.loadAnimation({
        container: document.getElementById('lottie-icon'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/jason/scroll.json' 
    });
  
    mainAnim.addEventListener('DOMLoaded', function() {
        document.getElementById('loading-animation').style.display = 'none';
        // 使用 ScrollTrigger 創建動畫時間線
        gsap.timeline({
            scrollTrigger: {
                trigger: "#lottie-container",
                start: "top top",
                end: () => {
                    let endValue = document.querySelector("#lottie-container").offsetHeight * 50;
                    // console.log("ScrollTrigger total value: ", endValue);
                    return "+=" + endValue;
                },
                
                scrub: true,
                pin: true,
                onUpdate: self => {
                    const frame = Math.floor(mainAnim.totalFrames * self.progress);
                    mainAnim.goToAndStop(frame, true);
                }
            }
        });

        
    });
    ScrollTrigger.create({
        trigger: "#lottie-container",
        start: () => {
            // 檢查如果視窗寬度小於或等於 800px，認為是手機設備
            let multiplier = window.innerWidth <= 800 ? 48.9 : 48;
            let startValue = document.querySelector("#lottie-container").offsetHeight * multiplier;
            // console.log("ScrollTrigger start value: ", startValue);
            return "top+=" + startValue;
        },
        end: () => {
            let endValue = document.querySelector("#lottie-container").offsetHeight * 48;
            // console.log("ScrollTrigger end value: ", endValue);
            return "+=" + endValue;
        },
        toggleClass: { targets: "#lottie-word", className: "active" }
        
    });
    ScrollTrigger.create({
        trigger: "#lottie-container",
        start: () => "top+=" + document.querySelector("#lottie-container").offsetHeight * 2.5, 
        end: "bottom bottom", 
        onEnter: () => {
            document.querySelector("#lottie-icon").classList.add("active");
        },
        onEnterBack: () => {
            document.querySelector("#lottie-icon").classList.remove("active"); 
        }
    });
    
});

window.addEventListener('load', ScrollTrigger.refresh);
window.addEventListener('resize', ScrollTrigger.refresh);