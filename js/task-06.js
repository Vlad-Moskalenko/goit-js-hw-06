const inputValidationEl = document.querySelector('#validation-input')

inputValidationEl.addEventListener('blur', validateLengthBlur)

function validateLengthBlur(e) {
  const {dataset, value} = e.target;
 value.length == dataset.length? e.target.className = 'valid': e.target.className = 'invalid';
}