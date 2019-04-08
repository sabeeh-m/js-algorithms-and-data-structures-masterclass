// Complexity introduced by function: O(N)
// Memory allocated by function: O(1)
function factorial(num) {
  let total = 1; // O(1)
  for(let i = num; i > 1; i--) { // O(N)
      total *= i; // O(1)
  }

  return total; // O(1)
}

// Time Complexity: O(N)
// Space Complexity: O(1)

console.log(factorial(5))
