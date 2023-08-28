// Loop Assignments (Don’t use arrays)

/* 1. Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)
 */

for (let i = 1; i < 100; i += 2) {
  console.log(i);
}


/* 2. Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 … Print result in one line. */

let answer = '';
let end = 98;

for (let i = 2; i < 100; i += 2) {
  answer += ' ' + i + ' ';
  answer += ' ' + end + ' ';
  end -= 2;
}
console.log(answer);

// shorter version of same solution:

let answer = '';
for (let i = 2; i <= 98; i += 2) {
  answer += i + " " + (100 - i) + " ";
}
console.log(answer);

/* 3. Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.) */

let distance, time;

while (distance != 0) {
  distance = prompt('Enter distance in kilometers');

  if (distance == 0) {
    console.log('distance 0 - game over');
    break;
  }

  time = prompt('Enter time in hours');
  let average = distance / time;
  console.log('average is: ', average);
}

/* 4. Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even. */

let even = 0;

for (let counter = 0; counter < 20; counter++) {
  let input = Number(prompt('enter a number'));
  if (input % 2 == 0) {
    even++;
  }
}
console.log('There was', even, 'even numbers');

/* 5. Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers. */

let input;
let sum = 0;
let count = 0;

while (input !== 0) {
  input = parseFloat(prompt('enter a number'));
  sum += input;
  count++;
}

console.log(sum / (count - 1));

/* 6. Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers. */

let sum = 0;

for (let i = 0; i < 25; i++) {
  const input = parseFloat(prompt(`Enter number ${i + 1}:`));
  sum += number;
}

const average = sum / 25;
console.log(`Average of the entered numbers: ${average}`);


/* 7. Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers. */

let sum = 0;
let count = 0;

while (true) {
  const input = parseFloat(prompt("Enter a number:"));

  sum += input;
  count++;

  const shouldContinue = prompt("Do you want to continue giving numbers? (y/n)").toLowerCase();
  if (shouldContinue !== 'y') {
    break;
  }
}
console.log(`Average of the entered numbers: ${sum / count}`);


/* 8. Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave. */

let smallestNumber = 0;
let inputAmount = parseInt(prompt("How many numbers do you want to provide?"));

for (let i = 0; i < inputAmount; i++) {
  const inputNumber = parseInt(prompt(`Enter number ${i + 1}:`));

  if (inputNumber < smallestNumber) {
    smallestNumber = inputNumber;
  }
}
console.log(`The smallest number among the provided numbers: ${smallestNumber}`)

// 9. Make a program that asks ten numbers and in the end prints out two biggest numbers.

// Initialize variables to store the two biggest numbers
let biggest1 = -Infinity;
let biggest2 = -Infinity;

for (let i = 0; i < 10; i++) {
  const input = parseFloat(prompt(`Enter number ${i + 1}:`));

  if (input > biggest1) {
    biggest2 = biggest1;
    biggest1 = input;
  } else if (input > biggest2) {
    biggest2 = input;
  }
}

console.log(`The two biggest numbers: ${biggest1} and ${biggest2}`);


// 10. Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number.

let sum = 0;
let smallest = Infinity;
let biggest = -Infinity;

for (let i = 0; i < 10; i++) {
  const input = parseFloat(prompt(`Enter number ${i + 1}:`));

  sum += input;

  if (input < smallest) {
    smallest = input;
  }

  if (input > biggest) {
    biggest = input;
  }
}

const average = sum / 10;

console.log(`Sum of the numbers: ${sum}. Average of the numbers: ${average}. Smallest number: ${smallest}. Biggest number: ${biggest}`);
