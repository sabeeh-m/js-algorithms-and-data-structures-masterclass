function factorial(num) {
  let total = 1;
  for(let i = num; i > 1; i--){
      total *= i;
  }

  return total;
}

// Time Complexity: O(N)
// Space Complexity: O(1)

console.log(factorial(5))
