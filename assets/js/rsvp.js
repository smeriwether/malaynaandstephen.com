document.addEventListener("DOMContentLoaded", function() {
  setRsvpBackgroundHeight();
  removeRsvpIfAfterRsvpDate();
});

function removeRsvpIfAfterRsvpDate() {
  const rsvpDate = new Date(2024, 3, 16);
  const today = new Date();
  const daysAway = Math.round(Math.abs(rsvpDate - today) / (24 * 60 * 60 * 1000));

  if (daysAway < 0 || today > rsvpDate) {
    const rsvpDetails = document.querySelector('#rsvp-details');
    const weddingDetails = document.querySelector('#wedding-details');
    const rsvpForm = document.querySelector('#rsvp-form');
    rsvpForm.innerHTML = "<div class='text-center'><h2>RSVPs are now closed.</h2></div>";
    rsvpDetails.classList.add("hidden");
    weddingDetails.classList.add("hidden");
  }
}

function setRsvpBackgroundHeight() {
  const rsvpPage = document.querySelector('#rsvp-page');
  const rsvpForm = document.querySelector('#rsvp-form-pane');
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
}

function attending(isAttending) {
  if (isAttending) {
    const attendingQuestionInput = document.querySelector('#attending-question-inputs');
    const attendingYesFormInputs = document.querySelector('#attending-yes-form-inputs');
    const attendingNoFormInputs = document.querySelector('#attending-no-form-inputs');
    attendingQuestionInput.classList.add("hidden");
    attendingYesFormInputs.classList.remove("hidden");
    attendingNoFormInputs.remove();
    setRsvpBackgroundHeight();
  } else {
    const attendingQuestionInput = document.querySelector('#attending-question-inputs');
    const attendingYesFormInputs = document.querySelector('#attending-yes-form-inputs');
    const attendingNoFormInputs = document.querySelector('#attending-no-form-inputs');
    attendingQuestionInput.classList.add("hidden");
    attendingNoFormInputs.classList.remove("hidden");
    attendingYesFormInputs.remove();
    setRsvpBackgroundHeight();
  }
}