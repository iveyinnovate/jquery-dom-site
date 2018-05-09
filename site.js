(function($){
	// Make all divs same height
	var windowHalf = $(window).height() / 2;
	$('.grid-item').height(windowHalf);
	// And position the h2's in the middle
		var h2Half = $('.grid-item h2').height() / 2;

	var gridHalf= windowHalf / 2 - h2Half;
	$('.grid-item h2').css('margin-top', gridHalf);
	//set window height

	// close section on clicking close by removing class
    $('.close').on('click', function(){
    	$(this).parent().removeClass('active').addClass('inactive');
    	$(window).scrollTop(0);
    	$('body').css('overflow', 'hidden');
    	$('.grid-portfolio').css('margin-top', 0);
    	$('header').removeClass('active');
    })	
	// add class to section on click 
	$('.grid-item').on('click', function(){
		// $(this).attr('id');
		var gridItem = '.' + $(this).attr('id');
		if ($(this).attr('id') == 'grid-portfolio'){
			$( gridItem ).css('margin-top', '-400px');
			$('body').css('overflow', 'visible');
			$('header').addClass('active');
		} else {
		    $( gridItem ).removeClass('inactive').addClass('active');}
		})


	//add easter egg if page name clicked
	$('#grid-home').on('click', function(){
		$('#grid-home h2').append("<div class='easter-egg'><p>hello bonjour hola :)</p></div>");
		setTimeout(function() {
			$(".easter-egg").fadeOut(1000);
		}, 500);
	})
	
		


})(jQuery);