const keylogEl = document.getElementById("keyLog")
const keyInput = document.getElementById('keyInput')

keyInput.addEventListener('keydown' , (event) => {
    const p = document.createElement('p')
    if(event.key === "Enter"){
        p.textContent = "You pressed: Enter"
        p.style.color = "blue"
    }
    else {
        p.textContent = `You pressed: ${event.key}`
        p.style.color = "black"
    }
    keylogEl.appendChild(p);
})
