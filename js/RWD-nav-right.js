$(function(){
	$('.menu-toggle').on('click',function(){
		$('.menu-toggle').toggleClass('active');
		$('.navbar .nav').toggleClass('active');
		$('.navbar .nav .md-nav').toggleClass('active');
	});	
	$('.nav__link').on('click',function(){
		$('.menu-toggle').removeClass('active');
		$('.navbar .nav').removeClass('active');
		$('.navbar .nav .md-nav').removeClass('active');
	});

});