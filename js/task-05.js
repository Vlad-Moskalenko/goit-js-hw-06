const nameInputEl = document.getElementById('name-input') // Чи є якась різниця в продуктивності між підходом по пошуку будь-якого селектора та підходом по пошуку елемента конкретно по айді, тегу, класу??? чи все одно буде перебиратись все дерево і кожен елемент незалежно чи має він айді чи ні???
nameInputEl.addEventListener('input', showInputValue)

function showInputValue(e) {
  const nameOutputEl = document.querySelector('#name-output')
  nameOutputEl.textContent = e.target.value || 'Anonymous';
}
