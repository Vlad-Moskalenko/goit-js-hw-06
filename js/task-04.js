let counterValue = 0;

const counterValueEl = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]')
const decrementBtn = document.querySelector('[data-action="decrement"]')

incrementBtn.addEventListener('click', onCounterBtnClick);
decrementBtn.addEventListener('click', onCounterBtnClick);

function onCounterBtnClick(e) {
  e.target.dataset.action === 'decrement'? counterValue-- : counterValue++
  counterValueEl.textContent = counterValue;
}

