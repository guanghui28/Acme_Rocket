const initApp = () => {
	const menuBtn = document.getElementById("mobile-open-button");

	const mobileMenu = document.getElementById("mobile-menu");

	const toggleMenu = () => {
		mobileMenu.classList.toggle("hidden");
		mobileMenu.classList.toggle("flex");
		menuBtn.classList.toggle("toggle-btn");
	};

	menuBtn.addEventListener("click", toggleMenu);
	mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);
