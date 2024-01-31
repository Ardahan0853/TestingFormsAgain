const password = document.querySelector('#password')
const confirmPassword = document.querySelector("#confirm_password")
const isPassword = document.querySelector("#isPassword")
const btn = document.querySelector("button")
var check = () => {
    if(password.value){
        if (password.value === confirmPassword.value) {
            password.style.color = 'green';
            isPassword.classList.remove('red');
            isPassword.classList.add('green');
            isPassword.innerText = '*Passwords Matching';
        } else {
            password.style.color = 'red';
            isPassword.classList.remove('green');
            isPassword.classList.add('red');
            isPassword.innerText = '*Passwords Not Matching';
        }
    }
    
}

btn.addEventListener("click", (e) => {
    if(password.value != confirmPassword.value || password.value != ''){
        e.preventDefault()

    }
    check()
})