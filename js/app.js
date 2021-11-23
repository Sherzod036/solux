$(document).ready(function () {
	const hamb = $('.hamb')
	const menu = $('.menu')
	const menu_close = $('.menu__close')
	hamb.on('click', function (e) {
		e.preventDefault()
		menu.addClass('visible')
	})

	menu_close.on('click', function (e) {
		e.preventDefault()
		menu.removeClass('visible')
	})

	$('.grafik__block-title').css({ cursor: 'pointer' })
	$('.grafik__block-title').on('click', function () {
		$('.grafik__inner').removeClass('d-flex')
		$('.grafik__block-title img').removeClass('rotate')
		$(this).find('img').addClass('rotate')
		$(this).siblings('.grafik__inner').toggleClass('d-flex')
	})

	if ($(window).width() < 1200) {
		$('.menu__list-title').on('click', function () {
			$('.menu__list-links').removeClass('df-fdc')
			$(this).siblings('.menu__list-links').toggleClass('df-fdc')
		})
	}

	$('.slider').owlCarousel({
		items: 1,
		dots: false,
		loop: true,
		nav: true,
		navText: [
			`<svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.1 25.2L0 12.6L19.1 0V25.2Z" fill="#828588"/>
      </svg>`,
			`<svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M-2.25925e-05 -5.12608e-05L19.1 12.6L-2.47955e-05 25.1999L-2.25925e-05 -5.12608e-05Z" fill="#828588"/>
      </svg>`
		]
	})

	$(window).on('scroll', function (e) {
		if ($(this).scrollTop() > 150) {
			$('.header--home').addClass('down')
		} else {
			$('.header--home').removeClass('down')
		}
	})
})

document.addEventListener('DOMContentLoaded', () => {
	const controller = new ScrollMagic.Controller()
	// Tweens
	const tween = TweenMax.to('#lottie', 2, { rotation: -31 })

	new ScrollMagic.Scene({ triggerElement: '#layout_2', offset: -200 })
		.setTween(tween)
		.setClassToggle(document.body, 'layout_2')
		.addTo(controller)

	new ScrollMagic.Scene({ triggerElement: '#layout_3' })
		.setClassToggle(document.body, 'layout_3')
		.addTo(controller)

	new ScrollMagic.Scene({ triggerElement: '#layout_4' })
		.setClassToggle(document.body, 'layout_4')
		.addTo(controller)

	new ScrollMagic.Scene({ triggerElement: '#layout_5', offset: -200 })
		.setClassToggle(document.body, 'layout_5')
		.addTo(controller)
})
