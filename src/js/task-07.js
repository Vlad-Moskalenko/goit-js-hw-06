const inputFontSizeControlEl = document.querySelector('#font-size-control')

inputFontSizeControlEl.addEventListener('input', changeFontSizeInput)

function changeFontSizeInput() {
  text.style.fontSize = `${inputFontSizeControlEl.value}px`
}