// Write a function called maxSubarraySum which accepts an array of integers
// and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum(arr, num) {
  if ( num > arr.length){
      return null;
  }

  let tempSum = 0;
  for (let i = 0; i < num; i++){ // O(M)
      tempSum += arr[i];
  }
  let maxSum = tempSum;

  for (let i = num; i < arr.length; i++) { // O(N)
      tempSum = tempSum - arr[i - num] + arr[i];

      maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

// Time Complexity: O(N)
// Space Complexity: O(1)

// maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// maxSubarraySum([1,2,5,2,8,1,5],4) // 17
// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([],4) // null

console.log(maxSubarraySum([4,2,1,6],1))
