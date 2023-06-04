var numbers = JSON.parse(localStorage.getItem("number"));
var users = JSON.parse(localStorage.getItem("details")) || [];
var existingUser = users.find(function(user) {
  return user.numbers === numbers;
});

var otpInputs = document.querySelectorAll('#otp-input');
otpInputs.forEach(function(input, index) {
  input.addEventListener('input', function() {
    if (index === otpInputs.length - 1 && input.value !== '') {
      var enteredOTP = '';
      otpInputs.forEach(function(input) {
        enteredOTP += input.value;
      });
      if (enteredOTP === '1234') {
        if (existingUser) {
          // User is already registered, redirect to home page
          window.location.href = "home.html"
        }else{
          window.location.href = 'signUp.html';
        }
      }else {
        alert('Invalid OTP. Please try again.');
      }
    } else if (input.value !== '') {
      input.nextElementSibling.focus();
    }
  });
  
  input.addEventListener('keydown', function(event) {
    if (event.key === 'Backspace' && input.value === '') {
      input.previousElementSibling.focus();
    }
  });
});