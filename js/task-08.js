const loginFormEl = document.querySelector('.login-form')

loginFormEl.addEventListener('submit', onSubmitForm)

function onSubmitForm(e) {
  let formObj = {}
  const {email, password} = e.target.elements

  e.preventDefault()

  const formData = new FormData(e.currentTarget)

  for (let pair of formData.entries()) {
    if (!pair[1]) {
      alert('Всі поля повинні бути заповнені')
      break;
    }
    else formObj[pair[0]] = pair[1]
  }

  if(email.value && password.value){
    console.table(formObj)
    e.target.reset()
  }
}
