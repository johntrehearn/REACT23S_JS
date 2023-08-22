// simple if statement, which is asking to enter a name and compares it with predefined one
let firstName = prompt('Please, tell your name');

if (firstName === 'Margit') {
  console.log('Welcome') // true
} else {
  console.log('Try again');// false
}

// if statement where we ask from user to enter a temperature. to avoid issues with strings, we use parseInt() method
let temperature = parseInt(prompt("Enter the temperature in Celsius:"));
if (temperature <= 15) {
  console.log("Wear a jacket!");
} else {
  console.log("No need for a jacket.");
}

// an example of the switch statement. remember, switch can not do the calculations for you and case is always a fixed value
let season = prompt('What is your favorite season?').toLowerCase()

switch (season) {
  case 'spring':
    console.log('so you like a spring');
    break;
  case 'summer':
    console.log('so you like a summer');
    break;
  case 'fall':
    console.log('so you like a fall');
    break;
  case 'winter':
    console.log('WHAT?!?!?!');
    break;
  default:
    console.log('did you enter correct season name?')
    break;
}

/* TASK

Make a program that asks about hourly salary and how many hours the user worked in one day. With this information, the program calculates the day’s salary.

The salary is calculated as follows:
 - first 7 hours by hourly salary
 - next 2 hours, 50% extra
 - rest of the hours 100% extra */

const hourlySalary = parseFloat(prompt("Enter your hourly salary:"));
const hoursWorked = parseFloat(prompt("Enter the number of hours worked in a day:"));

let totalSalary = 0;

if (hoursWorked <= 7) {
  totalSalary = hourlySalary * hoursWorked;
} else if (hoursWorked <= 9) {
  totalSalary = (hourlySalary * 7) + (hourlySalary * 1.5 * (hoursWorked - 7));
} else {
  totalSalary = (hourlySalary * 7) + (hourlySalary * 1.5 * 2) + (hourlySalary * 2 * (hoursWorked - 9));
}

alert("Your day's salary is: $" + totalSalary.toFixed(2));


/* Task - Random Number 
 Make a program that asks for three numbers from the user. The program prints out the sum of the numbers if any of the numbers are positive. If all the numbers are positive, also print out multiplication. If all numbers are negative, the text “only negatives” is printed. Handle zero as positive in this assignment. */

const randomNumbers = () => {
  const num1 = Number(prompt('Please give first number'));
  const num2 = Number(prompt('Please give second number'));
  const num3 = Number(prompt('Please give third number'));

  const mult = num1 * num2 * num3;
  const sum = num1 + num2 + num3;

  if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
    console.log('sum is: ' + sum + ' and multiplication is: ' + mult)
  } else if (num1 <= 0 || num2 <= 0 || num3 <= 0) {
    if (num1 <= 0 && num2 <= 0 && num3 <= 0) {
      console.log('all numbers are negative');
    } else {
      console.log('sum is:', sum);
    }
  }
}
randomNumbers() 
