const productsWrapper = document.getElementsByClassName('productsWrapper');
const foodButtons = document.getElementsByClassName('foodButton');
const carouselPreviousButton = document.getElementById('carouselPreviousButton');
const carouselNextButton = document.getElementById('carouselNextButton');

const getCurrentIndex = (array) => {
  for(let i = 0; i < foodButtons.length; i++) {
    if(foodButtons[i].classList.contains('activeButton')) {
      return array.indexOf(foodButtons[i].getAttribute('value'));
    }
  }
}

if(foodButtons) {
  for(let i = 0; i < foodButtons.length; i++) {
    foodButtons[i].addEventListener('click', () => {
      let selectedProduct = foodButtons[i].getAttribute('value');
      for(let j = 0; j < productsWrapper.length; j++) {
        foodButtons[j].classList.remove('activeButton');
        productsWrapper[j].classList.remove('active');
        if(productsWrapper[j].classList.contains(selectedProduct)) {
          productsWrapper[j].classList.add('active');
        }
      }
      foodButtons[i].classList.add('activeButton');
    })
  }
}

if(foodButtons) {
  let foodTypesArray = [];
  for(let i = 0; i < foodButtons.length; i++) {
    foodTypesArray.push(foodButtons[i].getAttribute('value'));
  }
  carouselNextButton.addEventListener('click', () => {
    let index = getCurrentIndex(foodTypesArray);
    if(index >= foodTypesArray.length - 1) {
      index = 0;
    } else {
      index = getCurrentIndex(foodTypesArray);
      index++;
    }
    playAnimation(carouselNextButton, "carouselButtonActiveAnimation");
    activeStyleSwapper(foodTypesArray, index);
  })
  carouselPreviousButton.addEventListener('click', () => {
    let index = getCurrentIndex(foodTypesArray);
    if(index <= 0) {
      index = foodTypesArray.length - 1;
    } else {
      index = getCurrentIndex(foodTypesArray);
      index--;
    }
    playAnimation(carouselPreviousButton, "carouselButtonActiveAnimation");
    activeStyleSwapper(foodTypesArray, index);
  })
}

const activeStyleSwapper = (array, index) => {
  for(let j = 0; j < productsWrapper.length; j++) {
    foodButtons[j].classList.remove('activeButton');
    productsWrapper[j].classList.remove('active');
    if(productsWrapper[j].classList.contains(array[index])) {
      productsWrapper[j].classList.add('active');
      foodButtons[j].classList.add('activeButton');
    }
  }
}

const playAnimation = (domElement, className)  => {
    domElement.classList.remove(className);
    setTimeout( () => {
      domElement.classList.add(className);
    },10);
}


