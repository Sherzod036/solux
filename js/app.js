document.addEventListener('DOMContentLoaded', () => {
	const generateLayouts = []

	for (let i = 0; i < 5; i++) {
		generateLayouts.push(`layout_${i + 1}`)
	}

	const controller = new ScrollMagic.Controller()

	const changeBodyBg = (id, addClass) => {
		new ScrollMagic.Scene({ triggerElement: id })
			.setClassToggle(document.body, addClass)
			.addTo(controller)
	}

	generateLayouts.map(i => changeBodyBg(`#${i}`, i))

})
