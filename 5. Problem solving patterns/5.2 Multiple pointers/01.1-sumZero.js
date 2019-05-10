// Write a function called sumZero which accepts
// a sorted array of integers.
// The function should find the first pair
// where the sum is 0.
// Return an array that includes both values
// that sum to zero or undefined if a pair does not exist.

function sumZero(arr){
  for(let i = 0; i < arr.length; i++){ // O(N)
      for(let j = i+1; j < arr.length; j++){ // O(N)
          if(arr[i] + arr[j] === 0){ // O(1)
              return [arr[i], arr[j]];
          }
      }
  }
}

// Time Complexity: O(N^2)
// Space Complexity: O(1)

// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
// sumZero([-2,0,1,3]) // undefined
// sumZero([1,2,3]) // undefined

console.log(sumZero([-3,-2,-1,0,1,2,3]))
