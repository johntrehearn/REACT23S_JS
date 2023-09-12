const form = document.querySelector('form')
// all inputs
const customer = document.querySelector('#name')
const size = document.querySelectorAll('[name="size"]')
const toppings = document.querySelectorAll('input[type="checkbox"]')
const delivery = document.querySelector('#delivery')
const order_price = document.querySelector('#price')

const pizzaOrder = () => {
  let customerName = customer.value
  let sizeResult = ''
  let price = 0;


  size.forEach(item => {
    if (item.checked) {
      sizeResult = item.id
    }
  })

  switch (sizeResult) {
    case 'size2':
      price += 7.5;
      break;
    case 'size4':
      price += 10.5;
      break;
    case 'size6':
      price += 12.5;
      break;
    case 'size8':
      price += 15.5;
      break;
  };



  order_price.textContent = price
}

form.addEventListener('input', pizzaOrder)