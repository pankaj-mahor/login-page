const errorDiv = document.querySelector('.error');
const closeDiv = document.querySelector('.close');
const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const errorInfo = document.querySelector('#infoerror');

closeDiv.addEventListener('click' , function(){
    errorDiv.classList.add('hide');
    errorDiv.classList.remove('show');
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    validateForm([email , password])
});

