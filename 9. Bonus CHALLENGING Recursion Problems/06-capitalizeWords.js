// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

// capitalizedWords(['i', 'am', 'learning', 'recursion']); // ['I', 'AM', 'LEARNING', 'RECURSION']

function capitalizeWords(arr) {
  if (arr.length === 0) return [];

  return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
}

// Time Complexity: O(N^2)
// Space Complexity: O(N)

// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']))
