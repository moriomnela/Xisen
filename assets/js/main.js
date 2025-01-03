const container = document.querySelector(".container");
const lekeBtns = document.querySelector(".like-btn");


(function ($) {
"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});

// One Page Nav
//var top_offset = $('.header-area').height() - 10;
//$('.main-menu nav ul').onePageNav({
	//currentClass: 'active',
	//scrollOffset: top_offset,
//});

// Initialize Swiper
var swiper = new Swiper(".brand-slider-active", {
	slidesPerView: 5,
	spaceBetween: 0,
	loop:3,
	autoplay: {
      delay:5000,
	},
});
var swiper = new Swiper(".brand-slider-active", {
	slidesPerView: 2,
	spaceBetween: 10,
	breakpoints: {
	  480: {
		slidesPerView: 2,
	  },
	  768: {
		slidesPerView: 3,
	  },
	  1024: {
		slidesPerView: 5,
	  },
	},
  });

var swiper = new Swiper(".testimonial-active", {
	slidesPerView: 1,
	spaceBetween: 100,
	loop:1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});
var swiper = new Swiper(".testimonial-active", {
	slidesPerView: 1,
	spaceBetween: 100,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	breakpoints: {
	  480: {
		slidesPerView: 1,
	  },
	  768: {
		slidesPerView: 1,
	  },
	  1024: {
		slidesPerView: 1,
	  },
	},
  });

$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});



// mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: false,
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();


// owlCarousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
	dots:true,                                                                          
    responsive:{
        0:{
            items:1   

        },
        600:{
            items:3

        },
        1000:{
            items:5
			
        }
    }
})


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


// isotop
$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});




// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

$(document).ready(function() {
	$('select').niceSelect();
  });

// WOW active
new WOW().init();


})(jQuery);