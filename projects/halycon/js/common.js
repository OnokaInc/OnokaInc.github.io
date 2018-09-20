$(function() {
// mobile menu
	$('.js-intro-body__m-menu').on('click', function(){
		if($('.menu').hasClass('open')) {
			$('.menu').removeClass('open');
			$('body').removeClass('off-scroll');		
			$(this).html('&equiv;');				
		}else{
			$('.menu').addClass('open');	
			$(this).html('&times;');
			$('body').addClass('off-scroll');	

		}
	});
// button to up
	$('.js-subscribe-body__btn-up').click(function(){
		$('body,html').animate({scrollTop: 0}, 800);
	});
// button to skills
$('.js-problems-body__arrow-down').click(function(){
	var elementClick = $(this).attr('href');
	var destination = $(elementClick).offset().top;
	$('body,html').animate({scrollTop: destination},1000);
}); 
// respon siveslider
	$('.js-responsive-slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		autoplay: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					dots: false
				}
			}
		]
	});
// common slider
	$('.js-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings:{
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			}
		]
	});


});
