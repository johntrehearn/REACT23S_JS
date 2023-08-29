const calcGasoline = () => {
  const price = document.querySelector('#price').value
  const money = document.querySelector('#money').value
  const answer = document.querySelector('#answer')

  let text;

  const amount = (money / price).toFixed(2);

  /*
   if (amount >= 10 ) {
      text = `You could get about ${amount} liters, good, now you can escape!`
    } else {
      text = `You could get about ${amount} liters, sorry, you have to stay!`
    } 
  */

  amount >= 10 ? text = `You could get about ${amount} liters, good, now you can escape!` : text = `You could get about ${amount} liters, sorry, you have to stay!`

  answer.textContent = text;
}

