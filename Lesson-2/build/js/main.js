const initApp = () => {
	const hamburgerBtn = document.getElementById("hamburger-button");
	const mobileMenu = document.getElementById("mobile-menu");

	const toggleMenu = () => {
		mobileMenu.classList.toggle("hidden");
		mobileMenu.classList.toggle("flex");
	};

	hamburgerBtn.addEventListener("click", toggleMenu);
	mobileMenu.addEventListener("click", toggleMenu);
};
// Want it to start after the content is loaded
document.addEventListener("DOMContentLoaded", initApp);
