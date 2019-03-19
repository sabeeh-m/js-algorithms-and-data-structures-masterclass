// Time Complexity: O(N)
function addUpTo1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// Time Complexity: O(1)
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

console.time("Approach 1");
addUpTo1(10000000000);
console.timeEnd("Approach 1");

console.time("Approach 2");
addUpTo2(10000000000);
console.timeEnd("Approach 2");
