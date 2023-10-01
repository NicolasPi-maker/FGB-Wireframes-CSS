const addProductButtons = document.getElementsByClassName('addProductButton');
const productCountDiv = document.querySelectorAll('.productCount');
const localStoredProductCount = sessionStorage.getItem('productCount');
const alertErrorWrapper = document.getElementById('alertErrorWrapper');
const alertSuccessWrapper = document.getElementById('alertSuccessWrapper');
const getOrderButton = document.querySelector('.getOrderButton');
const foodWrapper = document.getElementsByClassName('foodWrapper');

let productCount = 0;

if(localStoredProductCount && localStoredProductCount > 0) {
  productCount = localStoredProductCount;
}

if(productCountDiv) {
  for(let i = 0; i < productCountDiv.length; i++) {
    productCountDiv[i].innerHTML = `<p>${productCount}</p>`;
  }
}

if(addProductButtons) {
  for(let i = 0; i < addProductButtons.length; i++) {
    addProductButtons[i].addEventListener('click', () => {
      productCount++;
      for(let j = 0; j < productCountDiv.length; j++) {
        productCountDiv[j].innerHTML = `<p>${productCount}</p>`;
      }
      let food = foodWrapper[i];
      playAnimation(productCountDiv, "addProductAnimation");
      playAnimation(food, "addProductWrapperAnimation");
      sessionStorage.setItem('productCount', productCount);
    })
  }
  setTimeout( () => {
    sessionStorage.clear();
  }, 1000);
}

const playAnimation = (domElement, className) => {
  // check if domElement is an array and is not empty
  if(domElement.length > 0) {
    // if true, remove all classes from all elements
    for(let j = 0; j < domElement.length; j++) {
      domElement[j].classList.remove(className);
      setTimeout( () => {
        // then add the class to all elements after 1 second
        domElement[j].classList.add(className);
      },10);
    }
  } else {
    // if false, just remove the class
    domElement.classList.remove(className);
    setTimeout( () => {
      // then add the class on the element after 1 second
      domElement.classList.add(className);
    },10);
  }
};

// Manage click event on order button 
getOrderButton.addEventListener('click', () => {
  // check if basket is empty and send error message if true
  if(sessionStorage.getItem('productCount') <= 0) {
      alertErrorWrapper.innerHTML = alertErrorHtml;
  } else {
    alertSuccessWrapper.innerHTML = alertSuccessHtml;
    // On Success set order button to set product count at 0
    productCount = 0;
    sessionStorage.setItem('productCount', productCount);
    if(productCountDiv) {
      for(let i = 0; i < productCountDiv.length; i++) {
        productCountDiv[i].innerHTML = `<p>${sessionStorage.getItem('productCount')}</p>`;
      }
    }
  }
})

let alertErrorHtml = 
  `
  <div class="mt-5 position-absolute top-0 col-6 alert alert-danger d-flex align-items-center alert-dismissible fade show" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
    <div>
      Votre panier est vide... Ajoutez des produits
    </div>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  `;

let alertSuccessHtml =
  `
  <div class="mt-5 position-absolute top-0 col-6 alert alert-success d-flex align-items-center  alert-dismissible fade show" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
    <div>
      Commande validée avec succès
    </div>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  `


