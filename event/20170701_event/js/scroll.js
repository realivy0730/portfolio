/*滑鼠移置特定高度時，黏人精顯現*/
$(window).on("load resize scroll",function(e){

　　var top_position = $(this).scrollTop();
　　if ( top_position > 900) {
		if ($(window).width() > 767) {
　　　　// Let the item move with scrolling.
　　　　$(".FlyNav").show('slow');
		}
　　} else {
　　　　// Reset the position to default.
　　　　$(".FlyNav").hide();
　　}
});


