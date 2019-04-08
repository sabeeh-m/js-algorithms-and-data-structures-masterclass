// Complexity introduced by function: O(N)
// Memory allocated by function: O(1)
function countDown(num) {
  for(let i = num; i > 0; i--) { // O(N)
      console.log(i); // O(1)
  }

  console.log("All done!"); // O(1)
}

// Time Complexity: O(N)
// Space Complexity: O(1)

countDown(5)
