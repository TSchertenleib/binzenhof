$(document).ready(function ()   {

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
var scrollOut = $(window).height()/2;
var halbeBreite = $(window).width()/2;



// hide header functions
$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);


// scroll down function
$.fn.scrollView = function () {
    return this.each(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 1000);
    });
}

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight && st > scrollOut){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

// Hide Button on scroll down
var myWindow = $(window);
var myPos = myWindow.scrollTop();

myWindow.scroll(function() {
    if(myWindow.scrollTop() > myPos && myWindow.scrollTop() > scrollOut/2) {
        $('.button').stop(true, false).fadeOut('fast');  
    } else {
        $('.button').stop(true, false).fadeIn('slow');
    }
    myPos = myWindow.scrollTop();
});


// simple jQuery functions

$('.portraits-container').hover(function() {
    $('.name').addClass('zoom');
    $('.angaben').addClass('zoom');
}, function() {
    $('.name').removeClass('zoom');
    $('.angaben').removeClass('zoom');
});

$(".uebertitel").css("display","none");


$('.button').hover(function() {
    $('.inhalt').addClass('start-effect');
    $('.bgimage').addClass('img-zoom');
    $('.uebertitel').stop(true, false).fadeIn('slow');

}, function() {
    $('.inhalt').removeClass('start-effect');
    $('.bgimage').removeClass('img-zoom');
    $('.uebertitel').stop(true, false).fadeOut('fast');

});

    // scroll to position
    $('.button').click(function() {

        $('.main-navigation').scrollView();
    });


});
    // blur background of an element
    // $('.button').blurjs({
    //     source: '.bg',
    //     radius: 5,
    //     offset: {
    //     x: halbeBreite-739,
    //     y: scrollOut-375.5
    // },
    // });






