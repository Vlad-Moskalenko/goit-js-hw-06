const inputValidationEl = document.querySelector('#validation-input')

inputValidationEl.addEventListener('blur', validateLengthBlur)

function validateLengthBlur(e) {
  const dataLength = e.currentTarget.dataset.length;

  inputValidationEl.value.length == dataLength? inputValidationEl.className = 'valid': inputValidationEl.className = 'invalid';
}