let counterValue = 0;

const counterValueEl = document.querySelector('#value');

counter.addEventListener('click', onCounterBtnClick) // Я ж можу напряму звертатись до елемента через id, id ж у нас унікальний???

function onCounterBtnClick(e) {
  if(e.target.dataset.action === 'decrement') counterValue--
  if(e.target.dataset.action === 'increment') counterValue++
  counterValueEl.textContent = counterValue;
}

