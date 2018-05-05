    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            if ($('#scrollup').is(':hidden')) {
                $('#scrollup').css({opacity : 1}).fadeIn('slow');
            }
        } else { $('#scrollup').stop(true, false).fadeOut('fast'); }
    });
    $('#scrollup').click(function() {
        $('html, body').stop().animate({scrollTop : 0}, 300);
    });