"use strict";$(document).ready(function(){$('.BottomBar a[href^="#"],.FlyNav a[href^="#"]').on("click",function(o){o.preventDefault();var t=this.hash,l=$(t);$("html, body").stop().animate({scrollTop:l.offset().top-10},900,"swing")})}),$(window).scroll(function(){$(this).scrollTop()>1800?$(window).width()>1200&&$(".FlyNav").fadeIn("slow"):$(".FlyNav").hide()}),$(function(){$(".hamburgerBox").click(function(){$(this).parents(".DropToggle").toggleClass("DropToggleOpen")}),$(".DropMenu ol li a").click(function(){$(this).parents(".DropToggle").toggleClass("DropToggleOpen")})});