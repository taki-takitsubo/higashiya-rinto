{
	new Splide('.splide--mv', {
		type: 'loop',
		perPage: 1,
		gap: 16,
		padding: '13.734%',
		pagination: true,
		arrows: false,
		mediaQuery: 'min',
		breakpoints: {
			768: {
				arrows: true,
				perPage: 3,
				padding: 0,
				focus: 0,
			}
		}
	}).mount();
}
{
	// IntersectionObserver
	{
		const animateItems = document.querySelectorAll(".js-animate"),
		options = {
			root: null,
			rootMargin: "-20%",
			threshold: 0
		},
		observer = new IntersectionObserver(items => {
			items.forEach(e => {
				e.isIntersecting && (e.target.classList.add("js-animate--active"), observer.unobserve(e.target))
			})
		}, options);
		animateItems.forEach(items => observer.observe(items))
	}
}
{
	document.body.classList.add("loaded");
}