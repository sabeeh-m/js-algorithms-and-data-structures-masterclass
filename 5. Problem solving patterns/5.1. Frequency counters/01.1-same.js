// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array
// has it's corresponding value squared in the second array.
// The frequency of values must be the same.

function same(arr1, arr2){
  if(arr1.length !== arr2.length){
      return false;
  }

  for(let i = 0; i < arr1.length; i++){ // O(N)
      let correctIndex = arr2.indexOf(arr1[i] ** 2) // O(N)
      if(correctIndex === -1) {
          return false;
      }
      arr2.splice(correctIndex,1)
  }
  return true
}

// Time Complexity: O(N^2)
// Space Complexity: O(1)

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

console.log(same([1,2,3], [4,1,9]))
