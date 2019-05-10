// Implement a function called countUniqueValues,
// which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// Without modifing existed array
function countUniqueValues(arr){
  if (arr.length === 0)
      return 0;

  let counter = 1;

  let prev = 0;
  let next = 1;
  while (next < arr.length){
      while (next < arr.length && arr[prev] === arr[next]){ // skip the same values
          next++;
      }


      if (next < arr.length) {
//         if (next - prev === 1) // Count only items that appeared only once
        counter++;

        prev = next;
        next++;
      }
  }

  return counter;
}

// Time Complexity: O(N)
// Space Complexity: O(1)

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

console.log(countUniqueValues([2, 2, 2]))
