// Get elements
const form = document.getElementById('contactForm');
const popup = document.getElementById('popup');
const blurWrapper = document.getElementById('blurWrapper');

// On form submit
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Stop default form redirect

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      // Show popup
      popup.style.display = 'block';

      // Fade the background (blurWrapper includes Why Choose Us + Contact + Footer)
      blurWrapper.classList.add('fade-opacity');

      // Clear form
      form.reset();

      // Double safety: prevent accidental redirect
      history.pushState(null, null, window.location.href);
    } else {
      alert("❌ Something went wrong. Try again!");
    }
  }).catch(error => {
    alert("❌ Network error!");
  });
});

// Close popup
function closePopup() {
  popup.style.display = 'none';

  // Remove blur
  blurWrapper.classList.remove('fade-opacity');
}
