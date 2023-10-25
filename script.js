const orderCallBtn = document.querySelector('.btn__call-form');
const callForm = document.querySelector('.call-form');
const closeFormBtn = document.querySelector('.call-form__close-btn');
const orederCallFormBtn = document.querySelector('.call-form__btn');






orderCallBtn.addEventListener('click', () => {
  callForm.classList.remove('hidden')
})

closeFormBtn.addEventListener('click', () => {
  callForm.classList.add('hidden')
})

orederCallFormBtn.addEventListener('click', (e) => {
  const inputName = document.querySelector('.info__name_input');
  const inputPhone = document.querySelector('.info__phone_input');
  const errorMessage = document.querySelector('.error-message');


  e.preventDefault()
  if (inputName.value == '' || inputPhone.value == '') {
    errorMessage.classList.add('active');
  } else {
    errorMessage.classList.remove('active');

    callForm.classList.add('hidden')

  }
})