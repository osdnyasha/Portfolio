$(document).ready(function () {

	if($(window).width() < 634 ) {
		$(".mnu-button").css("display", "block");
		$(".mnu").css("display", "none");
	};

	function heightDetect() {
		$(".main-head").css("height", "100vh");
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
		widthResize();
	});

	jQuery(document).ready(function($) {
		$(window).load(function() {
			setTimeout(function() {
				$('.loader-container').fadeOut('slow', function() {});
			}, 900);
		});
	});

	$(".section_header").animated("fadeInUp", "fadeOutDown");
	$(".animation_1").animated("flipInY", "fadeOutDown");
	$(".animation_2").animated("zoomIn", "zoomOut");
	$(".animation_3").animated("fadeIn", "bounceOut");
	$(".animation_4").animated("slideInUp", "slideOutUp");


	$(window).scroll(function(){  
		var section = [ "s",".home", ".about" , ".services",".portfolio", ".contact" ];
		for(var i = 1; i < 6; i++){                            
   	if ( $(window).scrollTop() >= $(section[i]).offset().top - ($(section[i]).height()/2) && $(window).scrollTop() < $(section[i]).offset().top + ($(section[i]).height()/2) ){ // ставим условие
   		$(".offer-block").css("opacity" , "1");
   		$(".mnu li:nth-child(" + i  + ")").attr("id" , "active");        
   	}
   	else {
   		$(".mnu li:nth-child(" + i + ")").attr("id" , "");
   	}
   }
});


	function widthResize() {
		if($(window).width() < 634) {
			$(".mnu-button").css("display", "block");
			$(".mnu").css("display", "none");
		}
		else {
			$(".mnu-button").css("display", "none");
			$(".mnu").css("display", "block");
		}
	}	
	function bodyoverflow() {
		$("body").css("overflow","visible");
	}


	document.onscroll = function() {

		if(window.pageYOffset > 1000)
		{
			$('.count').each(function () {
				$(this).prop('Counter',0).animate({
					Counter: $(this).text()
				}, {
					duration: 24000,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					}
				});
			});
		}
	};


	$(".mnu li").click(function() {
		$("#active").attr("id","");
		$(this).attr("id","active");
	});

	$('#menu-toggle').click(function(){
		$(this).toggleClass("open");
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$("#menu-toggle").toggleClass("open");
		
	}).append("<span>");

	$("#menu-toggle").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_mnu").fadeOut(600);
			$("body").css("overflow","visible");
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_mnu").fadeIn(600);
			$("body").css("overflow", "hidden");
			$(".top_mnu li a").addClass("fadeInUp animated");
			
		};

		
	});

	$('.mnu li a , .top_mnu ul li a').on('click', function (e) {
		
		var targetSec = $(this).text();
		$('html, body').animate({
			scrollTop: $('.' + targetSec).offset().top - 80
		}, 600);
		$("body").css("overflow","visible");
		
	});


	 // portfolio
	 // $('.gallery ul li a').click(function() {
	 // 	var itemID = $(this).attr('href');
	 // 	$('.gallery ul').addClass('item_open');
	 // 	$(itemID).addClass('item_open');
	 // 	return false;
	 // });
	 // $('.close').click(function() {
	 // 	$('.port, .gallery ul').removeClass('item_open');
	 // 	return false;
	 // });

	 // $(".gallery ul li a").click(function() {
	 // 	$('html, body').animate({
	 // 		scrollTop: parseInt($("#top").offset().top - 150)
	 // 	}, 400);
	 // });
	 // end portfolio



	 window.onscroll = function() {
	 	if(window.pageYOffset > 0){
	 		$('.nav-box').css("background-color", "rgba(0,0,0,.9)");
	 	}
	 	else {
	 		$('.nav-box').css("background-color", "rgba(0,0,0,.4)");
	 	}
	 };
	 var typed = new Typed('#typed', {
	 	stringsElement: '#typed-strings',
	 	typeSpeed: 80,
	 	backDelay: 2000,
	 	startDelay: 500,
	 	backSpeed: 50,
	 	loop: true
	 });
	});



 $('.popup-gallery').magnificPopup({
    delegate: 'a',
    closeOnContentClick: true,
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
       gallery: {
      enabled: true,
      navigateByImgClick: false,
            preload: [0, 1]
    },

    zoom: {
    enabled: true, // By default it's false, so don't forget to enable it

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function
},
   
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });