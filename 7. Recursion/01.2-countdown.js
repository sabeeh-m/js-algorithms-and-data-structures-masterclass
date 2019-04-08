// Complexity introduced by recursive nature: O(N)
// Complexity introduced by function: O(1)
// Memory allocated by function: O(1)
function countDown(num) {
  if(num <= 0) { // O(1)
      console.log("All done!"); // O(1)
      return; // O(1)
  }
  console.log(num); // O(1)

  countDown(num - 1); // O(1)
}

// Time Complexity: O(N)
// Space Complexity: O(N)

countDown(5)
