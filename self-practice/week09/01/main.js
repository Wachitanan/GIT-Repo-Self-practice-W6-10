const form = document.querySelector('form')
const username = document.getElementById('username')
const password = document.getElementById('password')
const email = document.getElementById('email')
const confirmP = document.getElementById('confirm-password')
const message = document.querySelector('form p')

form.addEventListener('submit', (e) => {
    e.preventDefault()


if (username.value.trim() === "" || 
    email.value.trim() === "" ||
    password.value.trim() === "" ||
    confirmP.value.trim() === "") {
        message.style.color = "red"
        message.textContent = "missing some values, please try again!"
        return
    }

if(password.value !== confirmP.value) {
    message.style.color = "red"
    message.textContent = "password and confirm do not match, check again!"
    return
} 
    message.style.color = "green"
    message.textContent = "your data completed!"
})