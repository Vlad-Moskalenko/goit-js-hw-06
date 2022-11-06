function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputAmountEl = controls.querySelector('input');
const createBtnEl = document.querySelector('[data-create]')
const destroyBtnEl = document.querySelector('[data-destroy]')

let divSizes = 30;

createBtnEl.addEventListener('click', createBoxes)
destroyBtnEl.addEventListener('click', destroyBoxes)

function createBoxes(){
  let divEl = '';

  for(let i=0; i<inputAmountEl.value; i++) {
    divEl += `<div style = "width:${divSizes}px; height:${divSizes}px; background-color:${getRandomHexColor()}"></div>`
    divSizes+=10;
  }

  boxes.insertAdjacentHTML("beforeend", divEl)
}

function destroyBoxes() {
  divSizes = 30;
  boxes.innerHTML = '';
}