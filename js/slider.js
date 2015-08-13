$(document).ready(function ()   { 

    // multiple galleries



  var $siteSlider = $(".site-slider"),
        $sliderTitle = $(".thumb");

    $siteSlider.first().addClass('is-active');


    $sliderTitle.each(function() {
        var $this = $(this),
            sliderId = $this.attr("data-sliderId"),
            $targetEl = $("#" + sliderId);

        $this.on("click", function() {
            // $title.removeClass("selected");
            // $this.addClass("selected");
            $siteSlider.removeClass("is-active");
            $targetEl.addClass("is-active");
            console.log("this: "+ $this,"sliderId "+ sliderId);
        });
    });


// $(".thum").on("click", function() {
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
      arrows: true,
    });
    

    $('.next-button-slick').click(function(){
      $('.site-slider').slickNext();
    });
    $('.prev-button-slick').click(function(){
      $('.site-slider').slickPrev();
    });


});