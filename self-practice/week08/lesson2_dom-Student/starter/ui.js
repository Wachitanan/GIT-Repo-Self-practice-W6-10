import {addQuote ,getAllQuotes } from './quote1.js'


// Step 1: Create an array to hold quote objects
addQuote("The only limit to our realization of tomorrow is our doubts of today.", "Franklin D. Roosevelt")
addQuote("Life is what happens when you're busy making other plans.", "John Lennon")
addQuote("Do not watch the clock. Do what it does. Keep going.", "Sam Levenson" )
let quotes = getAllQuotes()

// Step 2: Select the DOM element where quotes will be rendered
const quoteList = document.getElementById('quote-list')

// Step 3: Define a function called renderQuotes()
// This function should:
// - Clear the quoteList element
// - Loop through the quotes array
// - For each quote, create a <p> element with content and author
// - Append each <p> to quoteList
function renderQuotes() {
    quoteList.innerHTML = ''
    quotes.forEach((quote) => {
        const p = document.createElement('p')
        p.textContent = `"${quote.content}" ${quote.author}`
        quoteList.appendChild(p)
    })
}

quotes = getAllQuotes()
// Step 4: Add test quotes manually and call renderQuotes()
// Example:
// addQuote('Stay hungry, stay foolish.', 'Steve Jobs')
// renderQuotes();
renderQuotes()