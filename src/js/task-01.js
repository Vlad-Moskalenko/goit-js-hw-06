const categoriesItems = document.querySelectorAll('.item')

console.log(`Number of categories: ${categoriesItems.length}`)

categoriesItems.forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}
Elements: ${item.querySelectorAll('li').length}`)
})