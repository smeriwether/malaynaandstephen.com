document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const isAttendingStr = urlParams.get('is-attending');
  if (isAttendingStr === "Yes") {
    const rsvpYesText = document.querySelector('#rsvp-yes');
    const rsvpNoText = document.querySelector('#rsvp-no');
    rsvpYesText.classList.remove("hidden");
    rsvpNoText.classList.add("hidden");
  } else {
    const rsvpYesText = document.querySelector('#rsvp-yes');
    const rsvpNoText = document.querySelector('#rsvp-no');
    rsvpYesText.classList.add("hidden");
    rsvpNoText.classList.remove("hidden");
  }
});