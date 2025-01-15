console.log('Welcome to the School Project! Academics');
import '../scss/academics.scss';

class Header {
	selectors = {
		root: '[data-js-header]',
		overlay: '[data-js-header-overlay]',
		burgerButton: '[data-js-header-burger-button]',
	};

	stateClasses = {
		isActive: 'is-active',
		isLock: 'is-lock',
	};

	constructor() {
		this.rootElement = document.querySelector(this.selectors.root);
		this.overlayElement = this.rootElement.querySelector(
			this.selectors.overlay
		);
		this.burgerButtonElement = this.rootElement.querySelector(
			this.selectors.burgerButton
		);
		this.bindEvents();
	}

	onBurgerButtonClick = () => {
		this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
		this.overlayElement.classList.toggle(this.stateClasses.isActive);
		document.documentElement.classList.toggle(this.stateClasses.isLock);
	};

	bindEvents() {
		this.burgerButtonElement.addEventListener(
			'click',
			this.onBurgerButtonClick
		);
	}
}

new Header();

document.addEventListener('DOMContentLoaded', () => {
	const svgs = document.querySelectorAll('.icon--svg-header');

	svgs.forEach(svg => {
		svg.classList.add('animate');
	});
});

document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('.header');
	const icons = document.querySelectorAll('.icon--svg-special');
	let lastScrollY = window.scrollY;
	let animatedIcons = new Set();

	window.addEventListener('scroll', () => {
		const currentScrollY = window.scrollY;

		if (currentScrollY > lastScrollY && currentScrollY > 50) {
			header.classList.add('hidden');
		} else if (currentScrollY === 0) {
			header.classList.remove('hidden');
		}

		icons.forEach((icon, index) => {
			if (animatedIcons.has(index)) return;

			const rect = icon.getBoundingClientRect();
			if (rect.top < window.innerHeight && rect.bottom > 0) {
				icon.classList.add('is-visible');
				animatedIcons.add(index);
			}
		});

		lastScrollY = currentScrollY;
	});
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

document.addEventListener('DOMContentLoaded', () => {
	const pictures = document.querySelectorAll(
		'.gallery__carousel-picture-inner picture'
	);
	const btnNext = document.querySelector('.button-carousel-right');
	const btnPrev = document.querySelector('.button-carousel-left');

	let currentIndex = 0;

	function updateCarousel(newIndex) {
		pictures[currentIndex].classList.remove('active');
		currentIndex = (newIndex + pictures.length) % pictures.length; // Циклічне оновлення індекса
		pictures[currentIndex].classList.add('active');
	}

	btnNext.addEventListener('click', () => updateCarousel(currentIndex + 1));
	btnPrev.addEventListener('click', () => updateCarousel(currentIndex - 1));
});
