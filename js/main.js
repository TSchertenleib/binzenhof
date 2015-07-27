// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
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

// Hide Button on scrol down
var myWindow = $(window);
var myPos = myWindow.scrollTop();

myWindow.scroll(function() {
    if(myWindow.scrollTop() > myPos && myWindow.scrollTop() > 300)
    {
        $('.button').fadeOut('slow');  
    }
    else
    {
        $('.button').fadeIn('slow');
    }
    myPos = myWindow.scrollTop();
 });

// simple jQuery functions

$(document).ready(function ()	{

    $(".uebertitel").css("display","none");


    $('.button').hover(function() {
        $('.inhalt').addClass('start-effect');
        $('.bgimage img').addClass('img-zoom');
        $('.uebertitel').fadeIn('slow');

    }, function() {
        $('.inhalt').removeClass('start-effect');
        $('.bgimage img').removeClass('img-zoom');
        $(".uebertitel").fadeOut('slow');

    });

    // scroll to position
    $('.button').click(function() {

        $.fn.scrollView = function () {
            return this.each(function () {
                $('html, body').animate({
                    scrollTop: $(this).offset().top
                }, 1000);
            });
        }
        $('.main-navigation').scrollView();
    });

    // blur background of an element
    $('.button').blurjs({
        source: 'body',
        radius: 10
    });


});




