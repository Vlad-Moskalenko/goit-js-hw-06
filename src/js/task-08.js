const loginFormEl = document.querySelector('.login-form')

loginFormEl.addEventListener('submit', onSubmitForm)

function onSubmitForm(e) {
  let formObj = {}

  e.preventDefault()

  const formData = new FormData(e.currentTarget)

  formData.forEach((value, name) => !value? alert('Всі поля повинні бути заповнені') : formObj[name] = value)

  if(e.currentTarget.elements.email.value && e.currentTarget.elements.password.value){
    console.table(formObj)
    e.currentTarget.reset()
  }
}
