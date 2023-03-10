let btn = document.getElementById('btn');
let firstName = document.getElementById('first_name');
var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
} else {
    confirm_password.setCustomValidity('');
}
}
password.onchange = validatePassword;
btn.addEventListener('click',validatePassword);