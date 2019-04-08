// Complexity introduced by recursive nature: O(N)
// Complexity introduced by function: O(1)
// Memory allocated by function: O(1)
function factorial(num) {
  if (num === 1) return 1; // O(1)

  return num * factorial(num - 1); // O(1)
}

// Time Complexity: O(N)
// Space Complexity: O(N)

console.log(factorial(5))
