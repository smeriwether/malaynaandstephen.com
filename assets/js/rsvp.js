document.addEventListener("DOMContentLoaded", function() {
  const rsvpPage = document.querySelector('#rsvp-page');
  const rsvpForm = document.querySelector('#rsvp-form');
  const rsvpMobilePane1 = document.querySelector('#rsvp-mobile-pane-1');
  const rsvpMobilePane2 = document.querySelector('#rsvp-mobile-pane-2');
  const notDesktopOrTablet = document.body.offsetWidth < 1024;
  if (notDesktopOrTablet && rsvpPage && rsvpForm && rsvpMobilePane1 && rsvpMobilePane2) {
    const formHeight = rsvpForm.offsetHeight;
    const pageHeight = document.body.offsetHeight;
    if (pageHeight > formHeight) {
      rsvpPage.style.minHeight = `${pageHeight}px`;
      rsvpMobilePane1.style.minHeight = `${pageHeight}px`;
      rsvpMobilePane2.style.minHeight = `${pageHeight}px`;
    } else {
      rsvpPage.style.minHeight = `${formHeight}px`;
      rsvpMobilePane1.style.minHeight = `${formHeight}px`;
      rsvpMobilePane2.style.minHeight = `${formHeight}px`;
    }
  }
});