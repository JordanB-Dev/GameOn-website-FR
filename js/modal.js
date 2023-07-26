function editNav() {
  var x = document.getElementById('myTopnav')
  if (x.className === 'topnav') {
    x.className += ' responsive'
  } else {
    x.className = 'topnav'
  }
}

// DOM Elements
const form = document.querySelector('form')
const modalbg = document.querySelector('.bground')
const modalBtn = document.querySelectorAll('.modal-btn')
const formData = document.querySelectorAll('.formData')
const modalClose = document.querySelector('.close')
const validForm = document.querySelector('.validForm')
const validMsg = document.getElementById('validMsg')
const btnThanks = document.getElementById('btnValid')

// Selects the form inputs
const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"], input[type="email"], input[type="date"], input[type="number"], input[type="checkbox"], input[type="radio"]'
)

// Variable function
let firstName,
  lastName,
  email,
  birthdate,
  quantity,
  locations,
  checkBox = true

const regexText = /^[a-záàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ\s-]{1,31}$/i

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal))

// launch modal form
function launchModal() {
  modalbg.style.display = 'block'
}

// Close modal form
modalClose.addEventListener('click', () => {
  modalbg.style.display = 'none'
})

// Function display error
const errorDisplay = (tag, message, valid) => {
  const span = document.querySelector('.' + tag + '-container > span')

  if (!valid) {
    span.classList.add('error')
    span.textContent = message
  } else {
    span.classList.remove('error')
    span.classList.add('succes')
    span.textContent = message
  }
}

// Function add border input error
const addError = (border) => {
  border.classList.add('border-danger')
  border.classList.remove('border-succes')
}

// Function add border input succes
const addSucces = (border) => {
  border.classList.remove('border-danger')
  border.classList.add('border-succes')
}

// Function controler input first
const firstChecker = (value) => {
  const border = document.getElementById('first')

  if (value.length < 2 || value.length > 20) {
    errorDisplay(
      'first',
      'Veuillez entrer 2 caractères ou plus pour le champ prénom.'
    )
    addError(border)
    firstName = null
  } else if (!value.match(regexText)) {
    errorDisplay(
      'first',
      'Le prénom ne doit pas contenir de caractères spéciaux'
    )
    addError(border)
    firstName = null
  } else {
    errorDisplay('first', 'Champ valide', true)
    addSucces(border)
    firstName = value
  }
}

// Function controler input last
const lastChecker = (value) => {
  const border = document.getElementById('last')

  if (value.length < 2 || value.length > 20) {
    errorDisplay(
      'last',
      'Veuillez entrer 2 caractères ou plus pour le champ du nom.'
    )
    addError(border)
    lastName = null
  } else if (!value.match(regexText)) {
    errorDisplay('last', 'Le nom ne doit pas contenir de caractères spéciaux')
    addError(border)
    lastName = null
  } else {
    errorDisplay('last', 'Champ valide', true)
    addSucces(border)
    lastName = value
  }
}

// Function controler input email
const emailChecker = (value) => {
  const border = document.getElementById('email')

  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay('email', " L'adresse électronique n'est pas valide")
    addError(border)
    email = null
  } else {
    errorDisplay('email', 'Champ valide', true)
    addSucces(border)
    email = value
  }
}

// Function controler input birthdate
const birthdateChecker = (value) => {
  const border = document.getElementById('birthdate')

  if (
    !value.match(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/)
  ) {
    errorDisplay('birthdate', 'Vous devez entrer votre date de naissance.')
    addError(border)
    birthdate = null
  } else {
    errorDisplay('birthdate', 'Champ valide', true)
    addSucces(border)
    birthdate = value
  }
}

// Function controler input quantity
const quantityChecker = (value) => {
  const border = document.getElementById('quantity')

  if (!value.match(/^\d+$/)) {
    errorDisplay('quantity', 'Merci d`indiquer le nombre de tournois.')
    addError(border)
    quantity = null
  } else if (value.length > 2) {
    errorDisplay('quantity', 'Nous n`avons pas organisé autant de tournois !')
    addError(border)
    quantity = null
  } else {
    errorDisplay('quantity', 'Champ valide', true)
    addSucces(border)
    quantity = value
  }
}

// Function controler input location
const locationChecker = (value) => {
  if (!value) {
    errorDisplay('radio', 'Vous devez choisir une ville.')
    locations = null
  } else {
    errorDisplay('radio', 'Champ valide', true)
    locations = value
  }
}

// Function controler input condition
const boxChecker = (value) => {
  if (value !== true) {
    errorDisplay(
      'checkbox',
      'Vous devez vérifier que vous acceptez les termes et conditions.'
    )
    checkBox = null
  } else {
    errorDisplay('checkbox', 'Champ valide', true)
    checkBox = value
  }
}

// Trigger function when typing in an input
inputs.forEach((input) => {
  input.addEventListener('input', (e) => {
    switch (e.target.name) {
      case 'first':
        firstChecker(e.target.value)
        break
      case 'last':
        lastChecker(e.target.value)
        break
      case 'email':
        emailChecker(e.target.value)
        break
      case 'birthdate':
        birthdateChecker(e.target.value)
        break
      case 'quantity':
        quantityChecker(e.target.value)
        break
      case 'location':
        locationChecker(e.target.value)
        break
      case 'checkbox':
        boxChecker(e.target.checked)
        break
      default:
        nul
    }
  })
})

// KeyCode Escade
const keyCodeEscape = (e) => {
  if (e.keyCode === 27) {
    modalbg.style.display = 'none'
  }
}

document.addEventListener('keydown', keyCodeEscape)

form.addEventListener('submit', (e) => {
  e.preventDefault()
})

// Function display modal thanks
const thanks = () => {
  form.style.display = 'none'
  validForm.style.display = 'flex'
  validMsg.style.display = 'flex'
  validMsg.innerHTML = 'Merci ! Votre réservation a été reçue.'
}

// Function validate form
const validate = () => {
  if (
    firstName &&
    lastName &&
    email &&
    birthdate &&
    quantity &&
    locations &&
    checkBox
  ) {
    const data = {
      firstName,
      lastName,
      email,
      birthdate,
      quantity,
      locations,
      checkBox,
    }
    console.log(data)
    thanks()
  } else {
    alert('veuillez remplir correctement les champs')
  }
}

btnThanks.addEventListener('click', () => {
  window.location.reload()
})
