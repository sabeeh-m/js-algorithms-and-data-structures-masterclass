// Write a function called recursiveRange which accepts a number and
// adds up all the numbers from 0 to the number passed to the function

// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(num) {
  if (num === 0) return 0;

  return num + recursiveRange(num - 1);
}

// Time Complexity: O(N)
// Space Complexity: O(N)

// recursiveRange(6) // 21
// recursiveRange(10) // 55

console.log(recursiveRange(10))
