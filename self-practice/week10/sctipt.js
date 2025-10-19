const bgInput = document.getElementById('bgColor')
const fontInput = document.getElementById('fontColor')
const fontSize = document.getElementById('fontSize')
const saveBtn = document.getElementById('saveBtn')
const resetBtn = document.getElementById('resetBtn')

function applySettings(bg, font , size){
    document.body.style.backgroundColor = bg
    document.body.style.color = font
    
    if(size === small) document.body.style.fontSize = '14px'
    else if(size === medium) document.body.style.fontSize = '18px'
    else if (size === large) document.body.style.fontSize = '22px'
}

saveBtn.addEventListener('click', () => {
    localStorage.setItem('bgColor',bgInput.value)
    localStorage.setItem('fontColor', fontInput.value)
    localStorage.setItem('fontSize' , fontSize.value)
    applySettings(bgInput.value , fontInput.value,fontSize.value)
})

document.addEventListener('DOMContentLoaded' , () => {
    const bg = localStorage.getItem('bgColor') || 'white'
    const font = localStorage.getItem('fontColor') || 'black'
    const size = localStorage.getItem('fontSize') || 'medium'

    bgInput.value = bg
    fontInput.value = font
    fontSize.value = size
    applySettings('bg , font , size')
})

resetBtn.addEventListener('click' ,() => {
    localStorage.clear()
    applySettings('white','black','medium')
    bgInput.value = 'white'
    fontInput.value = 'black'
    fontSize.value = 'medium'
})