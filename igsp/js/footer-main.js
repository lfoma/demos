;(function () {
	
	'use strict';



	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};

	var burgerMenu = function() {

		$('.js-footer-black-nav-toggle').on('click', function(event) {
			event.preventDefault();
			var $this = $(this);
			if( $('body').hasClass('menu-show') ) {
				$('body').removeClass('menu-show');
				$('#footer-black-main-nav > .js-footer-black-nav-toggle').removeClass('show');
			} else {
				$('body').addClass('menu-show');
				setTimeout(function(){
					$('#footer-black-main-nav > .js-footer-black-nav-toggle').addClass('show');
				}, 900);
			}
		})
	};

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '100%' } );
	};
	
	var counter = function() {
		$('.js-counter').countTo({
			formatter: function (value, options) {
	      	return value.toFixed(options.decimals);
	    	}
		});
	};

	var counterWayPoint = function() {
		if ($('#counter-animate').length > 0 ) {
			$('#counter-animate').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '100%' } );
		}
	};


	var imgPopup = function() {


		$('body').on('click', '.img-popup', function(event){
			event.preventDefault();
			var src = $(this).attr('href');
			$.magnificPopup.open({
		      items: {
			      src: src
			   },
			   type: 'image'
		  	});
				
		});
		
	};


	
	$(function(){
		fullHeight();
		burgerMenu();
		counter();
		contentWayPoint();
counterWayPoint();
		imgPopup();
	});


}());