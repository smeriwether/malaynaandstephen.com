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

  setDaysAway();
});

function setDaysAway() {
  const weddingDate = new Date(2024, 4, 25);
  const today = new Date();
  const daysAway = Math.round(Math.abs(weddingDate - today) / (24 * 60 * 60 * 1000));
  if (daysAway === 0) {
    const daysAwaySpan = document.querySelector('#wedding-date');
    daysAwaySpan.innerHTML = "Today's the day!";
  } else if (today > weddingDate) {
    const daysAwaySpan = document.querySelector('#wedding-date');
    daysAwaySpan.innerHTML = `We're married!`;
  } else {
    const daysAwaySpan = document.querySelector('#days-away');
    daysAwaySpan.innerHTML = `${daysAway} days away`;
  }
}