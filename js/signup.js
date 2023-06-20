function validateInput(input) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (input.value === '') {
      input.classList.remove('success');
      input.classList.add('error');
    }else {
      input.classList.remove('error');
      input.classList.add('success');
    }
  }

function validateEmail(email) {
    // Regular expression for validating email addresses
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function reg() {
    event.preventDefault();
  
    var username = document.querySelector('#usr');
    var password = document.querySelector('#loginPassword');
    var email = document.querySelector('#loginEmail');
  
    // Remove previous error classes from all input fields
    username.classList.remove('error');
    password.classList.remove('error');
    email.classList.remove('error');
  
    var hasError = false; // Flag variable to track error status
  
    if (username.value === '') {
      username.classList.remove('success');
      username.classList.add('error');
      username.placeholder = 'Please input a username';
      username.value = '';
      hasError = true; // Set the flag if an error is found
    }
    if (email.value === '') {
      email.classList.remove('success');
      email.classList.add('error');
      email.placeholder = 'Please input an email';
      email.value = '';
      hasError = true; // Set the flag if an error is found
    }
    if (password.value === '') {
      password.classList.remove('success');
      password.classList.add('error');
      password.placeholder = 'Please input a password';
      password.value = '';
      hasError = true; // Set the flag if an error is found
    } else if (password.value.length < 5 ) {
      password.classList.remove('success');
      password.classList.add('error');
      password.value = '';
      password.placeholder = 'Password must have 5 characters long';
      hasError = true;
    }
    if (!validateEmail(email.value)) {
      email.classList.add('error');
      email.classList.remove('success');
      email.value = '';
      email.placeholder = 'Please input a valid email';
      hasError = true; // Set the flag if an error is found
    } 
    if (!terms.checked) {
      alert('Please agree to the terms and conditions!');
      hasError = true;
    }
    if (!hasError) { // Only proceed if no errors were detected
      var user = {
        username: username.value,
        password: password.value,
        email: email.value
      };
  
      var json = JSON.stringify(user);
  
      localStorage.setItem('user', json);
      console.log('User Added');
      alert('You are now registered! Please proceed to Login');
  
      username.value = '';
      password.value = '';
      email.value = '';
      terms.checked = false;
  
      // Remove the error class and reset the placeholder after successful registration
      username.classList.remove('error');
      password.classList.remove('error');
      email.classList.remove('error');
      username.placeholder = 'Username';
      password.placeholder = 'Password';
      email.placeholder = 'Email';
    }
  }


  function auth() {
    event.preventDefault();
    var username = document.querySelector('#loginEmail');
    var password = document.querySelector('#loginPassword');
    var user = localStorage.getItem('user');
    var key = JSON.parse(user);
  
    // Remove previous error classes from input fields
    username.classList.remove('error');
    password.classList.remove('error');
  
    if (username.value === '' && password.value === '') {
      alert('Please input what is required!');
      username.classList.add('error');
      password.classList.add('error');
      username.placeholder = 'Please input your email';
      password.placeholder = 'Please input your password';
    } else if (
      (username.value === key.username || username.value === key['email']) &&
      password.value === key.password
    ) {
      window.location.assign('home.html');
      alert('Successfully Login!');
      document.getElementById("user").textContent = key.username;
    } else if (username.value === 'admin@gmail.com' && password.value === 'admin123') {
      window.location.assign('home.html');
      alert('Successfully Login as Admin!');
    } else {
      alert('User Not Found!');
      username.classList.add('error');
      password.classList.add('error');
    }
  }
  