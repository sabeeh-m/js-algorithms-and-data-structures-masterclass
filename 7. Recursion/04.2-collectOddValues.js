// Collect all of the odd values in an array
// PURE RECURSION

// Complexity introduced by recursive nature: O(N)
// Complexity introduced by function: O(N^2)
// Memory allocated by function: O(N)
function collectOddValues(arr) {
  let newArr = []; // O(1)

  if(arr.length === 0) return newArr; // O(1)

  if(arr[0] % 2 !== 0) { // O(1) [Access - O(1)]
      newArr.push(arr[0]); // O(1) [push - O(1), Access - O(1)]
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1))); // O(N^2) [concat - O(N), slice - O(N)]
  return newArr; O(1)
}

// Time Complexity: O(N^3)
// Space Complexity: O(N^2)

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]))
