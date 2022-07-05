const getQuote = document.querySelector('#quotebox')
const textBox = document.querySelector('#textbox')
const displayScore = document.querySelector('#display-score')
const displayTimer = document.querySelector('#display-timer')
const displayWpm = document.querySelector('#display-wpm')
const quoteInput = document.querySelector('input')
const notify = document.querySelector('#notify')
let gameProgress = false;

const words = ["favor",
  "respect",
  "blame",
  "half",
  "viable",
  "neighborhood",
  "studio",
  "bishop",
  "approve",
  "ridge",
  "include",
  "tear",
  "club",
  "stun",
  "inject",
  "shoot",
  "offer",
  "duke",
  "concern",
  "election",
  "borrow",
  "craft",
  "kinship",
  "knife",
  "cream",
  "gold",
  "commission",
  "sugar",
  "verdict",
  "fish",
  "joint",
  "spider",
  "coach",
  "crowd",
  "exotic",
  "distributor",
  "bomber",
  "dough",
  "hospitality",
  "requirement",
  "personal",
  "behead",
  "legislation",
  "chip",
  "factor",
  "tribe",
  "advocate",
  "reverse",
  "register",
  "goat"]

  let randomWords = words[Math.floor(Math.random ()*words.length)]
  getQuote.innerText = randomWords



  textBox.addEventListener('keydown', (key)=> {
  if(wordMatched()) {
    getQuote.innerText = words[Math.floor(Math.random ()*words.length)]
    textBox.value = ''
    
  }
  
  if (gameProgress === false) {
    gameTimer()
  }
 })

let endTime
let beginTime

 // game ends after 5 seconds
function gameTimer() {
    gameProgress = true;
    endTime = setInterval(gameOver, 5000)
    beginTime = setInterval(updateTimer, 1000)
}

function gameOver() {
  clearInterval(endTime)
  clearInterval(beginTime)
}

let startTime = 60
function updateTimer() {
  startTime = startTime -1
  displayTimer.innerText = startTime
}

// if displayed word matches the correct word typed. Notify as correct 
function wordMatched() {
  if(textBox.value === getQuote.innerText) {
    notify.innerHTML = 'Correct!!'
    return true;
  } else {
    notify.innerHTML = ''
    return false;
  }
} 

// Game Timer

// WPM counter

// Reset Button


// Highlight Incorrect word


