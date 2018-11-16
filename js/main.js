$(document).ready(function(){
	'use strict'
	$('.home').ripples({
	  	resolution: 128,
		dropRadius: 30,
		perturbance: 0.04,
	});
	var width = $(window).width();
	var widthF = width - 20;
	$('canvas').css('width',width + 'px');
	$('.live-text').typed({
		strings: ['<strong class="colored">Software</strong> <strong>a medida</strong>', '<strong class="colored">Excelente</strong> <strong>comuncación</strong>', '<strong class="colored">100%</strong> <strong>confiables</strong>'],
        typeSpeed: 70,
		loop: true
	});
	setInterval(function() {
		var $el = $('.home');
		var x = Math.random() * $el.outerWidth();
		var y = Math.random() * $el.outerHeight();
		var dropRadius = 20;
		var strength = 0.04 + Math.random() * 0.04;

		$el.ripples('drop', x, y, dropRadius, strength);
	}, 800);


	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if(top >= 60){
			$('nav').addClass('active-nav');
			$('.navbar-inverse').removeClass('bg');
		}else if($('nav').hasClass('active-nav')){
			$('.nav').removeClass('active-nav');
			$('.navbar-inverse').addClass('bg');
		}
	})
})