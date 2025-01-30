const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');
const body = document.querySelector('body');

const toggleModal = () => modal.classList.toggle('is-hidden');
const toggleBody = () => body.classList.toggle('modal-open');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnOpen.addEventListener('click', toggleBody);
modalBtnClose.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleBody);
