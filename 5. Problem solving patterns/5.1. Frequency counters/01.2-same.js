// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array
// has it's corresponding value squared in the second array.
// The frequency of values must be the same.

function same(arr1, arr2){
  if(arr1.length !== arr2.length){
      return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for(let val of arr1){ // O(N)
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for(let val of arr2){ // O(N)
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for(let key in frequencyCounter1){ // O(N)
      if(!(key ** 2 in frequencyCounter2)){ // O(1)
          return false;
      }
      if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){ // O(1)
          return false;
      }
  }

  return true;
}

// Time Complexity: O(N)
// Space Complexity: O(N) [O(2*N)]

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

console.log(same([1,2,3], [4,1,9]))
