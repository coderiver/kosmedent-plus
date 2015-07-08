head.ready(function() {

	// slider
    $('.js-slider').on('init', function(event, slick){
      $(this).addClass('is-loaded');
    });

  	$('.js-slider').slick({
  		dots: true,
  		arrows: false,
      	adaptiveHeight: true,
  		autoplay: true,
		autoplaySpeed: 5000
  	});
});