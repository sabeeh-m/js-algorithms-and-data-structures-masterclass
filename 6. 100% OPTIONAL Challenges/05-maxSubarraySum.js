// Given an array of integers and a number, write a function called maxSubArraySum,
// which finds the maximum sum of a subarray with the length of the number passed
// to the function. Note that a subarray consist of consecutive elements from the
// original array. In the first example below, [100, 200, 300] is a subarray of the
// original array, but [100,300] is not.

// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) // 39
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2) // 5
// maxSubarraySum([2,3], 5) // null

// Constraints:
// Time Complexity - O(N)
// Space Complexity - O(1)

// Sliding Window pattern
function maxSubarraySum(arr, length) {
  if (length > arr.length) {
    return null;
  }

  let sum = 0;
  for ( let i = 0; i < length; i++) {
    sum += arr[i];
  }

  let maxSum = sum;
  for (let end = length; end < arr.length; end++) {
    sum = sum - arr[end - length] + arr[end];

    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) // 39
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2) // 5
// maxSubarraySum([2,3], 5) // null

console.log(maxSubarraySum([100,200,300,400], 2))
