const nameInput     = document.getElementById('name');
const emailInput    = document.getElementById('email');
const phoneInput    = document.getElementById('phone');
const passwordInput = document.getElementById('password');

const nameError     = document.getElementById('name-error');
const emailError    = document.getElementById('email-error');
const phoneError    = document.getElementById('phone-error');
const passwordError = document.getElementById('password-error');

const submitBtn     = document.getElementById('submitBtn');
const successMsg    = document.getElementById('success');


function showResult(field, errorSpan, message, isValid) {

  if (isValid) {
    field.classList.remove('invalid');
    field.classList.add('valid');
    errorSpan.textContent = '';

  } else {
    field.classList.remove('valid');
    field.classList.add('invalid');
    errorSpan.textContent = message;
  }

  return isValid;
}


function validateName() {

  const value = nameInput.value.trim();

  if (value === '') {
    return showResult(nameInput, nameError, '⚠️ Name is required', false);
  }

  if (value.length < 3) {
    return showResult(nameInput, nameError, '⚠️ Name must be at least 3 characters', false);
  }

  if (/\d/.test(value)) {
    return showResult(nameInput, nameError, '⚠️ Name cannot contain numbers', false);
  }
  return showResult(nameInput, nameError, '', true);
}

function validateEmail() {

  const value = emailInput.value.trim();

  if (value === '') {
    return showResult(emailInput, emailError, '⚠️ Email is required', false);
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(value)) {
    return showResult(emailInput, emailError, '⚠️ Enter a valid email like hello@gmail.com', false);
  }

  return showResult(emailInput, emailError, '', true);
}
function validatePhone() {

  const value = phoneInput.value.trim();

  if (value === '') {
    return showResult(phoneInput, phoneError, '⚠️ Phone number is required', false);
  }
  const phoneRegex = /^\d{10}$/;

  if (!phoneRegex.test(value)) {
    return showResult(phoneInput, phoneError, '⚠️ Enter a valid 10 digit phone number', false);
  }

  return showResult(phoneInput, phoneError, '', true);
}

function validatePassword() {

  const value = passwordInput.value;

  if (value === '') {
    return showResult(passwordInput, passwordError, '⚠️ Password is required', false);
  }

  if (value.length < 8) {
    return showResult(passwordInput, passwordError, '⚠️ Password must be at least 8 characters', false);
  }
  if (!/\d/.test(value)) {
    return showResult(passwordInput, passwordError, '⚠️ Password must contain at least one number', false);
  }
  if (!/[a-zA-Z]/.test(value)) {
    return showResult(passwordInput, passwordError, '⚠️ Password must contain at least one letter', false);
  }

  return showResult(passwordInput, passwordError, '', true);
}


nameInput.addEventListener('blur', validateName);

emailInput.addEventListener('blur', validateEmail);

phoneInput.addEventListener('blur', validatePhone);

passwordInput.addEventListener('blur', validatePassword);

submitBtn.addEventListener('click', function() {
  const isNameValid     = validateName();
  const isEmailValid    = validateEmail();
  const isPhoneValid    = validatePhone();
  const isPasswordValid = validatePassword();

  if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid) {

    successMsg.style.display = 'block';

    successMsg.scrollIntoView({ behavior: 'smooth' });

  } else {

    successMsg.style.display = 'none';

  }

});