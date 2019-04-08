// Write a function factorial which accepts a number and returns the factorial
// of that number. A factorial is the product of an integer and all the integers
// bellow it; e.g., factorial four (4!) is equal to 24, because 4 * 3 * 2 * 1
// equals 24. factorial zero (0!) is always 1;

// factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

// Complexity introduced by recursive nature: O(N)
// Complexity introduced by function: O(1)
// Memory allocated by function: O(1)
function factorial(num) {
  if (num < 0) return 0; // O(1)
  if (num === 0) return 1; // O(1)

  return num * factorial(num - 1); // O(1)
}

// Time Complexity: O(N)
// Space Complexity: O(N)

// factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

console.log(factorial(7))
