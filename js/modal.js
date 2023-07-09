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

const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"], input[type="email"], input[type="date"], input[type="number"], input[type="checkbox"], input[type="radio"]'
)

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

modalClose.addEventListener('click', () => {
  modalbg.style.display = 'none'
})

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

const addError = (border) => {
  border.classList.add('border-danger')
  border.classList.remove('border-succes')
}

const addSucces = (border) => {
  border.classList.remove('border-danger')
  border.classList.add('border-succes')
}

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

const birthdateChecker = (value) => {
  const border = document.getElementById('birthdate')

  if (!value) {
    errorDisplay('birthdate', 'Vous devez entrer votre date de naissance.')
    addError(border)
    birthdate = null
  } else {
    errorDisplay('birthdate', 'Champ valide', true)
    addSucces(border)
    birthdate = value
  }
}

const quantityChecker = (value) => {
  const border = document.getElementById('quantity')

  if (value.length < 1) {
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

const locationChecker = (value) => {
  if (!value) {
    errorDisplay('radio', 'Vous devez choisir une ville.')
    locations = null
  } else {
    errorDisplay('radio', 'Champ valide', true)
    locations = value
  }
}

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

form.addEventListener('submit', (e) => {
  e.preventDefault()
})

const thanks = () => {
  form.style.display = 'none'
  validForm.style.display = 'flex'
  validMsg.style.display = 'flex'
  validMsg.innerHTML = 'Merci ! Votre réservation a été reçue.'
}

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
