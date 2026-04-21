//FIGURE-SLIDER 1.0 by DcDeiv https://github.com/dcdeiv/
// GPLv2 http://www.gnu.org/licenses/gpl-2.0-standalone.html
(function( $ ) {
	$( document ).ready(function() {
		$.fn.figureSlider = function() {
			var wrapper  = $( this );
			var ww       = wrapper.width();
			var mh       = ww / 1.85;
			
			wrapper
				.wrapInner( '<div />' )
				.css({
				padding: 0
			});
			
			var slider = wrapper.children();
			
			slider
				.prepend( '<div /><div />' )
				.css({
					position: 'relative',
					width: ww,
					minHeight: mh,
					margin: '0 auto',
					padding: 0,
					backgroundColor: 'inherit',
					overflow: 'hidden'
				});
			
			var figure        = slider.children().filter( 'figure' );
			var figureLength  = figure.length;
			
			figure
				.wrapAll( '<div />' )
				.css({
					width: ww,
					margin: 0,
					padding: 0,
					border: 0,
					borderImageWidth: 0,
					float: 'left'
				});
			
			var figureHolder = figure.parent();
			
			figureHolder.css({
				width: figureLength * ww,
				backgroundColor: 'inherit',
			});
			
			//IMG FIX
			figure.children().filter( 'img' ).each(function() {
				var figureImg = $( this );
				var imgSrc = figureImg.attr( 'src' );
				
				figureImg.wrap( '<div />' );
				var imgWrapper = figureImg.parent();
				
				imgWrapper.css({
					width: '100%',
					height: mh
				});
				
				figureImg.css({
					maxWidth: ww,
					maxHeight: mh,
				});
				
				$( '<img />' )
					.attr( 'src', imgSrc + "?cache=" + Date.now() )
					.load(function() {
						var imgW      = this.width;
						var imgH      = this.height;
						var imgAR     = imgW / imgH;
						var nHimg     = ww / imgAR;
						var sliderAR  = 1.85;
						
						if ( imgAR < sliderAR ) {
							figureImg.css({
								marginTop: '',
								width: 'auto',
								height: mh
							});
						} else {
							figureImg.css({
								marginTop: ( ( mh * 0.5 ) - ( nHimg * 0.5 ) ),
								width: '100%',
								height: 'auto'
							});
						}
						
					});
			});
			
			//FIGCAPTION
			figure.children().filter( 'figcaption' ).each(function() {
				var figCaption = $( this );
				
				figCaption.css({
					margin: '0 auto',
					padding: '1em',
					textAlign: 'left'
				});
				
				figCaption.children().filter( 'h1, h2, h3, h4, h5, h6' ).each(function() {
					var title = $( this );
					
					title.css({
						margin: 0,
						padding: 0,
						fontSize: '1.8em'
					});
				});
			});
			
			//NAVIGATION
			var prev  = slider.children( ':first-child' );
			var next  = slider.children( ':nth-child(2)' );
			
			prev.append( '<div /><div />' );
			next.append( '<div /><div />' );
			
			var prevBefore  = prev.children( ':first-child' );
			var prevAfter   = prev.children( ':nth-child(2)' );
			var nextBefore  = next.children( ':first-child' );
			var nextAfter   = next.children( ':nth-child(2)' );
			
			prev
				.css({
					position: 'absolute',
					top: mh*0.5,
					left: 5,
					marginTop: -26,
					height: 32,
					width: 32,
					'-webkit-border-radius': '1em',
					'-moz-border-radius': '1em',
					borderRadius: '1em',
					backgroundColor: 'rgba(0,0,0,0.2)',
					zIndex: 10
				})
				.mouseover(function() {
					$( this ).css({
						backgroundColor: '#000000'
					});
				})
				.mouseout(function() {
					$( this ).css({
						backgroundColor: 'rgba(0,0,0,0.2)'
					});
				});
			
			prevBefore.css({
				content: '',
				display: 'block',
				height: 4,
				width: '1.6em',
				marginTop: 8,
				marginLeft: 1,
				'-webkit-border-radius': '.5em',
				'-moz-border-radius': '.5em',
				borderRadius: '.5em',
				backgroundColor: '#FFFFFF',
				'-webkit-transform': 'rotate(-30deg)',
				'-moz-transform': 'rotate(-30deg)',
				'-ms-transform': 'rotate(-30deg)',
				'-0-transform': 'rotate(-30deg)',
				transform: 'rotate(-30deg)'
			});
			
			prevAfter.css({
				content: '',
				display: 'block',
				height: 4,
				width: '1.6em',
				marginTop: 8,
				marginLeft: 1,
				'-webkit-border-radius': '.5em',
				'-moz-border-radius': '.5em',
				borderRadius: '.5em',
				backgroundColor: '#FFFFFF',
				'-webkit-transform': 'rotate(30deg)',
				'-moz-transform': 'rotate(30deg)',
				'-ms-transform': 'rotate(30deg)',
				'-0-transform': 'rotate(30deg)',
				transform: 'rotate(30deg)'
			});
			
			next
				.css({
					position: 'absolute',
					top: mh*0.5,
					right: 5,
					marginTop: -26,
					height: 32,
					width: 32,
					'-webkit-border-radius': '1em',
					'-moz-border-radius': '1em',
					borderRadius: '1em',
					backgroundColor: 'rgba(0,0,0,0.2)',
					zIndex: 10
				})
				.mouseover(function() {
					$( this ).css({
						backgroundColor: '#000000'
					});
				})
				.mouseout(function() {
					$( this ).css({
						backgroundColor: 'rgba(0,0,0,0.2)'
					});
				});
			
			nextAfter.css({
				content: '',
				display: 'block',
				height: 4,
				width: '1.6em',
				marginTop: 8,
				marginLeft: 6,
				'-webkit-border-radius': '.5em',
				'-moz-border-radius': '.5em',
				borderRadius: '.5em',
				backgroundColor: '#FFFFFF',
				'-webkit-transform': 'rotate(-30deg)',
				'-moz-transform': 'rotate(-30deg)',
				'-ms-transform': 'rotate(-30deg)',
				'-0-transform': 'rotate(-30deg)',
				transform: 'rotate(-30deg)'
			});
			
			nextBefore.css({
				content: '',
				display: 'block',
				height: 4,
				width: '1.6em',
				marginTop: 8,
				marginLeft: 6,
				'-webkit-border-radius': '.5em',
				'-moz-border-radius': '.5em',
				borderRadius: '.5em',
				backgroundColor: '#FFFFFF',
				'-webkit-transform': 'rotate(30deg)',
				'-moz-transform': 'rotate(30deg)',
				'-ms-transform': 'rotate(30deg)',
				'-0-transform': 'rotate(30deg)',
				transform: 'rotate(30deg)'
			});
			
			//FUNCTIONS
			var currentPos          = 0;
			var speed               = 3000;
			var slideShowInterval;
			
			//TIMER
			slideShowInterval = setInterval( changePosition, speed );
			
			//CONTROLS FUNCTION
			manageNav( currentPos );
			
			next.click(function() {
				currentPos = ( $( this ) ) ? currentPos+1 : currentPos-1;
				manageNav( currentPos );
				clearInterval( slideShowInterval );
				slideShowInterval = setInterval( changePosition, speed );
				moveSlide();
			});
			
			prev.click(function() {
				currentPos = ( $( this ) ) ? currentPos-1 : currentPos+1;
				manageNav( currentPos );
				clearInterval( slideShowInterval );
				slideShowInterval = setInterval( changePosition, speed );
				moveSlide();
			});
			
			
			
			function manageNav( position ) {
				//hide left arrow if position is first slide
				if ( position === 0 ) {
					prev.hide();
				} else {
					prev.show();
				}
				
				//hide right arrow if position is last slide
				if ( position == figureLength -1 ) {
					next.hide();
				} else {
					next.show();
				}
			}
			
			//SLIDESHOW FUNCTIONS
			function changePosition() {
				if ( currentPos == figureLength - 1 ) {
					currentPos = 0;
					manageNav( currentPos );
				} else {
					currentPos++;
					manageNav( currentPos );
				}
				moveSlide();
			}
			
			function moveSlide() {
				var ww = wrapper.width();
				
				figureHolder.animate({
					marginLeft: ww * ( -currentPos )
				});
			}
			
			//RESIZE FIX
			$( window ).resize(function() {
				var ww = wrapper.width();
				var mh = ww / 1.85;
				
				moveSlide();
				
				prev.css({
					top: mh*0.5
				});
				
				next.css({
					top: mh*0.5
				});
				
				slider.css({
					width: ww,
					minHeight: mh,
				});
				
				figure.css({
					width: ww,
				});
				
				figureHolder.css({
					width: figureLength * ww,
				});
				
				//IMG FIX
				var imgWrapper = figure.children( ':first-child' );
				
				imgWrapper
					.css({
						width: '100%',
						height: mh
					})
					.children().each(function() {
						var figureImg  = $( this );
						var imgW       = figureImg.width();
						var imgH       = figureImg.height();
						var imgAR      = imgW / imgH;
						var nHimg      = ww / imgAR;
						
						figureImg.css({
							maxWidth: ww,
							maxHeight: mh
						});
						
						if ( imgAR < 1.85 ) {
							figureImg.css({
								marginTop: '',
								width: 'auto',
								height: mh
							});
						} else {
							figureImg.css({
								marginTop: ( ( mh * 0.5 ) - ( nHimg * 0.5 ) ),
								width: '100%',
								height: 'auto'
							});
						}
					});
			});
			
			return this;
		};
	});
}(jQuery));