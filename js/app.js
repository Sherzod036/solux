document.addEventListener('DOMContentLoaded', () => {
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

	const controller = new ScrollMagic.Controller()
	// Tweens
	const tween = TweenMax.to('.hero__graphic', 2, { rotation: -43 })

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




})
