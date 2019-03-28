// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first
// letter of each string in the array.

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

function capitalizeFirst(arr) {
  if (arr.length === 0) return [];

  let word = arr[0];
  word = word[0].toUpperCase() + word.slice(1);

  return [word].concat(capitalizeFirst(arr.slice(1)));
}

// Time Complexity: O(N^2) ?
// Space Complexity: O(N) ?

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

console.log(capitalizeFirst(['car','taco','banana']))
