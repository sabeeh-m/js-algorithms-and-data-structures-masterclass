function factorial(num) {
  if (num === 1) return 1;

  return num * factorial(num - 1);
}

// Time Complexity: O(N)
// Space Complexity: O(N)

console.log(factorial(5))
