$(document).ready(function() {
	
	function r(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false
    }
    
	function i(e) {
        for (var n = t.length; n--;) {
            if (e.keyCode === t[n]) {
                r(e);
                return 
            }
        }
    }
    
	function s(e) {
        r(e)
    }
    
	function o(e) {
	}
    
	function u() {
        window.onmousewheel = document.onmousewheel = o;
        document.onkeydown = i;
        document.body.ontouchmove = s
    }
    
	function a() {
        window.onmousewheel = document.onmousewheel = document.onkeydown = document.body.ontouchmove = null
    }
    
	function m() {
        return window.pageYOffset || f.scrollTop
    }
    
	function g() {
        l = m();
        if (h&&!e) {
            if (l < 0)
                return false;
            window.scrollTo(0, 0)
        }
        if (classie.has(d, "notrans")) {
            classie.remove(d, "notrans");
            return false
        }
        if (p) {
            return false
        }
        if (l <= 0 && c) {
            y(0)
        } else if (l > 0&&!c) {
            y(1)
        }
    }
    
	function y(e) {
        p = true;
        if (e) {
            classie.add(d, "modify")
        } else {
            h = true;
            u();
            classie.remove(d, "modify")
        }
        setTimeout(function() {
            c=!c;
            p = false;
            if (e) {
                h = false;
                a()
            }
        }, 1200)
    }
    
	var e = function() {
        var e, t =- 1;
        var n = window.navigator.userAgent;
        var r = n.indexOf("MSIE ");
        var i = n.indexOf("Trident/");
        if (r > 0) {
            t = parseInt(n.substring(r + 5, n.indexOf(".", r)), 10)
        } else if (i > 0) {
            var s = n.indexOf("rv:");
            t = parseInt(n.substring(s + 3, n.indexOf(".", s)), 10)
        }
        return t>-1 ? t : e
    }();
    
	var t = [32, 37, 38, 39, 40], n = 0;
    var f = window.document.documentElement, l, c, h, p, d = document.getElementById("container"), v = d.querySelector(".trigger");
    var b = m();
    h = b === 0;
    u();
    
	if (b) {
        c = true;
        classie.add(d, "notrans");
        classie.add(d, "modify")
    }
    
	window.addEventListener("scroll", g);
    v.addEventListener("click", function() {
        y("reveal")
    })
    
	$('.wrap-hero').parallax();	
	var contentSections = $('.section'),
    navigationItems = $('.vertical-nav a');

    updateNavigation();
	
	function updateNavigation() {
		contentSections.each(function() {
            $this = $(this);
            var activeSection = $('.vertical-nav a[href="#' + $this.attr('id') + '"]').data('number') - 1;
            if ( ( $this.offset().top - $(window).height() / 2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height() / 2 > $(window).scrollTop() ) ) {
                navigationItems.eq(activeSection).addClass('is-selected');
            } else {
                navigationItems.eq(activeSection).removeClass('is-selected');
            }
        });
    }
	
	$(window).on('scroll', function() {
        updateNavigation();
		 
		 if ($(document).scrollTop() >= 5) 
		 {
    	    $('.vertical-nav').addClass('appear');
		 } 
		 else 
		 {
    	    $('.vertical-nav').removeClass('appear');
  		 }
    });
	
	function smoothScroll(target) {
        $('html, body').animate( { 'scrollTop': target.offset().top }, 600 ); //da mettere un easign
    }
	
    navigationItems.on('click', function(event) {
        event.preventDefault();
        smoothScroll($(this.hash));
    });
	
	
	var win = $(window);

	$('[data-type="vertical"]').each(function(){

	  var elm = $(this); 
		
	  win.on('scroll', function() {               
	    var position = -( (win.scrollTop()-elm.offset().top) * elm.data('speed'))/10,
	    vertical_translate = 'translate3d(0,' + position + 'px, 0px)'; 
	      
	    elm.css({ WebkitTransform : vertical_translate, transform : vertical_translate });
	  });   
	
	});
	
    $(".btn-play").click(function(){
        
		var videoOverlay = $('.video-overlay');
		var videoContainer = $('.video-container');
		var closeVideo = $('<button class="close-video">close video</button>');
       
	   videoOverlay.addClass('appear');
	   videoContainer.addClass('perspective');
	   $('body').append(closeVideo);
        
       videoContainer.append('<iframe src="'+$(this).data('video')+'"frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
       var videoEmbed = videoContainer.find('iframe');
        
       videoEmbed.css('min-width', '100%');
       videoEmbed.css('min-height', '100%');
    
       $(".close-video").click(function(){
		  videoOverlay.removeClass('appear');
		  videoContainer.removeClass('perspective'); 
         videoEmbed.delay(500).remove();
		  $(this).fadeOut(500, function(){
			  closeVideo.remove();
		  });
       }); 
    
	});
	
	var splitlayout = document.getElementById( 'section4' ),
		leftSide = splitlayout.querySelector( 'div.side-left' ),
		rightSide = splitlayout.querySelector( 'div.side-right' ),
		pageLeft = splitlayout.querySelector( 'div.page-left' ),
		pageRight = splitlayout.querySelector( 'div.page-right' ),
		eventtype = 'click',
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[Modernizr.prefixed( 'transition' )];

	function init() {
		
		classie.add( splitlayout, 'reset-layout' );

		leftSide.querySelector( 'div.intro-content' ).addEventListener( eventtype, function( ev ) {
			reset();
			classie.add( splitlayout, 'open-left' );
		} );

		rightSide.querySelector( 'div.intro-content' ).addEventListener( eventtype, function( ev ) {
			reset();
			classie.add( splitlayout, 'open-right' );
		} );

		var onEndTransFn = function() {
				this.removeEventListener( transEndEventName, onEndTransFn );
				classie.add( splitlayout, 'reset-layout' );
			},
			backToIntro = function( ev ) {
				ev.preventDefault();
				ev.stopPropagation();
				var dir = classie.has( ev.target, 'back-right' ) ? 'left' : 'right',
					page = dir === 'right' ? pageRight : pageLeft;
				classie.remove( splitlayout, 'open-' + dir );
				classie.add( splitlayout, 'close-' + dir );
				page.addEventListener( transEndEventName, onEndTransFn );
			};

		splitlayout.querySelector( 'button.back-left' ).addEventListener( eventtype, backToIntro );
		splitlayout.querySelector( 'button.back-right' ).addEventListener( eventtype, backToIntro );
	}

	function reset() {
		classie.remove( splitlayout, 'close-right' );
		classie.remove( splitlayout, 'close-left' );
		classie.remove( splitlayout, 'reset-layout' );
	}

	init();
	
	$('.grid > div').on('click', function() {
       $('.wrap-get-in').addClass('disable');
		$('.vertical-nav').addClass('disable');
    });
	
	$('button.nav-close').on('click', function() {
       $('.wrap-get-in').removeClass('disable');
		$('.vertical-nav').removeClass('disable');
    });
	 
	 new CBPGridGallery(document.getElementById('grid-gallery')); 

}); //document ready