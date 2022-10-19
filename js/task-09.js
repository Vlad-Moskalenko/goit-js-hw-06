function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color')

btnChangeColor.addEventListener('click', onChangeColorBtn)

function onChangeColorBtn() {
  const randomColor = getRandomHexColor()

  document.body.style.backgroundColor = randomColor;

  document.querySelector('.color').textContent = randomColor;
}