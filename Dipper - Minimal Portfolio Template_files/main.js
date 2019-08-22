(function ($) {
"use strict";


// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});

// sticky
var wind = $(window);
var sticky = $('#sticky-header');
wind.on('scroll', function () {
	var scroll = wind.scrollTop();
	if (scroll < 1) {
		sticky.removeClass('sticky');
	} else {
		sticky.addClass('sticky');
	}
});


/* counter */
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

 // portfolio active
	$('.portfolio-area').imagesLoaded( function() {
		var grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: 1
			}
		});

		$('.portfolio-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			grid.isotope({ filter: filterValue });
		});

		//for portfolio menu active class
		$('.portfolio-menu button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

	});

 // portfolio active
	$('.portfolio-area').imagesLoaded( function() {
		var grid = $('.grid2').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			layoutMode: 'fitRows',
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: 1
			}
        })

		$('.portfolio-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			grid.isotope({ filter: filterValue });
		});

		//for portfolio menu active class
		$('.portfolio-menu button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

	});

/* image-link */
$('.image-link').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});
/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});

/* clients-active */
$('.clients-active').owlCarousel({
    loop:true,
    nav:false,
	dots:true,
	autoplay:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        1000:{
            items:3
        }
    }
})




/* clients2-active */
$('.clients2-active').owlCarousel({
    loop:true,
    nav:false,
	dots:false,
	autoplay:true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
/* brand-active */
$('.brand-active').owlCarousel({
    loop:true,
    nav:false,
	autoplay:true,
    responsive:{
        0:{
            items:2
        },
        576:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        },
        1200:{
            items:6
        }
    }
})
/* testimonial-active */
$('.testimonial-active').owlCarousel({
    loop:true,
    nav:false,
	dots:false,
	autoplay:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

/* WOW active */
new WOW().init();


/* Circular Progress */
	$('.circular-progress').waypoint(function(){

		$('.circular-progress').easyPieChart({
			lineWidth: 6,
			trackColor: false,
			scaleLength: 0,
			barColor: '#f44336'
		});

	}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
    });


    /* hamburgers menu option  */
    $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active');
        $(this).next().toggleClass('nav-menu-show')
	});


	// map
	function basicmap() {
		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: 11,
			scrollwheel: false,
			// The latitude and longitude to center the map (always required)
			center: new google.maps.LatLng(40.6700, -73.9400), // New York
			// This is where you would paste any style found on Snazzy Maps.
			styles: [{ "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.attraction", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.business", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.medical", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "labels.text", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.line", "elementType": "geometry.fill", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.line", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.line", "elementType": "labels.text.fill", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.line", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.line", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.station.bus", "elementType": "all", "stylers": [{ "visibility": "off" }] }]
		};
		// Get the HTML DOM element that will contain your map
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById('contact-map');

		// Create the Google Map using our element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);

		// Let's also add a marker while we're at it
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(40.6700, -73.9400),
			map: map,
			title: 'Cryptox'
		});
	}
	if ($('#contact-map').length != 0) {
		google.maps.event.addDomListener(window, 'load', basicmap);
	}




})(jQuery);