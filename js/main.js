$(document).ready(function ()	{
	

    $('.unterliste').hover(function() {
        $(this).addClass('transition');
 
    }, function() {
        $(this).removeClass('transition');
    });

	$('.button').hover(function() {
        $(this).addClass('transition');
 
    }, function() {
        $(this).removeClass('transition');
    });
    
    $('.button').hover(function() {
	    $('#navigation').addClass('active');
    }, function() {
        $('#navigation').removeClass('active');
    });
    

});

