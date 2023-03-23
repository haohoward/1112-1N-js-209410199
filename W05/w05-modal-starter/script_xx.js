'use strict';

const modal = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const text = document.querySelectorAll('p');
console.log('modal', modal);
console.log('show-modal', btnsOpenModal);
console.log('close-modal', btnCloseModal);

const closeModal = (i) => {
  modal[i].classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = (i) => {
  console.log('test');
  modal[i].classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', (e) => openModal(i));
  btnCloseModal[i].addEventListener('click', (e) => closeModal(i));
  text[i].innerHTML = `modal ${i}`;
}

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
