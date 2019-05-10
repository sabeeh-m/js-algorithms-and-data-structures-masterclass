// Write a function called sumZero which accepts
// a sorted array of integers.
// The function should find the first pair
// where the sum is 0.
// Return an array that includes both values
// that sum to zero or undefined if a pair does not exist.

function sumZero(arr){
  let left = 0;
  let right = arr.length - 1;
  while(left < right){ // O(N)
      let sum = arr[left] + arr[right]; // O(1)
      if(sum === 0){
          return [arr[left], arr[right]];
      } else if(sum > 0){
          right--;
      } else {
          left++;
      }
  }
}

// Time Complexity: O(N)
// Space Complexity: O(1)

// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
// sumZero([-2,0,1,3]) // undefined
// sumZero([1,2,3]) // undefined

console.log(sumZero([-3,-2,-1,0,1,2,3]))
