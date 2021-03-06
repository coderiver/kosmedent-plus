head.ready(function() {

	 // sticky footer

   function stickyFooter() {
      var height = $('.footer').outerHeight();

      $('.out').css('margin-bottom', -height);
      $('.push').css('height', height);
   }
   stickyFooter();

   $(window).resize(function() {
     stickyFooter();
   });

   // popup

    $('.js-popup').on('click', function(){
        var link = $(this).data('link');

        $('#' + link).fadeIn('fast');
    });

    $('.js-popup-close').on('click', function(){
        $(this).parents('.popup').fadeOut('fast');
    });
    $('.popup').on('click', function(event){
        $(this).fadeOut('fast');
    });
    $('.popup__in').on('click', function(){
        event.stopPropagation();
    }); 

   // map

    if ($('.map').length) {
        ymaps.ready(function () {
          var myMap = new ymaps.Map('YMapsID', {
              center: [55.48504,28.764819],
              zoom: 17,
              controls: []
          });
          myMap.controls.add('zoomControl');
          myMap.behaviors.disable('scrollZoom');
         // Создаем метку с помощью вспомогательного класса.
            myPlacemark1 = new ymaps.Placemark([55.48504,28.764819], {
                // Свойства.

                balloonContent: 'ЖД вокзал',
                hintContent: 'проспект Франциска Скорины, д.21'
            }, {
                // Опции.
                // Стандартная фиолетовая иконка.
                iconLayout: 'default#image',
                iconImageSize: [37, 48],
                iconImageHref: 'img/marker.png'

            });

         myMap.geoObjects.add(myPlacemark1)



         var myMap2 = new ymaps.Map('YMapsID2', {
              center: [55.48504,28.764819],
              zoom: 17,
              controls: []
          });
          myMap2.controls.add('zoomControl');
          myMap2.behaviors.disable('scrollZoom');
         // Создаем метку с помощью вспомогательного класса.
            myPlacemark2 = new ymaps.Placemark([55.485148,28.766418], {
                // Свойства.

                balloonContent: 'ЖД вокзал',
                hintContent: 'проспект Франциска Скорины, д.21'
            }, {
                // Опции.
                // Стандартная фиолетовая иконка.
                iconLayout: 'default#image',
                iconImageSize: [37, 48],
                iconImageHref: 'img/marker.png'

            });

         myMap2.geoObjects.add(myPlacemark2)

        });

          

    };  

    // accordeon

    $('.js-accordeon').on('click', function(){
        if ($(this).hasClass('is-active')) {
            $(this).removeClass('is-active');
            $(this).find('.js-accordeon-data').slideUp();
        }
        else {
            $('.js-accordeon').removeClass('is-active');
            $('.js-accordeon-data').slideUp();

            $(this).addClass('is-active');
            $(this).find('.js-accordeon-data').slideDown();
        }
    });

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