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

    $('.js-gallery').slick({
      dots: true,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 5000
    });

    // mobile nav

    $('.js-hamburger').on('click', function(){
      $('.js-mob-menu').slideDown();
    });
    $('.js-mob-menu-close').on('click', function(){
      $('.js-mob-menu').slideUp();
    }); 

});