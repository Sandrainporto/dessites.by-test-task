const openPopUpBtn = document.querySelector('.btn__call-form');
const clientForm = document.querySelector('.call-form');
const closeFormBtn = document.querySelector('.call-form__close-btn');
const sendFormBtn = document.querySelector('.call-form__btn');

const inputName = document.querySelector('.info__name_input');
const inputPhone = document.querySelector('.info__phone_input');
const errorMessage = document.querySelector('.error-message');

openPopUpBtn.addEventListener('click', () => {
  clientForm.classList.add('active');
})

closeFormBtn.addEventListener('click', () => {
  inputName.value = '';
  inputPhone.value = '';
  clientForm.classList.remove('active')
  errorMessage.classList.remove('active');
})

sendFormBtn.addEventListener('click', (e) => {
  e.preventDefault()

  if (inputName.value == '' || inputPhone.value == '') {
    errorMessage.classList.add('active');
  } else {
    errorMessage.classList.remove('active');
    inputName.value = '';
    inputPhone.value = '';
    clientForm.classList.remove('active')
  }
})