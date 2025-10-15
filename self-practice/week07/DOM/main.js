// งาน practice ใน class

//<p format="italic"><i>Sample Italic Text</i></p>
//1. append <p> under <div id="demo">
const parent = document.getElementById('demo')
const p1 = document.createElement('p')
parent.appendChild(p1)

//1.5 add format='italic' attribute to <p>
p1.setAttribute('format','italic')
//2. try to add three different text types
//2.1 add <i>Sample Italic Text</i> with innerHTML
const p2 = document.createElement('p')
p2.innerHTML = '<i>Sample Italic Text</i>'
parent.appendChild(p2)

//2.2  add <i>Sample Italic Text</i> with innerText
const p3 = document.createElement('p')
p3.innerText = '<i>Sample Italic Text</i>'
parent.appendChild(p3)

//2.3 add <i>Sample Italic Text</i> with textContent
const p4 = document.createElement('p')
p4.textContent = '<i>Sample Italic Text</i>'
parent.appendChild(p4)
