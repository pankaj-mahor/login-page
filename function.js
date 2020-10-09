//Check Required Field
function checkRequired(inputArray) {
    var isValid = true;
    inputArray.forEach((input)=> {
        if(input.value.trim() === '') {
            errorDiv.classList.remove('hide');
            errorDiv.classList.add('show');
            errorInfo.textContent = 'Input Field is required!';
            isValid = false;
        }else {
            isValid = true;
        }
    });

    return isValid;
}
//Check Valid email
function checkEmail(input) {
    var isValid = true;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    if(input.value === '') {
        errorDiv.classList.remove('hide');
        errorDiv.classList.add('show');
        errorInfo.textContent = 'Input Field is required!';
        isValid = false;
    }else if (re.test(input.value.trim())) {
        // success(input)
        console.log('Email Correct');
        isValid = true;
    } else {
        errorDiv.classList.remove('hide');
        errorDiv.classList.add('show');
        errorInfo.textContent = 'Please Check your Email again and correct it!';
        isValid = false;
    }
    return isValid;
}
//check password
function checkPassword(input) {
    var isValid = true;
    // const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/;
    const regularExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if(regularExpression.test(input.value)) {
       console.log('PAssword Corredcct');
    //    return true
       isValid = true;
    } 
    else {
        errorDiv.classList.remove('hide');
        errorDiv.classList.add('show');
        errorInfo.textContent = `Password must be  character and Should contain One Capital letter, number,special char`;
        isValid = false;
    }

    return isValid;

}
function validateForm(inputArray){

    if(checkRequired(inputArray) && checkEmail(inputArray[0]) && checkPassword(inputArray[1])){
        window.location.href ='welcome.html';
        // console.log('us')
    }
    else{
        errorDiv.classList.remove('hide');
        errorDiv.classList.add('show');
        errorInfo.textContent = 'Input Field is required!';
    }

}
