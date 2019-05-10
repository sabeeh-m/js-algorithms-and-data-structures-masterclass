// Write a function called maxSubarraySum which accepts an array of integers
// and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum(arr, num) {
  if ( num > arr.length) {
      return null;
  }

  let maxSum = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i ++) { // O(N)
      let tempSum = 0;
      for (let j = 0; j < num; j++) { // O(M)
          tempSum += arr[i + j];
      }

      if (tempSum > maxSum) {
          maxSum = tempSum;
      }
  }

  return maxSum;
}

// Time Complexity: O(N * M)
// Space Complexity: O(1)

// maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// maxSubarraySum([1,2,5,2,8,1,5],4) // 17
// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([],4) // null

console.log(maxSubarraySum([4,2,1,6],1))
