function editNav() {
  var x = document.getElementById('myTopnav')
  if (x.className === 'topnav') {
    x.className += ' responsive'
  } else {
    x.className = 'topnav'
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground')
const modalBtn = document.querySelectorAll('.modal-btn')
const formData = document.querySelectorAll('.formData')
const modalClose = document.querySelector('.close')

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

const firstChecker = (value) => {
  if (value.length < 2 || value.length > 20) {
    errorDisplay(
      'first',
      'Veuillez entrer 2 caractères ou plus pour le champ prénom.'
    )
    firstName = null
  } else if (!value.match(regexText)) {
    errorDisplay(
      'first',
      'Le prénom ne doit pas contenir de caractères spéciaux'
    )
    firstName = null
  } else {
    errorDisplay('first', 'Champ valide', true)
    firstName = value
  }
}

const lastChecker = (value) => {
  if (value.length < 2 || value.length > 20) {
    errorDisplay(
      'last',
      'Veuillez entrer 2 caractères ou plus pour le champ du nom.'
    )
    lastName = null
  } else if (!value.match(regexText)) {
    errorDisplay('last', 'Le nom ne doit pas contenir de caractères spéciaux')
    lastName = null
  } else {
    errorDisplay('last', 'Champ valide', true)
    lastName = value
  }
}

const emailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay('email', " L'adresse électronique n'est pas valide")
    email = null
  } else {
    errorDisplay('email', 'Champ valide', true)
    email = value
  }
}

const birthdateChecker = (value) => {
  if (!value) {
    errorDisplay('birthdate', 'Vous devez entrer votre date de naissance.')
    birthdate = null
    console.log(value)
  } else {
    errorDisplay('birthdate', 'Champ valide', true)
    birthdate = value
    console.log(value)
  }
}

const quantityChecker = (value) => {
  if (value.length < 1 || value.length > 2) {
    errorDisplay('quantity', 'Merci d`indiquer le nombre de tournois.')
    quantity = null
  } else {
    errorDisplay('quantity', 'Champ valide', true)
    quantity = value
  }
}

const locationChecker = (value) => {
  if (!value) {
    errorDisplay('radio', 'Vous devez choisir une ville.')
    locations = null
    console.log(value)
  } else {
    errorDisplay('radio', 'Champ valide', true)
    locations = value
    console.log(value)
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
    console.log(value)
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
