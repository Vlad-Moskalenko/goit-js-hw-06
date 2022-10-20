function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputAmountEl = controls.querySelector('input');
const createBtnEl = document.querySelector('[data-create]')
const destroyBtnEl = document.querySelector('[data-destroy]')

let divSizes = 20;

createBtnEl.addEventListener('click', () => createBoxes(inputAmountEl.value))
destroyBtnEl.addEventListener('click', destroyBoxes)

function createBoxes(amount){
  let divElArr = [];

  for(let i=0; i<amount; i++) {
    divSizes+=10;

    const divEl = document.createElement('div');
    divEl.style.width = divSizes + 'px';
    divEl.style.height = divSizes + 'px';
    divEl.style.backgroundColor = getRandomHexColor();

    divElArr.push(divEl)
  }

  boxes.append(...divElArr)
}

function destroyBoxes() {
  divSizes = 20
  boxes.innerHTML = ''
}