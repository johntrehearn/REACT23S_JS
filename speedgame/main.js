const startButton = document.querySelector('#startButton')
const endButton = document.querySelector('#endButton')
const circles = document.querySelectorAll('.circle')
const scoreDisplay = document.querySelector('.score')

// global variables
let score = 0;

// code from W3S page for the random number 
/* function getRndInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
} */

const getRndInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const clickCircle = (i) => {
  console.log('circle was clicked', i);
  score += 10
  scoreDisplay.textContent = score
}

circles.forEach((circle, i) => {
  circle.addEventListener('click', () => clickCircle(i))
})

// same functionality as forEach() but for...of instead
/* for (const [i, item] of circles.entries()) {
  item.addEventListener('click', () => clickCircle(i))
} */

const startGame = () => {
  console.log('game started');
}

const endGame = () => {
  console.log('game ended');
}

startButton.addEventListener('click', startGame)
endButton.addEventListener('click', endGame)