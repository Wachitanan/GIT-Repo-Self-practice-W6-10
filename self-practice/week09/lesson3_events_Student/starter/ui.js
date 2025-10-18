import { addQuote, deleteQuote, getAllQuotes, updateQuote} from "./quote.js"

let quotes = []

// Select DOM elements
const quoteList = document.getElementById("quote-list")
const form = document.getElementById("quoteForm")
const contentInput = document.getElementById("content")
const authorInput = document.getElementById("author")
const idInput = document.getElementById("quoteId")
const randomBtn = document.getElementById("randomBtn")
const randomDisplay = document.getElementById("randomQuoteDisplay")

function createQuoteElement(quote) {
  // a quote element example
  //<section id="quote-list">
  //  <div data-id="1">
  //    <p>Confidence comes from discipline and training</p>
  //    <p>Robert</p>
  //    <button class="edit-btn" data-id="1">
  //      Edit
  //    </button>
  //    <button class="delete-btn" data-id="1">
  //      Delete
  //    </button>
  //  </div>
  // </section>
  const divElement = document.createElement("div")
  divElement.setAttribute("data-id",quote.id)

  const pContent = document.createElement("p")
  pContent.textContent = quote.content

  const pAuthor = document.createElement("p")
  pAuthor.textContent = quote.author

  const editBtn = document.createElement("button")
  editBtn.className = "edit-btn"
  editBtn.textContent = "Edit"
  editBtn.setAttribute("data-id",quote.id)

  const delBtn = document.createElement("button")
  delBtn.className = "delete-btn"
  delBtn.textContent = "Delete"
  delBtn.setAttribute("data-id",quote.id)

  editBtn.addEventListener("click" , () =>{
    contentInput.value = quote.content
    authorInput.value = quote.author
    idInput.value = quote.id
  })

  delBtn.addEventListener("click" , () =>{
    deleteQuote(quote.id)
    deleteQuoteFromDOM(quote.id)
  })

  divElement.appendChild(pContent)
  divElement.appendChild(pAuthor)
  divElement.appendChild(editBtn)
  divElement.appendChild(delBtn)
  return divElement
}

// Add, edit, delete quote functions

function addQuoteToDOM(quote) {
  const quoteElement = createQuoteElement(quote)
  quoteList.appendChild(quoteElement)
}

function updateQuoteInDOM(quote) {
  const oldQuote = quoteList.querySelector(`[data-id='${quote.id}']`)
  if(oldQuote){
    oldQuote.children[0].textContent = quote.content
    oldQuote.children[1].textContent = quote.author
  }
}

function deleteQuoteFromDOM(id) {
  const delQuote = quoteList.querySelector(`[data-id='${id}']`)
  if(delQuote){
    quoteList.removeChild(delQuote)
  }
}

function renderQuotes() {
  quoteList.innerHTML = ""
  quotes = getAllQuotes()
  quotes.forEach((q)=> addQuoteToDOM(q))
}

function showRandomQuote() {
  quotes = getAllQuotes()
  if(quotes.length === 0){
    randomDisplay.textContent = "-- No quotes to show --"
  }else{
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const randomQuote = quotes[randomIndex]
    randomDisplay.textContent = `"${randomQuote.content}" — ${randomQuote.author}`
  }
}

// Event listeners for form submission, edit, and delete clicks
form.addEventListener("submit" , (event) =>{
  event.preventDefault()
  const content = contentInput.value
  const author = authorInput.value
  const id = idInput.value

  if(id){
    const quote = updateQuote(parseInt(id),content,author)
    updateQuoteInDOM(quote)
  }else{
    const quote = addQuote(content,author)
    addQuoteToDOM(quote)
  }

  form.reset()
  idInput.value = ""
})

randomBtn.addEventListener("click" , showRandomQuote)

renderQuotes()