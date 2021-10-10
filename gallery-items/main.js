


'use strict';



(function($) {

	

	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Hero Item Size
	--------------------*/
	function heroItemSize () {
		if($(window).width() > 767) {
			var header_h = $('.fixed-top').innerHeight();
			var footer_h = $('.my-footer').innerHeight();
			var window_h = $(window).innerHeight();
			var hero_item_h = ((window_h) - (header_h + footer_h + 5));
			$('.hero-item').each(function() {
				$(this).height(hero_item_h);
			});
			
		}
	}
	if($(window).width() > 767) {
		heroItemSize ();
		$(window).resize(function(){
			heroItemSize ();
		});
	}

	/*------------------
		Hero Slider
	--------------------*/
	$('.hero-slider').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		mouseDrag: false,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		items: 1,
		autoplay: true,
		smartSpeed: 2000,
	});

})(jQuery);

