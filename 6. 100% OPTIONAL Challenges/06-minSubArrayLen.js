// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.

// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

// Constraints:
// Time Complexity - O(N)
// Space Complexity - O(1)

// Sliding Window pattern
function minSubArrayLen(arr, num) {
  let start = 0;
  let end = 0;
  let sum = 0;
  let minLength = Number.MAX_SAFE_INTEGER;

  while (start < arr.length) {
    while (sum < num && end < arr.length) {
      // increase the window to the right side
      sum += arr[end];
      end++;
    }

    if (sum >= num) {
      let currentLength = end - start;
      minLength = Math.min(minLength, currentLength);
      // shrink the window from the left side
      sum = sum - arr[start];
      start++;
    } else {
      break; // reached the end of the array and the sum less than the num
    }
  }

  return (minLength === Number.MAX_SAFE_INTEGER) ? 0 : minLength;
}

// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39));
