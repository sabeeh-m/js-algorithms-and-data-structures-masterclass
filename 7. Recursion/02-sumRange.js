function sumRange(num) {
  if(num === 1) return 1;
  return num + sumRange(num-1);
}

// Time Complexity: O(N)
// Space Complexity: O(N)

console.log(sumRange(5))
