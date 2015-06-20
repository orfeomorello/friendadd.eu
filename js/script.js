$(document).ready(function($) {

alert(typeof window.orientation !== 'undefined');

if(typeof window.orientation !== 'undefined')
{
   //You are using a mobile device!
   var fburl = $('.fblink').attr('href')
   fburl = url.replace('https://www.facebook.com/search', 'https://m.facebook.com/graphsearch')
   $('.fblink').attr('href', fburl)
}

$("#findwoman").click(function(event) {
  event.preventDefault();
  event.stopPropagation();
  $("#advancedmale").slideUp();
  $("#advancedfemale").show( "slow" );
});

$("#findman").click(function(event) {
  event.preventDefault();
  event.stopPropagation();
  $("#advancedfemale").slideUp();
  $("#advancedmale").show( "slow" );
});

/*=================================
||			add/remove Class
==================================*/
	var changeStyle = $('.navigationbar');
    var top = $('.top');
	function scroll() {
		if ($(window).scrollTop() > 700) {
			changeStyle.addClass('modified');
            top.addClass('show-top');

		} else {
			changeStyle.removeClass('modified');
            top.removeClass('show-top');
		}
	}

	document.onscroll = scroll;

/*=================================
||			hide/show
==================================*/

	$("#iconhideshow").click(function(){
	    $(this).toggleClass('fa-bars fa-times-circle');
	    $(".nav").toggleClass('hide show');
	});

/*=================================
||			Isotope
==================================*/

	// init Isotope
	var $container = $('#works_container').isotope({
	  // options
      itemSelector: '.works-single-item'
	});

	// filter items on button click
	$('#filters').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $container.isotope({ filter: filterValue });
	});


}); //(document).ready(function() closed


/*=================================
||			WOW
==================================*/
wow = new WOW(
    {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
  )
wow.init();

/*=================================
||			Smooth Scrooling
==================================*/
	$(function() {
	    $('a[href*=#]:not([href=#])').click(function() {
	        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	            var target = $(this.hash);
	            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	            if (target.length) {
	                $('html,body').animate({
	                	scrollTop: (target.offset().top - 62)//top navigation height
	                }, 1000);
	                return false;
	            }
	        }
	    });
	});

