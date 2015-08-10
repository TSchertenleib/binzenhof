$(document).ready(function ()   {

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
var scrollOut = $(window).height()/2;
var breite = $(window).height();

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



    // hamburger

    (function() {

      "use strict";

      var toggles = document.querySelectorAll(".c-hamburger");

      for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
      };

      function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
          e.preventDefault();
          
          if  (this.classList.contains("is-active") === true) {
            this.classList.remove("is-active");
            // $('.unterliste2').removeClass('hintergrund');

          }else{
            this.classList.add("is-active");
            // $('.unterliste2').addClass('hintergrund');
          }

        });
      }

    })();


    


    $('.c-hamburger').click(function(){
      $('.unterliste2').css('opacity', function(i,o){
        return parseFloat(o).toFixed(1) === '0.0' ? 1 : 0.0;
      });

    });


    // slider

    $('.kuehe-slider').slick({
      arrows: true,
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 3,
      responsive: [

      {
        breakpoint: 667,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });


    function initialize() {
      var mapCanvas = document.getElementById('map-canvas');
      var mapOptions = {
        center: new google.maps.LatLng(47.378237, 8.0470636),
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP 
          //ROADMAP HYBRID TERRAIN SATELLITE
        }
        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        var myIcon='https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-128.png';
        var marker = new google.maps.Marker({ position: {lat:47.378237, lng:8.0470636}, map: map, icon: myIcon, optimized:false });
        console.log('hallo');
      // var marker = new google.maps.Marker({
      //   map: map,position: new google.maps.LatLng(47.378237, 8.047063600000001)});

     // I create an OverlayView, and set it to add the "markerLayer" class to the markerLayer DIV
     // var myoverlay = new google.maps.OverlayView();

     myoverlay.draw = function () {
       this.getPanes().markerLayer.id='markerLayer';
     };
     // myoverlay.setMap(map);

   }
   google.maps.event.addDomListener(window, 'load', initialize);



    // blur background of an element
    // $('.button').blurjs({
    //     source: '.bg',
    //     radius: 5,
    //     offset: {
    //     x: halbeBreite-739,
    //     y: scrollOut-375.5
    // },
    // });

});


