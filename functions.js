const getQuote = document.querySelector('#quotebox')
const textBox = document.querySelector('#textbox')
const displayScore = document.querySelector('#display-score')
const displayTimer = document.querySelector('#display-timer')
const notify = document.querySelector('#notify')


let words = ["favor",
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
  "fish",,
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
  "legislation",
  "chip",
  "factor",
  "tribe",
  "advocate",
  "reverse",
  "register",
  "cinema",
  "innovation",
  "debate",
  "operation",
  "deficiency",
  "wage",
  "reign",
  "pumpkin",
  "goat"
]


// displays the randomized words
let randomWords = words[Math.floor(Math.random ()*words.length)]
  getQuote.innerText = randomWords

// if word is correct, randomize new word
textBox.addEventListener('keydown', () => {
  if(wordMatched()) {
    getQuote.innerText = words[Math.floor(Math.random ()*words.length)]
    textBox.value = '' // current text will clear once correct
    displayScore.innerHTML = Number(displayScore.innerHTML) + 1 // adds +1 to score on correct words
  } 
})

let endTime
let beginTime

 // game ends after 30 seconds
function gameTimer() {
  gameProgress = true;
    endTime = setInterval(gameOver, 31000)
    beginTime = setInterval(updateTimer, 1000) 
}

// clears current intervals
function gameOver() {
  clearInterval(endTime)
  clearInterval(beginTime)
  alert('Times Up!!')
}

// countdown of start game
let startTime = 30
  function updateTimer() {
    startTime = startTime -1
    displayTimer.innerText = startTime 
}

// if displayed word matches the correct word typed. Notify as correct else clear correct
function wordMatched() {
  if(textBox.value === getQuote.innerText) {
    notify.innerHTML = 'Correct!!'
    return true;
  } else {
    notify.innerHTML = ''
    return false;
  }
} 

// restart game
const resetButton = document.querySelector('.restartgame')
  resetButton.addEventListener('click', () => {
    window.location.reload(true)
})
