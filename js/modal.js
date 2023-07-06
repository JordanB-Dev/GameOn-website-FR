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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal))

// launch modal form
function launchModal() {
  modalbg.style.display = 'block'
}

modalClose.addEventListener('click', () => {
  modalbg.style.display = 'none'
})

const firstChecker = (value) => {
  console.log(value)
}

const lastChecker = (value) => {
  console.log(value)
}

const emailChecker = (value) => {
  console.log(value)
}

const birthdateChecker = (value) => {
  console.log(value)
}

const quantityChecker = (value) => {
  console.log(value)
}

const locationChecker = (value) => {
  console.log(value)
}

const boxChecker = (value) => {
  console.log(value)
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
