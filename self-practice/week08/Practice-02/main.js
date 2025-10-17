const box = document.getElementById('box')
const button = Array.from(document.querySelectorAll("button[data-color]"))
button.forEach((button) => {
    button.addEventListener('click', () => {
        const color = button.dataset.color;
        box.style.backgroundColor = color
        box.textContent = color.toUpperCase()
    })
})