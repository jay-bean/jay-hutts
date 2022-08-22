/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

})(jQuery);

const dropIn = document.getElementById("dropin");

dropIn.addEventListener("mouseenter", () => {
  document.getElementById("dropin-links").style.display = "block"
})

dropIn.addEventListener("mouseleave", () => {
  document.getElementById("dropin-links").style.display = "none"
})

const taskRat = document.getElementById("taskrat");

taskRat.addEventListener("mouseenter", () => {
  document.getElementById("taskrat-links").style.display = "block"
})

taskRat.addEventListener("mouseleave", () => {
  document.getElementById("taskrat-links").style.display = "none"
})

const airbode = document.getElementById("airbode");

airbode.addEventListener("mouseenter", () => {
  document.getElementById("airbode-links").style.display = "block"
})

airbode.addEventListener("mouseleave", () => {
  document.getElementById("airbode-links").style.display = "none"
})

const renderRoutes = document.getElementById("render-routes");

renderRoutes.addEventListener("mouseenter", () => {
  document.getElementById("render-routes-links").style.display = "block"
})

renderRoutes.addEventListener("mouseleave", () => {
  document.getElementById("render-routes-links").style.display = "none"
})
