const decicion = () => {
  const questionInput = document.querySelector('#question').value
  const questionOutput = document.querySelector('#questionOutput')
  const answer = document.querySelector('#answerOutput')

  let text = ''

  let randomNumber = Math.floor(Math.random() * 10);

  switch (randomNumber) {
    case 0:
      text = "Give it a shot and see what happens!"
      break;
    case 1:
      text = "Pause and think things over before deciding."
      break;
    case 2:
      text = "Learn from what you've been through before."
      break;
    case 3:
      text = "Try doing something different for a change."
      break;
    case 4:
      text = "Take care of yourself first – it matters."
      break;
    case 5:
      text = "Listen to what your heart says – it helps."
      break;
    case 6:
      text = "Stick to what feels right with your values."
      break;
    case 7:
      text = "Think about where you want to be in the long run."
      break;
    case 8:
      text = "Ask people who know about this for advice."
      break;
    case 9:
      text = "Trust your gut feeling – it's usually right."
      break;
    default:
      break;
  }
  questionOutput.textContent = `The answer to the question: "${questionInput}"
   is: `
  answer.textContent = text
  clearInput()
}

const clearInput = () => {
  if (question.value != "") {
    question.value = "";
  }
}










