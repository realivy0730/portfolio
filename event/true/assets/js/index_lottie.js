document.addEventListener('DOMContentLoaded', function() {
    var rendererSettings = {
        preserveAspectRatio: window.innerWidth <= 550 ? 'xMidYMid meet' : 'xMidYMid slice'
    };

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

    var stopFrame07, stopFrame28, stopFrame50, stopFrame61, stopFrame74, stopFrame97;

    mainAnim.addEventListener('DOMLoaded', function() {
        stopFrame07 = Math.floor(mainAnim.totalFrames * 0.07);

        if (window.innerWidth <= 800) {
            stopFrame28 = Math.floor(mainAnim.totalFrames * 0.215);
        } else {
            stopFrame28 = Math.floor(mainAnim.totalFrames * 0.215);
        }

        if (window.innerWidth <= 800) {
            stopFrame50 = Math.floor(mainAnim.totalFrames * 0.4);
        } else {
            stopFrame50 = Math.floor(mainAnim.totalFrames * 0.4);
        }


        if (window.innerWidth <= 800) {
            stopFrame61 = Math.floor(mainAnim.totalFrames * 0.51);
        } else {
            stopFrame61 = Math.floor(mainAnim.totalFrames * 0.51);
        }
        
        

        if (window.innerWidth <= 800) {
            stopFrame74 = Math.floor(mainAnim.totalFrames * 0.62);
        } else {
            stopFrame74 = Math.floor(mainAnim.totalFrames * 0.62);
        }

        if (window.innerWidth <= 800) {
            stopFrame97 = Math.floor(mainAnim.totalFrames * 0.97);
        } else {
            stopFrame97 = Math.floor(mainAnim.totalFrames * 0.99);
        }

        // console.log('Total Frames:', mainAnim.totalFrames);
        // console.log('Stop Frame 07:', stopFrame07);
        // console.log('Stop Frame 28:', stopFrame28);
        // console.log('Stop Frame 50:', stopFrame50);
        // console.log('Stop Frame 61:', stopFrame61);
        // console.log('Stop Frame 74:', stopFrame74);
        // console.log('Stop Frame 97 or 99:', stopFrame97);

        mainAnim.goToAndPlay(0, true); // 從頭開始播放動畫

        var checkFrame07 = function() {
            if (mainAnim.currentFrame >= stopFrame07) {
                mainAnim.goToAndStop(stopFrame07, true);
                document.getElementById('cut_0').style.display = 'block';
                document.getElementById('play-button').classList.add('animated', 'fadeIn');
                // console.log('到達 0.7 幀，顯示 cut_0');
            } else {
                requestAnimationFrame(checkFrame07);
            }
        };

        requestAnimationFrame(checkFrame07);
    });

    // addFadeOutAndHide3Sec 函數定義
    function addFadeOutAndHide5Sec(elementId) {
        // 延遲 3 秒後添加 fadeOut 類
        setTimeout(function() {
            document.getElementById(elementId).classList.add('animated', 'fadeOut');
            // 再延遲 1 秒移除 fadeOut 類並隱藏元素
            setTimeout(function() {
                document.getElementById(elementId).classList.remove('animated', 'fadeOut');
                document.getElementById(elementId).style.display = 'none';
            }, 1000); // 1 秒後執行
        }, 4000); // 3 秒後執行
    }

    // addFadeOutAndHide3Sec 函數定義
    function addFadeOutAndHide3Sec(elementId) {
        // 延遲 3 秒後添加 fadeOut 類
        setTimeout(function() {
            document.getElementById(elementId).classList.add('animated', 'fadeOut');
            // 再延遲 1 秒移除 fadeOut 類並隱藏元素
            setTimeout(function() {
                document.getElementById(elementId).classList.remove('animated', 'fadeOut');
                document.getElementById(elementId).style.display = 'none';
            }, 1000); // 1 秒後執行
        }, 3000); // 3 秒後執行
    }

    // addFadeOutAndHide2Sec 函數定義
    function addFadeOutAndHide2Sec(elementId) {
        // 延遲 2 秒後添加 fadeOut 類
        setTimeout(function() {
            document.getElementById(elementId).classList.add('animated', 'fadeOut');
            // 再延遲 1 秒移除 fadeOut 類並隱藏元素
            setTimeout(function() {
                document.getElementById(elementId).classList.remove('animated', 'fadeOut');
                document.getElementById(elementId).style.display = 'none';
            }, 1000); // 1 秒後執行
        }, 2000); // 2 秒後執行
    }

    function addFadeOutAndHide1Sec(elementId) {
        // 延遲 2 秒後添加 fadeOut 類
        setTimeout(function() {
            document.getElementById(elementId).classList.add('animated', 'fadeOut');
            // 再延遲 1 秒移除 fadeOut 類並隱藏元素
            setTimeout(function() {
                document.getElementById(elementId).classList.remove('animated', 'fadeOut');
                document.getElementById(elementId).style.display = 'none';
            }, 1000); // 1 秒後執行
        }, 1000); // 2 秒後執行
    }

    //關於真實
    document.getElementById('play-button').addEventListener('click', function() {
        addFadeOutAndHide2Sec('cut_0');
        mainAnim.play();

        var checkFrame28 = function() {
            if (mainAnim.currentFrame >= stopFrame28) {
                mainAnim.goToAndStop(stopFrame28, true);
                document.getElementById('cut_1').style.display = 'block';
                document.getElementById('btn_about').classList.add('animated', 'fadeIn');
                document.getElementById('play-button-2').classList.add('animated', 'fadeIn');
                // console.log('到達 0.28 幀，顯示 cut_1');
            } else {
                requestAnimationFrame(checkFrame28);
            }
        };

        requestAnimationFrame(checkFrame28);
    });

    //開發建設
    document.getElementById('play-button-2').addEventListener('click', function() {
        addFadeOutAndHide5Sec('cut_1');
        mainAnim.play();

        var checkFrame50 = function() {
            if (mainAnim.currentFrame >= stopFrame50) {
                mainAnim.goToAndStop(stopFrame50, true);
                document.getElementById('cut_2').style.display = 'block';
                document.getElementById('btn_service_1').classList.add('animated', 'fadeIn');
                document.getElementById('play-button-3').classList.add('animated', 'fadeIn');
                // console.log('到達 0.5 幀，顯示 cut_2');
            } else {
                requestAnimationFrame(checkFrame50);
            }
        };

        requestAnimationFrame(checkFrame50);
    });

    //建築再生
    document.getElementById('play-button-3').addEventListener('click', function() {
        addFadeOutAndHide3Sec('cut_2');
        mainAnim.play();

        var checkFrame61 = function() {
            if (mainAnim.currentFrame >= stopFrame61) {
                mainAnim.goToAndStop(stopFrame61, true);
                document.getElementById('cut_3').style.display = 'block';
                document.getElementById('btn_service_2').classList.add('animated', 'fadeIn');
                document.getElementById('play-button-4').classList.add('animated', 'fadeIn');
                // console.log('到達 0.6 幀，顯示 cut_3');
            } else {
                requestAnimationFrame(checkFrame61);
            }
        };

        requestAnimationFrame(checkFrame61);
    });

    //作品
    document.getElementById('play-button-4').addEventListener('click', function() {
        addFadeOutAndHide2Sec('cut_3');
        mainAnim.play();

        var checkFrame74 = function() {
            if (mainAnim.currentFrame >= stopFrame74) {
                mainAnim.goToAndStop(stopFrame74, true);
                document.getElementById('cut_4').style.display = 'block';
                document.getElementById('btn_projects').classList.add('animated', 'fadeIn');
                document.getElementById('play-button-5').classList.add('animated', 'fadeIn');
                // console.log('到達 0.75 幀，顯示 cut_4');
            } else {
                requestAnimationFrame(checkFrame74);
            }
        };

        requestAnimationFrame(checkFrame74);
    });

    document.getElementById('play-button-5').addEventListener('click', function() {
        addFadeOutAndHide2Sec('cut_4');
        mainAnim.play();

        var checkFrame97 = function() {
            if (mainAnim.currentFrame >= stopFrame97) {
                mainAnim.goToAndStop(stopFrame97, true);
                document.getElementById('cut_5').style.display = 'block';
                document.getElementById('contact_wording').classList.add('animated', 'fadeIn');
                document.getElementById('btn_contact').classList.add('animated', 'fadeIn');
                // console.log('到達 0.97 幀，顯示 最後');
            } else {
                requestAnimationFrame(checkFrame97);
            }
        };

        requestAnimationFrame(checkFrame97);
    });
});
