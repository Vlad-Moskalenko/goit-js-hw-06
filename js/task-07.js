const inputFontSizeControlEl = document.querySelector('#font-size-control')

inputFontSizeControlEl.addEventListener('input', changeFontSizeInput)

function changeFontSizeInput(e) {
  text.style.fontSize = `${e.target.value}px`
}