const shoppingList = [
    'mouse',
    'tastiera',
    'monitor',
    'motherboard',
    'gpu',
    'cpu'
  ];
  
  
  
  const shoppingListElement = document.querySelector('.shopping_list');
  console.log(shoppingListElement);
  
  let i = 0;
  while (i < shoppingList.length){
    const itemElement = shoppingList[i];
    const liElement = `<li>${itemElement}</li>`;
    shoppingListElement.insertAdjacentHTML('beforeend', liElement);
    i++;
  }
  