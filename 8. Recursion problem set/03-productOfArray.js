// Write a function called productOfArray which takes in an array of numbers
// and returns the product of them all

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// Complexity introduced by recursive nature: O(N)
// Complexity introduced by function: O(N)
// Memory allocated by function: O(1)
function productOfArray(arr) {
  if (arr.length === 0) return 1; // O(1)

  return arr[0] * productOfArray(arr.slice(1)); // O(N) [slice - O(N)]
}

// Time Complexity: O(N^2)
// Space Complexity: O(N)

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

console.log(productOfArray([1,2,3,10]))
