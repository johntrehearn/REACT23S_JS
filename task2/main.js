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
