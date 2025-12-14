import { useEffect } from 'react';

const handleScroll = () => {
	const elements = document.querySelectorAll('p, button, header'); // include header if needed
	const windowHeight = window.innerHeight;

	elements.forEach((element) => {
		const rect = element.getBoundingClientRect();
		const elementTop = rect.top;
		const elementBottom = rect.bottom;

		if (elementTop < windowHeight && elementBottom >= 0) {
			element.classList.add('fadeIn');
			element.classList.remove('fadeOut');
		} else {
			element.classList.add('fadeOut');
			element.classList.remove('fadeIn');
		}
	});
};

function FadeEffect() {
	useEffect(() => {
		// Run once after a short delay
		const timeout = setTimeout(() => handleScroll(), 50);

		// Also run repeatedly for new elements (for API-fetched content)
		const interval = setInterval(handleScroll, 200); // every 200ms

		// Add scroll & resize listeners
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleScroll);

		return () => {
			clearTimeout(timeout);
			clearInterval(interval);
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleScroll);
		};
	}, []);

	return null;
}

export { FadeEffect, handleScroll };
