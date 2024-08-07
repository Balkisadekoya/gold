const firstnameElem = document.getElementById("firstname");
const lastnameElem = document.getElementById("lastname");
const emailElem = document.getElementById("email");
const passwordElem = document.getElementById("password");
const password2Elem = document.getElementById("password2");
const firstnameErrorElem = document.getElementById("firstname-error");
const lastnameErrorElem = document.getElementById("lastname-error");
const emailErrorElem = document.getElementById("email-error");
const passwordErrorElem = document.getElementById("password-error");
const password2ErrorElem = document.getElementById("password2-error");

const formElem = document.getElementById('form');

// console.log(firstnameElem)
// console.log(lastnameElem)
// console.log(emailElem)
//add eventlistener to the form element
formElem.addEventListener("submit", (event) => {

    const emailRegExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    //trim out spaces from the input data
    const firstnamevalue = firstnameElem.value.trim();
    const lastnamevalue = lastnameElem.value.trim();
    const emailvalue = emailElem.value.trim();
    const passwordvalue = passwordElem.value.trim();
    const password2value = password2Elem.value.trim();


    //validating the firstname
    if(firstnamevalue === "" || firstnamevalue == null){
        event.preventDefault();
        firstnameErrorElem.innerHTML = "your firstname is required";

    }

    if(lastnamevalue === "" || lastnamevalue == null){
        event.preventDefault();
        lastnameErrorElem.innerHTML = "your lastname is required";

    }

if(!emailvalue.match(emailRegExp)){
    event.preventDefault()
    emailErrorElem.innerHTML ="Enter a valid email"
}
    

    if(passwordvalue === "" || passwordvalue == null){
        event.preventDefault();
        passwordErrorElem.innerHTML = "password cannot be empty";

    }

    if(passwordvalue.length <= 8) {
        event.preventDefault();
        passwordErrorElem.innerHTML = "password must not be longer than 8 character"
    }

    if(passwordvalue.length >= 15) {
        event.preventDefault();
        passwordErrorElem.innerHTML = "password must not be longer than 8 character"
    }

    if(password2value === "" || password2value == null){
        event.preventDefault();
        password2ErrorElem.innerHTML = "confirm password cannot be empty";

    }

    if(password2value  !== passwordvalue) {
        event.preventDefault();
        password2ErrorElem.innerHTML = "password doesn't match"
    }
})

