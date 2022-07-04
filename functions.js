const getQuote = document.querySelector('#quotebox')
const textBox = document.querySelector('#textbox')
const displayScore = document.querySelector('#display-score')
const displayTimer = document.querySelector('#display-timer')
const displayWpm = document.querySelector('#display-wpm')
const quoteInput = document.querySelector('quoteinput')


// Generate random quote on screen

let quotes = "Many of life's failures are people who did not realize how close they were to success when they gave up. -Thomas A. Edison"

console.log(quotebox)

// accounts for current letter and creates a span tag per letter
const currentWord = quotes.split('').map((char) => { const span = document.createElement('span');
span.innerText = char;
quotebox.appendChild(span);
  return span;
})

const currentLetter = currentWord[0]
currentLetter.classList.add('letter')


// Game Timer


// Reset Button


// Highlight correct word

// Highlight Incorrect word

