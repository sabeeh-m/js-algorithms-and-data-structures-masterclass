// Collect all of the odd values in an array
// PURE RECURSION

// Complexity introduced by recursive nature: O(N)
// Complexity introduced by function: O(N^2)
function collectOddValues(arr) {
  let newArr = [];

  if(arr.length === 0) {
      return newArr;
  }

  if(arr[0] % 2 !== 0) { // Access - O(1)
      newArr.push(arr[0]); // push - O(1), Access - O(1)
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1))); // concat - O(N), slice - O(N)
  return newArr;
}

// Time Complexity: O(N^3)
// Space Complexity: O(N^2)

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]))
