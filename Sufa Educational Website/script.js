$(document).ready(function() {

    // Sticky Navigation

    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');

        }
    }, {
        offset: '60px'


    });

    // Navigation Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    // animation to scroll

    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animate__animated animate__pulse');
    }, {
        offset: '50%'
    });
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animate__animated animate__fadeInLeft');
    }, {
        offset: '50%'
    });
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animate__animated animate__fadeInRight');
    }, {
        offset: '50%'
    });
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animate__animated animate__lightSpeedInLeft');
    }, {
        offset: '50%'
    });
    // mobile navigation
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200);
        if (icon.hasClass('fa-bars')) {
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }

    });

});