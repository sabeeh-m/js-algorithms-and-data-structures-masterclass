// Collect all of the odd values in an array

function collectOddValues(arr) {
  let result = []

  // Complexity introduced by recursive nature: O(N)
  // Complexity introduced by function: O(N)
  // Memory allocated by function: O(1)
  function helper(helperInput) {
      if(helperInput.length === 0) return; // O(1)

      if(helperInput[0] % 2 !== 0) { // O(1) [Access - O(1)]
          result.push(helperInput[0]) // O(1) [push - O(1), Access - O(1)]
      }

      helper(helperInput.slice(1)) // O(N) [slice - O(N)]
  }

  helper(arr)

  return result;
}

// Time Complexity: O(N^2)
// Space Complexity: O(N)

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]))
