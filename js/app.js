$(document).ready(function() {
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
      </svg>`]
  })
})


document.addEventListener('DOMContentLoaded', () => {
	let hamb = document.querySelector('.hamb')
	let menu = document.querySelector('.menu')
	let menu_close = document.querySelector('.menu__close')

	if (hamb) {
		hamb.addEventListener('click', (e) => {
			e.preventDefault()
			menu.classList.add('visible')
		})

		menu_close.addEventListener('click', (e) => {
			e.preventDefault()
			menu.classList.remove('visible')
		})
	}

	// onceFunc()
	// const generateLayouts = []

	// for (let i = 0; i < 5; i++) {
	// 	generateLayouts.push(`layout_${i + 1}`)
	// }

	// const changeBodyBg = (id, addClass, tween) => {
	// 	new ScrollMagic.Scene({ triggerElement: id })
	// 		.setTween(tween)
	// 		.setClassToggle(document.body, addClass)
	// 		.addTo(controller)
	// }

	// generateLayouts.map(i => changeBodyBg(`#${i}`, i, tween))

	// function onceFunc() {
	// 	TweenMax.fromTo('.hero__graphic', 2, { rotation: -43 }, { rotation: 0 })
	// }

	const controller = new ScrollMagic.Controller()
	// Tweens
	const tween = TweenMax.to('#lottie', 2, { rotation: -31 })

	new ScrollMagic.Scene({ triggerElement: '#layout_2' })
		.setTween(tween)
		.setClassToggle(document.body, 'layout_2')
		.addTo(controller)

	new ScrollMagic.Scene({ triggerElement: '#layout_3' })
		.setClassToggle(document.body, 'layout_3')
		.addTo(controller)

	new ScrollMagic.Scene({ triggerElement: '#layout_4' })
		.setClassToggle(document.body, 'layout_4')
		.addTo(controller)

	new ScrollMagic.Scene({ triggerElement: '#layout_5' })
		.setClassToggle(document.body, 'layout_5')
		.addTo(controller)
	new ScrollMagic.Scene({ triggerElement: '#layout_6' })
		.setClassToggle(document.body, 'layout_6')
		.addTo(controller)
})
