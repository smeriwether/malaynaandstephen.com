function menuClickHandler(event) {
  const mobileMenu = document.querySelector('#mobile-menu');
  const isClosed = mobileMenu.classList.contains("hidden");
  if (isClosed) {
    mobileMenu.classList.remove("hidden");
  } else {
    mobileMenu.classList.add("hidden");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', menuClickHandler);
  }
});