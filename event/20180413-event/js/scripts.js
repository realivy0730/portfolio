$(document).ready(function(){
	$(".main-nav ul li a").click(function () {
		$(this).parent().addClass('active'). // <li>
		siblings().removeClass('active');
	});
	$(".main-nav ul li:nth-child(2)").click(function () {
		 $("body").attr("id", "firstSection");
	});
	$(".main-nav ul li:nth-child(3)").click(function () {
		 $("body").attr("id", "secondSection");
	});
	$(".main-nav ul li:nth-child(4),.MovieBox ul li:nth-child(2)").click(function () {
		 $("body").attr("id", "thirdSection");
	});
	$(".main-nav ul li:nth-child(5)").click(function () {
		 $("body").attr("id", "fourSection");
	});

});


// $(document).ready(function() {
// 	$('#fullpage').fullpage({
// 		// sectionsColor: ['#0F2980', '#ffd200', '#c1c1c1'],
// 		anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourSection'],
// 		menu: '.main-nav ul',
// 		// autoScrolling: false

// 	});
// 	$.fn.fullpage.setMouseWheelScrolling(false);
// 	$.fn.fullpage.setAllowScrolling(false);
// });