// For click checkbox

function ckChange(ckType){
  var ckName = document.getElementsByName(ckType.name);
  var checked = document.getElementById(ckType.id);

  if (checked.checked) {
    for(var i=0; i < ckName.length; i++){

        if(!ckName[i].checked){
            ckName[i].disabled = true;
        }else{
            ckName[i].disabled = false;
        }
    } 
  }
  else {
    for(var i=0; i < ckName.length; i++){
      ckName[i].disabled = false;
    } 
  }   
}

// For Login Button
document.getElementById("login-btn").onclick = function () {
  location.href = "Brandon's Store Login.html";
};


const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password1');
const password2 = document.getElementById('password2');
const birth = document.getElementById('birth');
const country = document.getElementById('country');
const select = document.getElementById('selects');
const hide = document.getElementById('hide');
const phone = document.getElementById('Phone');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
  
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
  	const birthValue = birth.value.trim();
  	const selectValue = select.value.trim();
  	const hideValue = hide.value.trim();
	const phoneValue = phone.value.trim();
  
	
	if(usernameValue === '' && emailValue === '' && passwordValue === '' && password2Value === '' && birthValue === '' && selectValue === hideValue && phoneValue === '') {
		setErrorFor(username, 'Full Name cannot be blank');
		setErrorFor(email, 'Email Address cannot be blank');
		setErrorFor(password, 'Password cannot be blank');
		setErrorFor(password2, 'Confirm Password cannot be blank');
		setErrorFor(birth, 'Birthdate cannot be blank');
		setErrorFor(select,'Country cannot be blank');
		setErrorFor(phone, 'Phone number cannot be blank');
	}else if(usernameValue !== '' && emailValue === '' && passwordValue === '' && password2Value === '' && birthValue === '' && selectValue === hideValue && phoneValue === ''){
		setErrorFor(email, 'Email Address cannot be blank');
		setErrorFor(password, 'Password cannot be blank');
		setErrorFor(password2, 'Confirm Password cannot be blank');
		setErrorFor(birth, 'Birthdate cannot be blank');
		setErrorFors(select,'Country cannot be blank');
		setErrorFor(phone, 'Phone number cannot be blank');
	}else if(usernameValue !== '' && emailValue !== '' && passwordValue === '' && password2Value === '' && birthValue === '' && selectValue === hideValue && phoneValue === ''){
		setErrorFor(password, 'Password cannot be blank');
		setErrorFor(password2, 'Confirm Password cannot be blank');
		setErrorFor(birth, 'Birthdate cannot be blank');
		setErrorFor(select,'Country cannot be blank');
		setErrorFor(phone, 'Phone number cannot be blank');
	}else if(usernameValue !== '' && emailValue !== '' && passwordValue !== '' && password2Value === '' && birthValue === '' && selectValue === hideValue && phoneValue === ''){
		setErrorFor(password2, 'Confirm Password cannot be blank');
		setErrorFor(birth, 'Birthdate cannot be blank');
		setErrorFor(select,'Country cannot be blank');
		setErrorFor(phone, 'Phone number cannot be blank');
	}else if(usernameValue !== '' && emailValue !== '' && passwordValue !== '' && password2Value !== '' && birthValue === '' && selectValue === hideValue && phoneValue === ''){
		setErrorFor(birth, 'Birthdate cannot be blank');
		setErrorFor(select,'Country cannot be blank');
		setErrorFor(phone, 'Phone number cannot be blank');
	}else if(usernameValue !== '' && emailValue !== '' && passwordValue !== '' && password2Value !== '' && birthValue !== '' && selectValue === hideValue && phoneValue === ''){
		setErrorFor(select,'Country cannot be blank');
		setErrorFor(phone, 'Phone number cannot be blank');
	}else if(usernameValue !== '' && emailValue !== '' && passwordValue !== '' && password2Value !== '' && birthValue !== '' && selectValue !== hideValue && phoneValue === ''){
		setErrorFor(phone, 'Phone number cannot be blank');
	}else if (!isEmail(emailValue) || passwordValue !== password2Value) {
		setErrorFor(email, 'Not a valid email');
		setErrorFor(password2, 'Passwords does not match');
	}else {
		setSuccessFor(username);
		setSuccessFor(email);
		setSuccessFor(password);
		setSuccessFor(password2);
		setSuccessFor(birth);
		setSuccessFor(select);
		setSuccessFor(phone);
		alert("Successfully Sign up!");
	}
}
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



