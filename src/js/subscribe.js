const fidelityButton = document.querySelector('.fidelityButton');
const fidelityForm = document.querySelector('.fidelityForm');
const subscribeButton = document.querySelector('.subscribeButton');
const cancelSubscribeButton = document.querySelector('.cancelSubscribeButton');

if(fidelityButton && subscribeButton) {
  fidelityButton.addEventListener('click', () => {
    fidelityForm.classList.add('activeSubscribe');
    cancelSubscribeButton.classList.add('activeSubscribe');
  })
  cancelSubscribeButton.addEventListener('click', () => {
    fidelityForm.classList.remove('activeSubscribe');
    cancelSubscribeButton.classList.remove('activeSubscribe');
  })
}