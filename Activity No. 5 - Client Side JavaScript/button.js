
document.getElementById("sign-up-btn").onclick = function () {
    location.href = "Brandon's Store Signup.html";
};

const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password1');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
  
});

function checkInputs(){
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(emailValue === '' && passwordValue === '') {
		setErrorFor(email, 'Email Address cannot be blank');
        setErrorFor(password, 'Password cannot be blank');
        alert("Please use Invalid Email Address or Password!");
	}else if(emailValue !== '' && passwordValue ===''){
        setErrorFor(password, 'Password cannot be blank');
    }else if(emailValue === '' && passwordValue !== ''){
        setErrorFor(email, 'Email Address cannot be blank');
    }
    else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	}else {
		setSuccessFor(email);
        setSuccessFor(password);
        alert("Successfully Login!");
        location.href = "Brandon's Store MainDashboard.html";
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