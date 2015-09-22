Olaussensmetall =
		init: ->
			# Remove no-js class
			$('html').removeClass('no-js')

			return

		initOnLoad: ->

			# Init the dynamic header
			Olaussensmetall.dynamicHeader()

			return

		dynamicHeader: ->
			$(window).scroll (e) ->
				scrolledPixels = $('.header').offset().top

				if scrolledPixels <= 30
					$('.nav-main').css
						'margin-top': 25 - (scrolledPixels / 12)
						'margin-bottom': 20 - (scrolledPixels / 2)
					$('.header').css
						'padding-top': 25 - (scrolledPixels / 1.5)
						'padding-bottom': 25 - (scrolledPixels / 1.5)
				else
					$('.nav-main').css
						'margin-top': '20px'
						'margin-bottom': '5px'
					$('.header').css
						'padding-top': '5px'
						'padding-bottom': '0px'

				if Modernizr.backgroundsize
					startWidth = 350
					endWidth = 272

					startHeight = 51
					endHeight = 40

					if scrolledPixels == 0
						$('.logo-main a').css
							'background-size': startWidth + 'px ' + startHeight + 'px'
							width: startWidth
							height: startHeight
					else
						$('.logo-main a').css
							'background-size': endWidth  + 'px ' + endHeight + 'px'
							width: endWidth
							height: endHeight
			return

# On document ready
$(document).ready Olaussensmetall.init

# On window load
$(window).load Olaussensmetall.initOnLoad