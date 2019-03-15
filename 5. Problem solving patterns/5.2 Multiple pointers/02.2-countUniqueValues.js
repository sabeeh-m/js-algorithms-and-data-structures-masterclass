// Implement a function called countUniqueValues,
// which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// With modifing existed array
function countUniqueValues(arr){
  if (arr.length === 0)
      return 0;

  let i = 0;

  for (let j = 1; j < arr.length; j++){
      if (arr[i] !== arr[j]){
          i++;
          arr[i] = arr[j];
      }
  }

  return i + 1;
}

// Time Complexity: O(N)
// Space Complexity: O(1)

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

console.log(countUniqueValues([-2,-1,-1,0,1]))
