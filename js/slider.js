$(document).ready(function ()   { 


  // MULTIPLE GALLERIES


  // unsere tiere

  var $siteSlider = $(".site-slider"),
  $sliderTitle = $(".thumb");
  // $siteSlider.first().addClass('is-active');
  $sliderTitle.each(function() {
    var $this = $(this),
    sliderId = $this.attr("data-sliderId"),
    $targetEl = $("#" + sliderId);


    $this.on("click", function() {
        // $(window).trigger("resize");
        // $(window).resize();    
        $siteSlider.removeClass("is-active");
        // $(window).trigger("resize");
        $targetEl.addClass("is-active");
        // console.log("this: "+ $this,"sliderId "+ sliderId);
      });
  });



// events

$sliderTitleEvents = $(".thumb-events");
// $siteSlider.first().addClass('is-active');
$sliderTitleEvents.each(function() {
  var $this = $(this),
  sliderId = $this.attr("data-sliderId"),
  $targetEl = $("#" + sliderId);


  $this.on("click", function() {
    // $(window).trigger("resize");
    $(window).resize();    
    $siteSlider.removeClass("is-active");
    // $(window).trigger("resize");
    $targetEl.addClass("is-active");
    // console.log("this: "+ $this,"sliderId "+ sliderId);
  });
});

// $(".thumb").on("click", function() {
//         var sliderId = $(this).attr("data-sliderId");
//         $(".site-slider").removeClass("active");
//         $("#" + sliderId).addClass("active");
//     });





// slick slider

$('.site-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true
  // ,
  // responsive: [
    
 
  //   {
  //     breakpoint: 667,
  //     settings: {
  //       arrows:false,
  //       dots: false,
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   }
  //   // You can unslick at a given breakpoint now by adding:
  //   // settings: "unslick"
  //   // instead of a settings object
  // ]

        
});




    // $('.next-button-slick').click(function(){
    //   $('.site-slider').slickNext();
    // });
    // $('.prev-button-slick').click(function(){
    //   $('.site-slider').slickPrev();
    // });



$('.tiere-ueberflex').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  arrows: false,
  asNavFor: '.site-slider'

});


$('.events-ueberflex').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  arrows: false,
  asNavFor: '.site-slider'
});

});