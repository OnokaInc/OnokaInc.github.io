$(function() {

	$('.js-intro-body__m-menu').on('click', function(){
		if($('.menu').hasClass('open')) {
			$('.menu').removeClass('open');		
			$(this).html('&equiv;');				
		}else{
			$('.menu').addClass('open');	
			$(this).html('&times;').css('position', 'fixed');	

		}
	});

	$('.js-responsive-slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		autoplay: true,
		arrow: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					dots: false
				}
			}
		]
	});

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
