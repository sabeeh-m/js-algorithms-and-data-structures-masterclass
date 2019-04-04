function countDown(num) {
  if(num <= 0) {
      console.log("All done!");
      return;
  }
  console.log(num);

  countDown(num - 1);
}

// Time Complexity: O(N)
// Space Complexity: O(N)

countDown(5)
