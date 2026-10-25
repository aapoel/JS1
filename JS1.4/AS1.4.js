'use strict';

/**
 * Returns a new array with the numbers sorted in ascending order.
  @param {number[]} numbers
  @returns {number[]} 
 */
const sortArray = (numbers) => {
  return [...numbers].sort((a, b) => a - b);
};


const originalArray = [42, 7, 19, 3, 88, 1, 25];
const sortedArray = sortArray(originalArray);

console.log('Original array:', originalArray);
console.log('Sorted array:', sortedArray);