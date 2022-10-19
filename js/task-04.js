let counterValue = 0;

const counterValueEl = document.querySelector('#value');

counter.addEventListener('click', onCounterBtnClick) // Я ж можу напряму звертатись до елемента через id, id ж у нас унікальний???

function onCounterBtnClick(e) {
  if(e.target.nodeName !== 'BUTTON') return
  e.target.dataset.action === 'decrement'? counterValue-- : counterValue++
  counterValueEl.textContent = counterValue;
}

