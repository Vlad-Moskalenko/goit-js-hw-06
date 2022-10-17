const inputValidationEl = document.querySelector('#validation-input')

inputValidationEl.addEventListener('blur', validateLengthBlur)

function validateLengthBlur(e) {
  const dataLength = e.currentTarget.dataset.length;

  if(inputValidationEl.value.length == dataLength) {
    inputValidationEl.className = 'valid';
  }
  else {
    inputValidationEl.className = 'invalid';
  }
}