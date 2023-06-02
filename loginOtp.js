var otpFields = document.querySelectorAll('#otp-input');
    var enteredOTP = '';

    otpFields.forEach((field, index) => {
      field.addEventListener('input', (event) => {
        var enteredDigit = event.target.value;
        enteredOTP = updateOTP(enteredOTP, enteredDigit, index);

        if (enteredOTP.length === 4 && enteredOTP === '1234') {
          window.location.href = 'signup.html'; 
        } else if (enteredOTP.length === 4) {
          alert('Wrong OTP. Try again.'); 
        }

        if (enteredDigit.length === 1 && index < otpFields.length - 1) {
          otpFields[index + 1].focus();
        } else if (enteredDigit.length === 0 && index > 0) {
          otpFields[index - 1].focus();
        }
      });
    });

    function updateOTP(existingOTP, digit, index) {
      var otpArray = existingOTP.split('');

      if (digit.length === 0) {
        otpArray.splice(index, 1); 
      } else {
        otpArray[index] = digit; 
      }

      return otpArray.join('');
    }

    function showError(message) {
      var errorElement = document.getElementById('error');
      errorElement.textContent = message;
    }