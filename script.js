const scroll = new LocomotiveScroll({
	el: document.querySelector('[data-scroll-container]'),
	smooth: true,
});

function toggleMenu() {
	const menu = document.querySelector('.menu-links');
	const icon = document.querySelector('.hamburger-icon');
	menu.classList.toggle('open');
	icon.classList.toggle('open');
}
function toggleTheme() {
	const body = document.body;
	const icon = document.getElementById('theme-icon');
	const iconMobile = document.getElementById('theme-icon-mobile');

	body.classList.toggle('dark-mode');

	const isDark = body.classList.contains('dark-mode');
	localStorage.setItem('theme', isDark ? 'dark' : 'light');

	if (icon) icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
	if (iconMobile) iconMobile.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}

window.addEventListener('DOMContentLoaded', () => {
	const savedTheme = localStorage.getItem('theme');
	if (savedTheme === 'dark') {
		document.body.classList.add('dark-mode');
		const icon = document.getElementById('theme-icon');
		const iconMobile = document.getElementById('theme-icon-mobile');
		if (icon) icon.className = 'fa-solid fa-sun';
		if (iconMobile) iconMobile.className = 'fa-solid fa-sun';
	}
});
