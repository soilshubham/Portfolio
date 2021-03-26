$(document).ready(function () {

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 0;

    function navbarFixed() {
        
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll>0) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        
    }

    navbarFixed();

});