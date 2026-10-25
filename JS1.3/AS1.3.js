'use strict';


const numbers = [];

// Prompt until the user types "done"
let input;
do {
  input = prompt("Enter a number (or 'done' to finish):");

  
  if (input === null || input.trim().toLowerCase() === 'done') {
    break;
  }

  const num = Number(input);
  if (input.trim() === '' || Number.isNaN(num)) {
    alert('That is not a valid number. Please try again.');
  } else {
    numbers.push(num);
  }
} while (true);


const evens = [];
for (const num of numbers) {
  
  if (num % 2 === 0) {
    evens.push(num);
  }
}


const resultElement = document.querySelector('#result');
resultElement.textContent = `Even Numbers: ${
  evens.length > 0 ? evens.join(', ') : 'None'
}`;


document.querySelector('#end').textContent = 'End of program.';