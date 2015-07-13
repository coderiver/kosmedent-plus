head.ready(function() {

	  // validation

    var form_validate = $('.js-validate');
    if (form_validate.length) {
        form_validate.each(function () {
            var form_this = $(this);
            $.validate({
                form : form_this,
                validateOnBlur : false,
                borderColorOnError : false,
                scrollToTopOnError : false
            });
        });
    };
  // fancybox init

    $('.fancybox').fancybox({
        padding: 0
    });

  // textarea focus event

    $('.textarea textarea').on('focus', function(){
      $(this).parent('.textarea').addClass('is-focused');
    });
    $('.textarea textarea').on('blur', function(){
      $(this).parent('.textarea').removeClass('is-focused');
    }); 

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