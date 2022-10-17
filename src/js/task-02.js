const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItemsList = ingredients.map(ingredient => {

  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add('item');

  return ingredientItem
})

document.querySelector('#ingredients').append(...ingredientsItemsList)

