const form= document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const date = document.getElementById('date');
const time = document.getElementById('time');
const quantity = document.getElementById('quantity');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
})

function checkInputs() {
  //get the values from the inputs
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const dateValue = date.value;
  const timeValue = time.value;
  const quantityValue = quantity.value;

  if(fnameValue === '') {
    //show error
    //add error class
    setErrorFor(fname, 'First name cannot be blank');
  } else {
    //add success class
    setSuccessFor(fname);
  }

  if(lnameValue === '') {
    setErrorFor(lname, 'Last name cannot be blank');
  } else {
    setSuccessFor(lname);
  }

  if(emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if(validateEmail(emailValue)){
    setErrorFor(email, 'Email is not valid');
  } else {
    setSuccessFor(email);
  }

  if(dateValue === '') {
    setErrorFor(date);
  } else {
    setSuccessFor(date);
  }

  if(timeValue === '') {
    setErrorFor(time);
  } else {
    setSuccessFor(time);
  }

  if(quantityValue === '') {
    setErrorFor(quantity);
  } else {
    setSuccessFor(quantity);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control

  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement; // .form-control

  formControl.className = 'form-control success';
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

}
