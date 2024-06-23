$(document).ready(function () {
  // 初始顯示loader動畫
  $('#loader').removeClass('hidden');

  // 根據螢幕寬度選擇適當的視頻URL
  var screenWidth = $(window).width();
  var videoURL = screenWidth >= 790
    ? "https://cddev.creer-design.com/brm/true_0426_video.mp4" 
    : "https://cddev.creer-design.com/brm/true_0426_mobile_video.mp4";

  initializeScrollyVideoWithLoader(videoURL);
});

function initializeScrollyVideoWithLoader(videoURL) {
  new ScrollyVideo({
    scrollyVideoContainer: "scrolly-video",
    cover: true,
    sticky: true,
    full: true, 
    src: videoURL
  });

  // 檢查影片是否加載的函數
  function checkVideoReady() {
    var video = $("#scrolly-video video").get(0);
    if (video && video.readyState >= 3) { // 3 = HAVE_FUTURE_DATA
      // 影片加載完成，隱藏loader並顯示gifContainer的GIF動畫
      $('#loader').addClass('hidden');
      $('#gifContainer').removeClass('hidden');
      
      // 設置定時器以在GIF播放約1秒後隱藏gifContainer
      setTimeout(function() {
        $('#gifContainer').addClass('hidden');
        // 此處可以添加額外的代碼來控制影片的播放，如果需要的話
      }, 2000); // 假設GIF動畫需要播放1秒
      
      clearInterval(checkVideoInterval);
    }
  }

  // 使用定時器來定期檢查影片是否已經加載
  var checkVideoInterval = setInterval(checkVideoReady, 100);
}
