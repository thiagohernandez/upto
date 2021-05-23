( function($) {

    'use strict';
    /* CODE GOES HERE */



    function calculatePaddingRight(element) {
        if ($(window).width() > 991) {
            var valuePadding = ($(window).width() - $('.container').width() ) / 2;
            var el = '"' + element + '"'; 
            console.log(element);
            console.log(valuePadding);
            $(element).css({
                'padding-right' : valuePadding
            });
        } else {
            $(element).css({
                'padding-right' : '15px'
            });
        }
    }


    $(document).ready(function() {

        
        $(function () {
          $('[data-toggle="tooltip"]').tooltip()
        })
        
        if ($('.padding-right').length > 0) {
            calculatePaddingRight('.padding-right');
        }

        if ($('.slick-testimonials').length > 0) {
            $('.slick-testimonials').each( function () {
              $(this).slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    autoplay: true,
                    autoplaySpeed: 3000
                });
            });
          }

    }); //ready

    $(window).resize( function() {
        console.log('resize');
        if ($('.padding-right').length > 0) {
            calculatePaddingRight('.padding-right');
        }
    });

} ) ( jQuery );




