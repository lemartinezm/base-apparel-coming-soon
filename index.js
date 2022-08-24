const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const error = document.getElementById('error-message');
const iconError = document.getElementById('icon-error');

form.addEventListener('submit', (ev) => {
  if (!emailInput.validity.valid) {
    ev.preventDefault();
    showError();
  };
})

emailInput.addEventListener('blur', (ev) => {
  if (emailInput.validity.valid) {
    iconError.removeAttribute('style');
    error.removeAttribute('style');
    emailInput.removeAttribute('style');
  } else {
    showError();
  }
})

function showError() {
  if (emailInput.validity.valueMissing) {
    error.innerText = 'Please insert an email'
  } else if (emailInput.validity.typeMismatch) {
    error.innerText = 'Please provide a valid email'
  }
  emailInput.style.borderColor = 'hsl(0, 93%, 68%)';
  emailInput.style.padding = '12px 112px 12px 24px';
  iconError.style.opacity = 1;
  error.style.opacity = 1;
}