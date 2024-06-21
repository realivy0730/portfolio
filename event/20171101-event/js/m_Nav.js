$(function(){
　$(window).load(function(){
　　$(window).bind('scroll resize', function(){
　　var $this = $(this);
　　var $this_Top=$this.scrollTop();

　　//當高度小於100時，關閉區塊
　　if($this_Top < 80){
　　　$('.mFlyNav').stop().animate({bottom:"-125px"}, 500, 'swing');
　　　}
　　　　if($this_Top > 80){
　　　　$('.mFlyNav').stop().animate({bottom:"0px"}, 500, 'swing');
　　　 }
　　}).scroll();
　});
});